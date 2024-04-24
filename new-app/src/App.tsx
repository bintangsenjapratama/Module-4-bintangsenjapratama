import React, {useState} from 'react';
import './App.css';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function App() {

  const [fullname, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const signupScheme = Yup.object().shape({
    fullname: Yup.string()
    .required('Required to fill !!!'),
    email: Yup.string()
    .email('Invalid email !!!')
    .required('Required to fill !!!'),
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sign Up</h1>
        <div>
          <Formik
            initialValues={{
              fullname:''
            }}
            onSubmit={(values, actions) => {} }>

            </Formik>
        </div>
      </header>
    </div>
  );
}

export default App;
