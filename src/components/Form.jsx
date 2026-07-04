// import { useState } from "react";
// // import "./FormComponent.css";

// const initialState = {
//   firstName: "",
//   email: "",
//   password: "",
//   phone: "",
//   dob: "",
//   gender: "",
//   city: "",
//   skills: [],
//   bio: "",
//   documents: [
//     {
//       title: "",
//       number: "",
//       file: null,
//     },
//   ],
// };

// const FormComponent = () => {
//   const [formData, setFormData] = useState(initialState);
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

//     setFormData({
//       ...formData,
//       skills: updatedSkills,
//     });
//   };

//   // const handleDocumentChange = (index, e) => {
//   //   const { name, value, files, type } = e.target;

//   //   const docs = [...formData.documents];

//   //   docs[index][name] = type === "file" ? files[0] : value;

//   //   setFormData({
//   //     ...formData,
//   //     documents: docs,
//   //   });
//   // };

//   const handleDocumentChange = (index, e) => {
//     const docs = [...formData.documents];

//     if (e.target.type === "file") {
//       docs[index][e.target.name] = e.target.files[0];
//     } else {
//       docs[index][e.target.name] = e.target.value;
//     }

//     setFormData({
//       ...formData,
//       documents: docs,
//     });
//   };

//   const addDocument = () => {
//     setFormData({
//       ...formData,
//       documents: [
//         ...formData.documents,
//         {
//           title: "",
//           number: "",
//           file: null,
//         },
//       ],
//     });
//   };

//   const removeDocument = (index) => {
//     const docs = [...formData.documents];

//     docs.splice(index, 1);

//     setFormData({
//       ...formData,
//       documents: docs,
//     });
//   };

//   const validate = () => {
//     const temp = {};

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

//     const phoneRegex = /^[6-9]\d{9}$/;

//     if (!formData.firstName.trim()) {
//       temp.firstName = "Name is required";
//     }

//     if (!emailRegex.test(formData.email)) {
//       temp.email = "Invalid email";
//     }

//     if (!passwordRegex.test(formData.password)) {
//       temp.password = "Minimum 8 chars, uppercase, lowercase and number";
//     }

//     if (!phoneRegex.test(formData.phone)) {
//       temp.phone = "Invalid phone number";
//     }

//     if (!formData.gender) {
//       temp.gender = "Select gender";
//     }

//     if (!formData.city) {
//       temp.city = "Select city";
//     }

//     if (!formData.dob) {
//       temp.dob = "Select DOB";
//     }

//     if (formData.skills.length === 0) {
//       temp.skills = "Select at least one skill";
//     }

//     formData.documents.forEach((doc, index) => {
//       if (!doc.title) {
//         temp[`title${index}`] = "Document title required";
//       }
//       if (!doc.file) {
//         temp[`file${index}`] = "Document file required";
//       }

//       if (!doc.number) {
//         temp[`number${index}`] = "Document number required";
//       }
//     });

//     return temp;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validationErrors = validate();

//     if (Object.keys(validationErrors).length) {
//       setErrors(validationErrors);
//       return;
//     }

//     alert("Form Submitted");

//     console.log(formData);

//     setFormData(initialState);

//     setErrors({});
//   };

//   return (
//     <div className="container">
//       <h4>Employee Registration</h4>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="firstName"
//           placeholder="Name"
//           value={formData.firstName}
//           onChange={handleChange}
//         />

//         <span>{errors.firstName}</span>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <span>{errors.email}</span>

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//         />

//         <span>{errors.password}</span>

//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone"
//           value={formData.phone}
//           onChange={handleChange}
//         />

//         <span>{errors.phone}</span>

//         <input
//           type="date"
//           name="dob"
//           value={formData.dob}
//           onChange={handleChange}
//         />

//         <span>{errors.dob}</span>

//         <div>
//           <label>
//             <input
//               type="radio"
//               value="Male"
//               name="gender"
//               onChange={handleChange}
//             />
//             Male
//           </label>

//           <label>
//             <input
//               type="radio"
//               value="Female"
//               name="gender"
//               onChange={handleChange}
//             />
//             Female
//           </label>
//         </div>

//         <span>{errors.gender}</span>

//         <select name="city" value={formData.city} onChange={handleChange}>
//           <option value="">Select City</option>

//           <option>Hyderabad</option>

//           <option>Bangalore</option>

//           <option>Chennai</option>
//         </select>

//         <span>{errors.city}</span>

//         <div>
//           <label>
//             <input type="checkbox" value="React" onChange={handleSkills} />
//             React
//           </label>

//           <label>
//             <input type="checkbox" value="Node" onChange={handleSkills} />
//             Node
//           </label>

//           <label>
//             <input type="checkbox" value="Python" onChange={handleSkills} />
//             Python
//           </label>
//         </div>

//         <span>{errors.skills}</span>

//         <textarea
//           name="bio"
//           placeholder="About Yourself"
//           value={formData.bio}
//           onChange={handleChange}
//         />

//         <h4>Documents</h4>

//         {formData.documents.map((doc, index) => (
//           <div key={index} className="doc-row">
//             <input
//               name="title"
//               placeholder="Title"
//               value={doc.title}
//               onChange={(e) => handleDocumentChange(index, e)}
//             />

//             <input
//               name="number"
//               placeholder="Number"
//               value={doc.number}
//               onChange={(e) => handleDocumentChange(index, e)}
//             />
//             <input
//               type="file"
//               name="file"
//               onChange={(e) => handleDocumentChange(index, e)}
//             />
//             {doc.file && <span>Selected :{doc.file.name}</span>}

//             <button type="button" onClick={() => removeDocument(index)}>
//               Remove
//             </button>

//             <small>{errors[`title${index}`]}</small>

//             <small>{errors[`number${index}`]}</small>
//           </div>
//         ))}

//         <button type="button" onClick={addDocument}>
//           Add Document
//         </button>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default FormComponent;

import { useState } from "react";
// import "./FormComponent.css";

const initialState = {
  firstName: "",
  email: "",
  password: "",
  phone: "",
  dob: "",
  gender: "",
  city: "",
  skills: [],
  bio: "",
  documents: [
    {
      title: "",
      number: "",
      file: null,
    },
  ],
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
const phoneRegex = /^[6-9]\d{9}$/;

const FormComponent = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the error for this field as soon as the user edits it
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    // Validate email immediately, live, as the user types
    if (name === "email") {
      if (value && !emailRegex.test(value)) {
        setErrors((prev) => ({
          ...prev,
          email: "Invalid email",
        }));
      }
    }
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

    setErrors((prev) => ({
      ...prev,
      skills: "",
    }));
  };

  const handleDocumentChange = (index, e) => {
    const docs = [...formData.documents];

    if (e.target.type === "file") {
      docs[index][e.target.name] = e.target.files[0];
    } else {
      docs[index][e.target.name] = e.target.value;
    }

    setFormData({
      ...formData,
      documents: docs,
    });

    // Clear the matching error (title/number/file) for this document row
    setErrors((prev) => ({
      ...prev,
      [`${e.target.name}${index}`]: "",
    }));
  };

  const addDocument = () => {
    setFormData({
      ...formData,
      documents: [
        ...formData.documents,
        {
          title: "",
          number: "",
          file: null,
        },
      ],
    });
  };

  const removeDocument = (index) => {
    const docs = [...formData.documents];

    docs.splice(index, 1);

    setFormData({
      ...formData,
      documents: docs,
    });
  };

  const validate = () => {
    const temp = {};

    if (!formData.firstName.trim()) {
      temp.firstName = "Name is required";
    }

    if (!emailRegex.test(formData.email)) {
      temp.email = "Invalid email";
    }

    if (!passwordRegex.test(formData.password)) {
      temp.password = "Minimum 8 chars, uppercase, lowercase and number";
    }

    if (!phoneRegex.test(formData.phone)) {
      temp.phone = "Invalid phone number";
    }

    if (!formData.gender) {
      temp.gender = "Select gender";
    }

    if (!formData.city) {
      temp.city = "Select city";
    }

    if (!formData.dob) {
      temp.dob = "Select DOB";
    }

    if (formData.skills.length === 0) {
      temp.skills = "Select at least one skill";
    }

    formData.documents.forEach((doc, index) => {
      if (!doc.title) {
        temp[`title${index}`] = "Document title required";
      }
      if (!doc.file) {
        temp[`file${index}`] = "Document file required";
      }

      if (!doc.number) {
        temp[`number${index}`] = "Document number required";
      }
    });

    return temp;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    alert("Form Submitted");

    console.log(formData);

    setFormData(initialState);

    setErrors({});
  };

  return (
    <div className="container">
      <h1 className="form-heading">Student Registration</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <span>{errors.firstName}</span>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <span>{errors.email}</span>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <span>{errors.password}</span>

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <span>{errors.phone}</span>

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />

        <span>{errors.dob}</span>

        <div>
          <label>
            <input
              type="radio"
              value="Male"
              name="gender"
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              value="Female"
              name="gender"
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        <span>{errors.gender}</span>

        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>

          <option>Hyderabad</option>

          <option>Bangalore</option>

          <option>Chennai</option>
        </select>

        <span>{errors.city}</span>

        <div>
          <label>
            <input type="checkbox" value="React" onChange={handleSkills} />
            React
          </label>

          <label>
            <input type="checkbox" value="Node" onChange={handleSkills} />
            Node
          </label>

          <label>
            <input type="checkbox" value="Python" onChange={handleSkills} />
            Python
          </label>
        </div>

        <span>{errors.skills}</span>

        <textarea
          name="bio"
          placeholder="About Yourself"
          value={formData.bio}
          onChange={handleChange}
        />

        <h4>Documents</h4>

        {formData.documents.map((doc, index) => (
          <div key={index} className="doc-row">
            <input
              name="title"
              placeholder="Title"
              value={doc.title}
              onChange={(e) => handleDocumentChange(index, e)}
            />

            <input
              name="number"
              placeholder="Number"
              value={doc.number}
              onChange={(e) => handleDocumentChange(index, e)}
            />
            <input
              type="file"
              name="file"
              onChange={(e) => handleDocumentChange(index, e)}
            />
            {doc.file && <span>Selected :{doc.file.name}</span>}

            <button type="button" onClick={() => removeDocument(index)}>
              Remove
            </button>

            <small>{errors[`title${index}`]}</small>

            <small>{errors[`number${index}`]}</small>
          </div>
        ))}

        <button type="button" onClick={addDocument}>
          Add Document
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
