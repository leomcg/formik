import { useFormik } from "formik";
import { useState } from "react";

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  console.log(formik.values);

  return (
    <form>
      <div className="input-container">
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </div>
      <div className="input-container">
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </div>
      <div className="input-container">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </div>
    </form>
  );
};

export default Signup;
