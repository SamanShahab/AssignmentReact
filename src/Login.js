import React from "react";

function Login() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to right, #d7dde8, #f1f2f6)",
      fontFamily: "Segoe UI"
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "35px",
        width: "350px",
        borderRadius: "10px",
        boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        <button style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#243b55",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer"
        }}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
