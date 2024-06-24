// src/components/Register.jsx
import React, { useState } from "react";
import { auth, db } from "./firebase"; // Adjust path as per your project structure
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import "./AuthForm.css"; // Import CSS for styling

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save additional user information to Firestore
      await setDoc(doc(db, "users", user.uid), {
        email,
      });

      toast.success("User registered successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
