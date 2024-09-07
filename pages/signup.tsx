import React, { useState } from 'react';
import { useRouter } from 'next/router';
import './Signup.css'; // Import the CSS file


const Signup = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://spotifyproject1.onrender.com/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          username,
          password,
          gender,
          month,
          date,
          year,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      // Handle successful response
      const data = await response.json();
      console.log('Response:', data);
      router.push('/login');
    } catch (error: any) {
      setError(error.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="logo-container">
        <img src="/logo1.png" alt="Spotify Logo" className="logo" /> {/* Update with actual path */}
      </div>
      <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group-inline">
          <div className="form-group">
            <label className="form-label">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="form-input"
              required
            />
          </div>
        </div>
        <div className="form-group-inline">
          <div className="form-group">
            <label className="form-label">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="form-input"
              required
            />
          </div>
        </div>
        <div className="form-group-inline">
          <div className="form-group">
            <label className="form-label">Gender:</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="form-input"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-Binary</option>
            </select>
          </div>
        </div>
        <div className="form-group-inline">
          <div className="form-group">
            <label className="form-label">Month:</label>
            <input
              type="text"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              placeholder="Month"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Date:</label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Date"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Year:</label>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Year"
              className="form-input"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="submit-button"
          disabled={loading}
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      <button
        onClick={() => router.back()} // Use router.back() for navigation
        className="back-button"
      >
        Back
      </button>
    </div>
  );
};

export default Signup;