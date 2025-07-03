import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !password) {
      setError("❌ All fields are required 😏. Please fill them out!");
    } else if (!emailPattern.test(email)) {
      setError("⚠️ Please enter a valid email address 📧.");
    } else {
      setError("");
      alert(`✅ Form submitted successfully ❤️🥳🎉\n\n👤 Name: ${name}\n📧 Email: ${email}`);
      setName("");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>📝 My React Form 🖊️</h2>

      <form onSubmit={handleSubmit}>
        <label>👤 Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "8px", width: "250px", marginBottom: "10px" }}
        />
        <br />

        <label>📧 Email</label>
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "8px", width: "250px", marginBottom: "10px" }}
        />
        <br />

        <label>🔒 Password</label>
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "8px", width: "250px", marginBottom: "10px" }}
        />
        <br />

        <button type="submit" style={{ padding: "8px 16px", cursor: "pointer" }}>
          🚀 Submit
        </button>
      </form>

      {error && (
        <p style={{ color: "red", marginTop: "10px", fontWeight: "bold" }}>
          ⚠️ {error}
        </p>
      )}
    </div>
  );
}

export default App;
