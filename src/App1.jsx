// import { useEffect, useState } from "react";
// import { FaSpinner } from "react-icons/fa";
// import "./App.css";
// import { JobPost } from "./components/JobPost";

// export default function App() {
//   const [loading, setLoading] = useState(true);
//   const initialState = [
//     {
//       id: 1,
//       title: "React Developer",
//       location: "Chennai",
//       experience: "3 years",
//       postedDate: "Jun 25, 2026",
//     },
//     {
//       id: 2,
//       title: "Dot Net Developer",
//       location: "Bangalore",
//       experience: "8 years",
//       postedDate: "Jun 26, 2026",
//     },
//     {
//       id: 3,
//       title: "Azure Developer",
//       location: "Pune",
//       experience: "9 years",
//       postedDate: "Jun 29, 2026",
//     },
//   ];
//   const [jobPosts, setJobPosts] = useState(initialState);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleDelete = (id) => {
//     const updatedJobs = jobPosts.filter((job) => job.id !== id);
//     setJobPosts(updatedJobs);
//   };

//   return (
//     <main>
//       <section className="job-container">
//         <h1>Job List For You</h1>

//         <div className="job-list">
//           {loading ? (
//             <div className="loading-container">
//               <FaSpinner className="spinner" />
//               <p>Loading jobs...</p>
//             </div>
//           ) : jobPosts.length === 0 ? (
//             <div className="empty-state">
//               <h2>No Job Posts!</h2>
//               <p>Please check back later.</p>
//             </div>
//           ) : (
//             jobPosts.map((item) => (
//               <JobPost
//                 key={item.id}
//                 title={item.title}
//                 location={item.location}
//                 experience={item.experience}
//                 postedDate={item.postedDate}
//                 onDelete={() => handleDelete(item.id)}
//               />
//             ))
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }

// using fake api call

import axios from "axios";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import "./App.css";
import { JobPost } from "./components/JobPost";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [jobPosts, setJobPosts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
  //     .then((response) => response.json())
  //     .then((data) => {
  //         setJobPosts(data);
  //         setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // }, []);

  // another way of fetching data

  //   async function fetchData() {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/posts?_limit=6"
  //   );

  //   return response.json();
  // }

  // fetchData().then(data => {
  //   console.log(data);
  // });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicoode.com/posts?_limit=6",
        );
        setJobPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);

        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = jobPosts.filter((post) => {
    const query = searchValue.toLowerCase();
    console.log(query)

    return (
      post.title.toLowerCase().includes(query) ||
      String(post.id).includes(query)
    );
  });

  const handleDelete = (id) => {
    const updatedPosts = jobPosts.filter((post) => post.id !== id);

    setJobPosts(updatedPosts);
  };

  return (
    <main>
      <section className="job-container">
        <h1>Latest Posts</h1>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search by title or id..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        <div className="job-list">

          {loading ? (
            <div className="loading-container">
              <FaSpinner className="spinner" />
              <p>Loading posts...</p>
            </div>
          ) : jobPosts.length === 0 ? (
            <div className="empty-state">
              <h2>No Posts Available!</h2>
              <p>Please check back later.</p>
            </div>
          ) : (
            filteredPosts.map((post) => (
              <JobPost
                key={post.id}
                post={post}
                onDelete={() => handleDelete(post.id)}
              />
            ))
          )}
        </div>
      </section>
    </main>
  );
}
