// import { Fragment } from "react";
// import { MdDelete } from "react-icons/md";

// const JobPost = ({
//   title,
//   location,
//   experience,
//   postedDate,
//   onDelete,
// }) => {
//   return (
//     <Fragment>
//       <div className="job-card">
//         <div className="card-header">
//           <h2>JobPost Title: {title}</h2>

//           <MdDelete
//             className="delete-icon"
//             onClick={onDelete}
//           />
//         </div>

//         <p>Location: {location}</p>
//         <p>Experience: {experience}</p>
//         <p>Posted Date: {postedDate}</p>
//       </div>
//     </Fragment>
//   );
// };

// export { JobPost };


import { MdDelete } from "react-icons/md";

const JobPost = ({
  post,
  onDelete,
}) => {
  return (
    <div className="job-card">
      <div className="card-header">
        <h2>{post.title}</h2>

        <MdDelete
          className="delete-icon"
          onClick={onDelete}
        />
      </div>

      <p>{post.body}</p>
    </div>
  );
};

export { JobPost };

