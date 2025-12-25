// import React from "react";

// function Signup() {
//   return (
//     <>
//       <style>
//         {`
//           .signup-container {
//             height: 100vh;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             background-color: #f4f6f8;
//             font-family: Arial;
//           }

//           .signup-box {
//             background: white;
//             padding: 30px;
//             width: 350px;
//             border-radius: 8px;
//             box-shadow: 0 0 15px rgba(0,0,0,0.1);
//           }

//           .signup-box h2 {
//             text-align: center;
//             margin-bottom: 20px;
//           }

//           .signup-box input {
//             width: 100%;
//             padding: 10px;
//             margin: 8px 0;
//           }

//           .signup-box button {
//             width: 100%;
//             padding: 10px;
//             background-color: #2a5298;
//             color: white;
//             border: none;
//             margin-top: 10px;
//           }
//         `}
//       </style>

//       <div className="signup-container">
//         <div className="signup-box">
//           <h2>Create Account</h2>
//           <input type="text" placeholder="Username" />
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <button>Signup</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Signup;

import React from "react";

function Signup() {
  return (
    <>
      <style>
        {`
          .signup-container {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(to right, #ece9e6, #ffffff);
            font-family: Segoe UI;
          }

          .signup-box {
            background: white;
            padding: 35px;
            width: 380px;
            border-radius: 10px;
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          }

          .signup-box h2 {
            text-align: center;
            margin-bottom: 25px;
          }

          .signup-box input {
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            border-radius: 5px;
            border: 1px solid #ccc;
          }

          .signup-box button {
            width: 100%;
            padding: 12px;
            background: #243b55;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
          }

          .signup-box button:hover {
            background: #141e30;
          }
        `}
      </style>

      <div className="signup-container">
        <div className="signup-box">
          <h2>Create Account</h2>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button>Signup</button>
        </div>
      </div>
    </>
  );
}

export default Signup;
