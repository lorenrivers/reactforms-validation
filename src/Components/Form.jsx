import { useState } from "react";

//Simple Input Forms
// export default function Form() {
//   const [name, setName] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   function handleInputChange(event) {
//     setName(event.target.value);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name</label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         value={name}
//         onChange={handleInputChange}
//       />
//       <p>Current value is {name}</p>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

//Multiple Input/Form Fields
export default function Form() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("The form values are", formValues);
  }

  function handleInputChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
      />
      <p>Current value is: {formValues.name} </p>
      <p>Current value is: {formValues.email}</p>
      <button type="submit">Submit</button>
    </form>
  );
}
