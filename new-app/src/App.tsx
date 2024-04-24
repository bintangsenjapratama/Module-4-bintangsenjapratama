import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function App() {

  // fullname
  // email
  // date of bird
  const signupScheme = Yup.object().shape({
    fullname: Yup.string()
    .required('Required to fill !!!')
  })
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
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
