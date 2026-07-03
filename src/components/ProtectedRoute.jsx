// import { Navigate } from "react-router-dom";



// const ProtectedRoute = ({children,isLoggedIn}) => {
//   if(!isLoggedIn){
//     return <Navigate to= "/"/>
//   }
//   return children;

// }

// export default ProtectedRoute


import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn }) => {
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;