import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./signup.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phone_number: "",
  });
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [userId, setUserId] = useState(null);
  const [message, setMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Sign Up Submission
  const handleSignUp = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:3000/signup",
        formData
      );
      setMessage(response.data.message);
      setIsVerifying(true);
      setUserId(response.data.userId); // Backend should return userId
    } catch (error) {
      setMessage(error.response?.data?.message || "Signup failed!");
    }
  };

  // Handle Verification Code Submission
  const handleVerification = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("http://localhost:3000/verify", {
        userId,
        verificationCode,
      });
      setMessage(response.data.message);
      setIsVerifying(false);
      setUserId(null); // Clear userId after successful verification
    } catch (error) {
      setMessage(error.response?.data?.message || "Verification failed!");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle password visibility
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-image">
          <img src="shop2.png" alt="Sign Up" />
        </div>
        <div className="signup-form">
          <h2 className="sign-up-label">Sign Up</h2>
          {message && <div className="message">{message}</div>}

          {!isVerifying ? (
            <form onSubmit={handleSignUp}>
              <div>
                <label>Username:</label>
                <input
                  className="username"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <div className="password-container">
                  <label>Password:</label>
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
              <div>
                <label>Email:</label>
                <input
                  className="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label>Phone Number:</label>
                <input
                  className="phone_number"
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
              <button type="submit" className="signup-button">
                Sign Up
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerification}>
              <h3>Enter Verification Code</h3>
              <div>
                <label>Verification Code:</label>
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="verify-button">
                Verify
              </button>
            </form>
          )}
          <Link to="/signin">Do you have an account? Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;











// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// import "./signup.css";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     email: "",
//     phone_number: "",
//   });
//   const [verificationCode, setVerificationCode] = useState("");
//   const [isVerifying, setIsVerifying] = useState(false);
//   const [userId, setUserId] = useState(null);
//   const [message, setMessage] = useState("");

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle Sign Up Submission
//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/signup",
//         formData
//       );
//       setMessage(response.data.message);
//       setIsVerifying(true);
//       setUserId(response.data.userId); // Backend should return userId
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Signup failed!");
//     }
//   };

//   // Handle Verification Code Submission
//   const handleVerification = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const response = await axios.post("http://localhost:3000/verify", {
//         userId,
//         verificationCode,
//       });
//       setMessage(response.data.message);
//       setIsVerifying(false);
//       setUserId(null); // Clear userId after successful verification
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Verification failed!");
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-content">
//         <div className="signup-image">
//           <img src="shop2.png" alt="Sign Up" />
//         </div>
//         <div className="signup-form">
//           <h2 className="sign-up-label">Sign Up</h2>
//           {message && <div className="message">{message}</div>}

//           {!isVerifying ? (
//             <form onSubmit={handleSignUp}>
//               <div>
//                 <label>Username:</label>
//                 <input
//                   className="username"
//                   type="text"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter your username"
//                 />
//               </div>
//               <div>
//                 <label>Password:</label>
//                 <input
//                   className="password"
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter your password"
//                 />
//               </div>
//               <div>
//                 <label>Email:</label>
//                 <input
//                   className="email"
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <div>
//                 <label>Phone Number:</label>
//                 <input
//                   className="phone_number"
//                   type="tel"
//                   name="phone_number"
//                   value={formData.phone_number}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter your phone number"
//                 />
//               </div>
//               <button type="submit" className="signup-button">
//                 Sign Up
//               </button>
//             </form>
//           ) : (
//             <form onSubmit={handleVerification}>
//               <h3>Enter Verification Code</h3>
//               <div>
//                 <label>Verification Code:</label>
//                 <input
//                   type="text"
//                   value={verificationCode}
//                   onChange={(e) => setVerificationCode(e.target.value)}
//                   required
//                 />
//               </div>
//               <button type="submit" className="verify-button">
//                 Verify
//               </button>
//             </form>
//           )}
//           <Link to="/signin">Do you have an account? Sign in</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;






// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// import "./signup.css";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     email: "",
//     phone_number: "",
//   });
//   const [verificationCode, setVerificationCode] = useState("");
//   const [isVerifying, setIsVerifying] = useState(false);
//   const [userId, setUserId] = useState(null);
//   const [message, setMessage] = useState("");

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle Sign Up Submission
//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/signup",
//         formData
//       );
//       setMessage(response.data.message);
//       setIsVerifying(true);
//       setUserId(response.data.userId); // Backend should return userId
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Signup failed!");
//     }
//   };

//   // Handle Verification Code Submission
//   const handleVerification = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const response = await axios.post("http://localhost:3000/verify", {
//         userId,
//         verificationCode,
//       });
//       setMessage(response.data.message);
//       setIsVerifying(false);
//       setUserId(null); // Clear userId after successful verification
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Verification failed!");
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-content">
//         <div className="signin-image">
//           <img src="shop2.png" alt="Sign In" />
//         </div>
//         <div className="signup-container">
//           <h2>Sign Up</h2>
//           {message && <p>{message}</p>}

//           {!isVerifying ? (
//             <form onSubmit={handleSignUp}>
//               <div>
//                 <label>Username:</label>
//                 <input
//                   className="username"
//                   type="text"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter your username"
//                 />
//               </div>
//               <div>
//                 <label>Password:</label>
//                 <input
//                   className="password"
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter your password"
//                 />
//               </div>
//               <div>
//                 <label>Email:</label>
//                 <input
//                   className="email"
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <div>
//                 <label>Phone Number:</label>
//                 <input
//                   className="phone_number"
//                   type="tel"
//                   name="phone_number"
//                   value={formData.phone_number}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter your phone_number"
//                 />
//               </div>
//               <button type="submit">Sign Up</button>
//             </form>
//           ) : (
//             <form onSubmit={handleVerification}>
//               <h3>Enter Verification Code</h3>
//               <div>
//                 <label>Verification Code:</label>
//                 <input
//                   type="text"
//                   value={verificationCode}
//                   onChange={(e) => setVerificationCode(e.target.value)}
//                   required
//                 />
//               </div>
//               <button type="submit">Verify</button>
//             </form>
//           )}
//           {/* <a href="/signin">Do you have an account? Sign-in</a> */}
//           <Link to="/signin">Do you have an account? Sign-in</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

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

// import React, { useState } from 'react';
// import {Link} from "react-router-dom"
// import './signup.css';

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
//       <div className="signin-content">
//         <div className="signin-image">
//           <img src="shop2.png" alt="Sign In" />
//         </div>
//         <div className="signin-form">
//           <h2 className='sign-in-label'>Sign In</h2>

//           {errorMessage && <div className="error-message">{errorMessage}</div>}
//           {successMessage && <div className="success-message">{successMessage}</div>}

//           <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Username</label>
//                 <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 placeholder="Enter your username"
//                 required
//                 />
//             </div>

//             <div>
//                 <label>Password</label>
//                 <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Enter your password"
//                 required
//                 />
//             </div>

//             <button type="submit" className='signin_button'>Sign In</button>
//           </form>

//           {/* <a href="/signup">Don't have an account? Sign up</a> */}
//           <Link to="/signup" >Don't have an account? Sign-up</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
