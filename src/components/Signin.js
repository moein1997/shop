// import React, { useState } from 'react';
// import {Link} from "react-router-dom"
// import './signin.css';

// const SignIn = () => {
//   const [formData, setFormData] = useState({ username: '', password: '' });
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');
//     setSuccessMessage('');

//     try {
//       const response = await fetch('/api/auth/signin', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         setErrorMessage(errorData.message || 'Sign-in failed!');
//       } else {
//         const data = await response.json();
//         setSuccessMessage('Sign-in successful!');
//         // Optionally redirect user or perform other actions
//         console.log(data);
//       }
//     } catch (error) {
//       setErrorMessage('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="signin-container">
//       <h2>Sign In</h2>

//       {errorMessage && <div className="error-message">{errorMessage}</div>}
//       {successMessage && <div className="success-message">{successMessage}</div>}

//       <form onSubmit={handleSubmit}>
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//           placeholder="Enter your username"
//           required
//         />

//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Enter your password"
//           required
//         />

//         <button type="submit">Sign In</button>
//       </form>

//       {/* <a href="/signup">Don't have an account? Sign-up</a> */}
//       <Link to="/signup" >Don't have an account? Sign-up</Link>
//     </div>
//   );
// };

// export default SignIn;




import React, { useState } from 'react';
import {Link} from "react-router-dom"
import './signin.css';

const SignIn = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Sign-in failed!');
      } else {
        const data = await response.json();
        setSuccessMessage('Sign-in successful!');
        // Optionally redirect user or perform other actions
        console.log(data);
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle password visibility
  };

  return (
    <div className="signin-container">
      <div className="signin-content">
        <div className="signin-image">
          <img src="shop2.png" alt="Sign In" />
        </div>
        <div className="signin-form">
          <h2 className='sign-in-label'>Sign In</h2>

          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}

          <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label>Username</label>
                    <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                    required
                    />
                </div>
            </div>

            <div>
                <div className="password-container">
                  <label>Password</label>
                  <input
                    className="password"
                    type={passwordVisible ? "text" : "password"} // Toggle between 'text' and 'password'
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter your password"
                  />
                  <span
                    className="toggle-password"
                    onClick={togglePasswordVisibility} // Toggle visibility on click
                  >
                    {passwordVisible ? "Hide" : "Show"} {/* Toggle text based on visibility */}
                  </span>
                </div>
            </div>

            <button type="submit" className='signin_button'>Sign In</button>
          </form>

          {/* <a href="/signup">Don't have an account? Sign up</a> */}
          <Link to="/signup" >Don't have an account? Sign-up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;