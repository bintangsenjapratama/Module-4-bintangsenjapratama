import React, { useState } from "react";
import "./App.css";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";

function App() {
  const [fullname, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");

  // const navigate = useNavigate();

  const SignupScheme = Yup.object().shape({
    fullname: Yup.string()
      .min(4, "Too Short !!!")
      .max(20, "Too Long !!!")
      .required("Name is required to fill"),

    email: Yup.string()
      .email("Invalid email !!!")
      .required("Email is required to fill"),

    dateOfBirth: Yup.date()
      .required("Please enter a date of birth")
      .max(new Date(), "You can't be born in the future!"),

    street: Yup.string()
      .min(4, "Too Short !!!")
      .max(50, "Too Long !!!")
      .required("Street address is required to fill"),

    city: Yup.string()
      .min(2, "Too Short !!!")
      .max(50, "Too Long !!!")
      .required("City is required to fill"),

    state: Yup.string()
      .min(4, "Too Short !!!")
      .max(50, "Too Long !!!")
      .required("State address is required to fill"),

    zipcode: Yup.number().required("Zip code is required to fill"),

    username: Yup.string()
      .min(4, "Too Short !!!")
      .max(20, "Too Long !!!")
      .required("Username is required to fill"),

    pass: Yup.string()
      .min(4, "Password is Weak")
      .matches(/^\S*$/, "No whitespaces allowed")
      .max(10, "Password is Strong")
      .required("Password is required to fill"),
  });

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((nextStep) => nextStep + 1);
    console.log(step);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
    console.log(step);
  };

  const handleSubmit = async (values: {
    fullname: string;
    email: string;
    pass: string;
  }) => {
    const response = await fetch(
      "https://library-crud-sample.vercel.app/api/user/register",
      {
        method: "POST",
        body: JSON.stringify({
          fullname: values.fullname,
          email: values.email,
          pass: values.pass,
        }),
      }
    );

    const result = await response.json();

    try {
      if (!response.ok) {
        alert("Register failed");
      } else {
        console.log("response success", result);
        alert("Register success");
        // navigate("/");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-4xl font-bold">Sign Up</h1>
        <br />
        <div>
          <Formik
            initialValues={{
              fullname: "",
              email: "",
              dateOfBirth: "",
              street: "",
              city: "",
              state: "",
              zipcode: "",
              username: "",
              pass: "",
            }}
            validationSchema={SignupScheme}
            onSubmit={(values, actions) => {
              console.log("register", {
                fullname: values.fullname,
                email: values.email,
                dateOfBirth: values.dateOfBirth,
                street: values.street,
                city: values.city,
                state: values.state,
                zipcode: values.zipcode,
                username: values.username,
                pass: values.pass,
              });
              const data = {
                fullname: values.fullname,
                email: values.email,
                dateOfBirth: values.dateOfBirth,
                street: values.street,
                city: values.city,
                state: values.state,
                zipcode: values.zipcode,
                username: values.username,
                pass: values.pass,
              };
              if (
                values.fullname &&
                values.email &&
                values.dateOfBirth &&
                values.street &&
                values.city &&
                values.state &&
                values.zipcode &&
                values.username &&
                values.pass
              )
                handleSubmit(data);
            }}
          >
            <Form>
              {step === 1 && (
                <div className="flex flex-col p-8 w-96 border-solid border-2">
                  <h2 className="text-center text-xl my-3 font-semibold mb-8">
                    Multi step form - Step {step}
                  </h2>
                  <Field
                    type="text"
                    name="fullname"
                    placeholder="Enter Your Full Name"
                    className="text-xl text-black border p-2 mb-4 rounded-md"
                  />

                  <ErrorMessage
                    name="fullname"
                    component="div"
                    className="text-xl"
                  />
                  <br />
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="text-xl text-black border p-2 mb-4 rounded-md"
                  />

                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-xl"
                  />
                  <br />
                  <Field
                    type="date"
                    name="dateOfBirth"
                    placeholder="Enter Your Date of Birth"
                    className="text-xl text-black border p-2 mb-4 rounded-md"
                  />
                  <ErrorMessage
                    name="dateOfBirth"
                    component="div"
                    className="text-xl"
                  />
                </div>
              )}

              {step === 2 && (
                <div className="flex flex-col p-8 w-96 border-solid border-2">
                  <h2 className="text-center text-xl my-3 font-semibold mb-8">
                    Multi step form - Step {step}
                  </h2>
                  <Field
                    type="text"
                    name="street"
                    placeholder="Enter Your Street Address"
                    className="text-xl text-black border p-2 mb-4 rounded-md"
                  />

                  <ErrorMessage
                    name="street"
                    component="div"
                    className="text-xl"
                  />
                  <br />
                  <Field
                    type="text"
                    name="city"
                    placeholder="Enter Your City"
                    className="text-xl text-black border p-2 mb-4 rounded-md"
                  />

                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-xl"
                  />
                  <br />
                  <Field
                    type="text"
                    name="state"
                    placeholder="Enter Your State"
                    className="text-xl text-black border p-2 mb-4 rounded-md"
                  />
                  <ErrorMessage
                    name="state"
                    component="div"
                    className="text-xl"
                  />
                  <br />
                  <Field
                    type="number"
                    name="zipcode"
                    placeholder="Enter Your Zip Code"
                    className="text-xl text-black border p-2 mb-4 rounded-md"
                  />
                  <ErrorMessage
                    name="zipcode"
                    component="div"
                    className="text-xl"
                  />
                </div>
              )}

              {step === 3 && (
                <div className="flex flex-col p-8 w-96 border-solid border-2">
                  <h2 className="text-center text-xl my-3 font-semibold mb-8">
                    Multi step form - Step {step}
                  </h2>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Enter Your Username"
                    className="text-xl text-black border p-2 mb-4 rounded-md"
                  />

                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-xl"
                  />
                  <br />
                  <Field
                    type="text"
                    name="pass"
                    placeholder="Enter Your Password"
                    className="text-xl text-black border p-2 mb-4 rounded-md"
                  />

                  <ErrorMessage
                    name="pass"
                    component="div"
                    className="text-xl"
                  />
                </div>
              )}

              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-700 transition-colors duration-300 w-1/2 mt-3 "
                >
                  Previous
                </button>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    fullname !== "" || email !== "" || dateOfBirth !== ""
                  }
                  className="bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-700 transition-colors duration-300 w-1/2 mt-3 "
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-700 transition-colors duration-300 w-1/2 mt-3 "
                >
                  Submit
                </button>
              )}
            </Form>
          </Formik>
        </div>
      </header>
    </div>
  );
}

export default App;
