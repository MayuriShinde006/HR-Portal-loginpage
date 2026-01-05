import React, { useState } from "react";
import "./App.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUpload,
} from "react-icons/fa";


/* LOGIN COMPONENT */
function LoginForm({ switchToRegister }) {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    role: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Email validation
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Strong password validation
  const isStrongPassword = (password) =>
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[@$!%*?&]/.test(password);

  const handleLogin = (e) => {
    e.preventDefault(); // stop page refresh

    if (!form.role || !form.email || !form.password) {
      alert("⚠️ Please fill all the fields");
      return;
    }

    if (!isValidEmail(form.email)) {
      alert("⚠️ Please enter a valid email address");
      return;
    }

    if (!isStrongPassword(form.password)) {
      alert(
        "⚠️ Password must contain:\n• 8 characters\n• Uppercase\n• Lowercase\n• Number\n• Special character"
      );
      return;
    }

    alert("✅ Login successful");
    console.log("Login Data:", form);
  };

  return (
    <form className="card" onSubmit={handleLogin}>
      <img src="/webflash.png" alt="logo" className="logo" />

       <h2 className="company-name">
            <span className="web">Web</span>
            <span className="flash">Flash</span>{" "}
            <span className="solution">Solution</span>
          </h2>

      <select name="role" value={form.role} onChange={handleChange}>
        <option value="">-- Select Role --</option>
        <option>Admin</option>
        <option>HR</option>
        <option>Employee</option>
        <option>Intern</option>
      </select>

      <div className="input-box">
        <FaEnvelope />
        <input
          name="email"
          placeholder="Email ID"
          value={form.email}
          onChange={handleChange}
           autoComplete="off"
        />
      </div>

      <div className="input-box">
        <FaLock />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <span onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <p className="forgot">
        <a href=" ">Forgot password?</a>
      </p>

      <button type="submit">Login</button>

      <p className="toggle1">
        Unable to login? Kindly connect with{" "}
        <a href="mailto:itsupport@company.com">IT Support Team</a>
      </p>

      <p className="toggle">
        Don’t have an account?
        <span onClick={switchToRegister}> Register</span>
      </p>
    </form>
  );
}

/* REGISTER COMPONENT  */
function RegisterForm({ switchToLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const [form, setForm] = useState({
    role: "",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isStrongPassword = (password) =>
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[@$!%*?&]/.test(password);

  const handleRegister = (e) => {
    e.preventDefault();

    const {
      role,
      firstName,
      lastName,
      mobile,
      email,
      password,
      confirmPassword,
    } = form;

    if (
      !role ||
      !firstName ||
      !lastName ||
      !mobile ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      alert("⚠️ All fields are required");
      return;
    }

    if (firstName.length < 2 || lastName.length < 2) {
      alert("⚠️ Name must be at least 2 characters");
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      alert("⚠️ Mobile number must be 10 digits");
      return;
    }

    if (!isValidEmail(email)) {
      alert("⚠️ Invalid email format");
      return;
    }

    if (!isStrongPassword(password)) {
      alert(
        "⚠️ Password must contain:\n• 8 characters\n• Uppercase\n• Lowercase\n• Number\n• Special character"
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("⚠️ Passwords do not match");
      return;
    }

    alert("✅ Registration successful");
    console.log("Register Data:", form);
  };

  return (
    <form className="card" onSubmit={handleRegister} >
      <img src="/webflash.png" alt="logo" className="logo" />

      <h2>Create Account</h2>

      <select name="role" value={form.role} onChange={handleChange}>
        <option value="">-- Select Role --</option>
        <option>HR</option>
        <option>Employee</option>
        <option>Intern</option>
      </select>

      <div className="upload-box">
        <FaUpload />
        <input type="file" />
      </div>

      <div className="input-box">
        <FaUser />
        <input
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
        />
      </div>

      <div className="input-box">
        <FaUser />
        <input
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
        />
      </div>

      <div className="input-box">
        <FaPhone />
        <input
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
           autoComplete="off"
        />
      </div>

      <div className="input-box">
        <FaEnvelope />
        <input
          name="email"
          placeholder="Email ID"
          value={form.email}
          onChange={handleChange}
           autoComplete="off"
        />
      </div>

      <div className="input-box">
        <FaLock />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <span onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <div className="input-box">
        <FaLock />
        <input
          type={showCPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <span onClick={() => setShowCPassword(!showCPassword)}>
          {showCPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>

      <button type="submit">Register</button>

      <p className="toggle">
        Already have an account?
        <span onClick={switchToLogin}> Login</span>
      </p>
    </form>
  );
}

/* MAIN APP */
function App() {
  const [page, setPage] = useState("login");

  return (
    <div className="page">
      {/* IMAGE CONTAINER */}
      
        <div className="image-container">
          <img src="/canva.png" alt="visual" className="bg-image" />
        
      {/* FORM OVER IMAGE */}
      <div className="form-overlay">
        {page === "login" ? (
          <LoginForm switchToRegister={() => setPage("register")} />
        ) : (
          <RegisterForm switchToLogin={() => setPage("login")} />
        )}
      </div>
    </div>
    </div>
  );
}

export default App;


