// import { useState } from "react";
// import { FaSpinner } from "react-icons/fa";

// const initialState = {
//   firstName: "",
//   email: "",
//   password: "",
//   phone: "",
//   gender: "",
//   city: "",
//   skills: [],
//   bio: "",
// };
// const NewForm = () => {
//   const [formData, setFormData] = useState(initialState);
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSkills = (e) => {
//     const { value, checked } = e.target;
//     let updatedSkills = [...formData.skills];
//     if (checked) {
//       updatedSkills.push(value);
//     } else {
//       updatedSkills = updatedSkills.filter((skill) => skill !== value);
//     }
//     setFormData((prev) => ({
//       ...prev,
//       skills: updatedSkills,
//     }));
//   };

//   const validateForm = () => {
//     let temp = {};
//     if (!formData.firstName.trim()) {
//       temp.firstName = "Please enter first name";
//     }
//     return temp;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);
//       let formErrors = validateForm();

//       if (Object.keys(formErrors).length) {
//         setErrors(formErrors);
//         return;
//       }
//     } catch {
//       setLoading(false);
//       alert("formdata submitted!");
//       console.log(formData);
//       setFormData(initialState);

//       setErrors({});
//     }
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="firstName"
//           value={formData.firstName}
//           placeholder="First Name"
//           onChange={handleChange}
//         />
//         <span>{errors.firstName}</span>
//         <input
//           type="text"
//           name="email"
//           value={formData.email}
//           placeholder="Email"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="password"
//           value={formData.password}
//           placeholder="Password"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="phone"
//           value={formData.phone}
//           placeholder="Phone"
//           onChange={handleChange}
//         />
//         <select name="city" value={formData.city} onChange={handleChange}>
//           <option value="">Select City</option>
//           <option>Hyderabad</option>
//           <option>Nizamabad</option>
//         </select>
//         <div>
//           <label htmlFor="">
//             {" "}
//             <input
//               type="radio"
//               name="gender"
//               value="male"
//               onChange={handleChange}
//             />
//             Male
//           </label>
//           <label>
//             {" "}
//             <input
//               type="radio"
//               name="gender"
//               value="female"
//               onChange={handleChange}
//             />
//             Female
//           </label>
//         </div>

//         <textarea
//           name="bio"
//           placeholder="About yourself"
//           value={formData.bio}
//           onChange={handleChange}
//         />

//         <div>
//           <label>
//             <input type="checkbox" value="React" onChange={handleSkills} />
//             React
//           </label>
//           <label>
//             <input type="checkbox" value="Python" onChange={handleSkills} />
//             Python
//           </label>
//           <label>
//             <input type="checkbox" value="AWS" onChange={handleSkills} />
//             AWS
//           </label>
//         </div>
//         <button type="submit">{loading ? <FaSpinner /> : ""}Submit</button>
//       </form>
//     </div>
//   );
// };

// export default NewForm;

import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

const initialState = {
  firstName: "",
  email: "",
  password: "",
  phone: "",
  gender: "",
  city: "",
  skills: [],
  bio: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fakeSubmitToServer = (data) =>
  new Promise((resolve) => setTimeout(() => resolve(data), 1500));

const NewForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSkills = (e) => {
    const { value, checked } = e.target;
    let updatedSkills = [...formData.skills];
    if (checked) {
      updatedSkills.push(value);
    } else {
      updatedSkills = updatedSkills.filter((skill) => skill !== value);
    }
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  const validateForm = () => {
    let temp = {};
    if (!formData.firstName.trim()) {
      temp.firstName = "Please enter first name";
    }
    if (!emailRegex.test(formData.email)) {
      temp.email = "Invalid email";
    }
    return temp;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await fakeSubmitToServer(formData);

      alert("Form submitted!");
      console.log(formData);
      setFormData(initialState);
    } catch (err) {
      console.error(err);
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder="First Name"
          onChange={handleChange}
        />
        <span>{errors.firstName}</span>
        <input
          type="text"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <span>{errors.email}</span>

        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          placeholder="Phone"
          onChange={handleChange}
        />
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>
          <option>Hyderabad</option>
          <option>Nizamabad</option>
        </select>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        <textarea
          name="bio"
          placeholder="About yourself"
          value={formData.bio}
          onChange={handleChange}
        />

        <div>
          <label>
            <input type="checkbox" value="React" onChange={handleSkills} />
            React
          </label>
          <label>
            <input type="checkbox" value="Python" onChange={handleSkills} />
            Python
          </label>
          <label>
            <input type="checkbox" value="AWS" onChange={handleSkills} />
            AWS
          </label>
        </div>

        {errors.submit && <span>{errors.submit}</span>}

        <button type="submit" disabled={loading}>
          {loading ? <FaSpinner className="spin" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default NewForm;
