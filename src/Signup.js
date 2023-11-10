import { useFormik } from "formik";
import "./Signup.css";
import * as Yup from "yup";

const Signup = (props) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, "too long").required("required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.errors);

  return (
    <form onSubmit={formik.handleSubmit}>
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
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </div>
      <div className="input-container">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div className="input-container">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Signup;
