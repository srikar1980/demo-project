import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import "./App.css";
import { JobPost } from "./components/JobPost";

export default function App() {
  const [loading, setLoading] = useState(true);
  const initialState = [
    {
      id: 1,
      title: "React Developer",
      location: "Chennai",
      experience: "3 years",
      postedDate: "Jun 25, 2026",
    },
    {
      id: 2,
      title: "Dot Net Developer",
      location: "Bangalore",
      experience: "8 years",
      postedDate: "Jun 26, 2026",
    },
    {
      id: 3,
      title: "Azure Developer",
      location: "Pune",
      experience: "9 years",
      postedDate: "Jun 29, 2026",
    },
  ];
  const [jobPosts, setJobPosts] = useState(initialState);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDelete = (id) => {
    const updatedJobs = jobPosts.filter((job) => job.id !== id);
    setJobPosts(updatedJobs);
  };

  return (
    <main>
      <section className="job-container">
        <h1>Job List For You</h1>

        <div className="job-list">
          {loading ? (
            <div className="loading-container">
              <FaSpinner className="spinner" />
              <p>Loading jobs...</p>
            </div>
          ) : jobPosts.length === 0 ? (
            <div className="empty-state">
              <h2>No Job Posts!</h2>
              <p>Please check back later.</p>
            </div>
          ) : (
            jobPosts.map((item) => (
              <JobPost
                key={item.id}
                title={item.title}
                location={item.location}
                experience={item.experience}
                postedDate={item.postedDate}
                onDelete={() => handleDelete(item.id)}
              />
            ))
          )}
        </div>
      </section>
    </main>
  );
}
