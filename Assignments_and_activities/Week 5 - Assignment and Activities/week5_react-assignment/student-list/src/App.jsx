// App.jsx
import './App.css'

function App() {
  // This is a JavaScript variable (string)
  const welcomeMessage = "Welcome to Our Class!";

  // This is an array of student names
  const students = [
    "Aarav",
    "Bhavya",
    "Chetan",
    "Divya",
    "Esha",
    "Farhan"
  ];

  return (
    <div className="App">
      {/* Display the welcome message using {} */}
      <h1>{welcomeMessage}</h1>

      <h2>Student List:</h2>

      {/* Ordered list using .map() */}
      <ol>
        {students.map((name, index) => (
          <li key={index}>
            {name}
          </li>
        ))}
      </ol>

      {/* You can also show just the count */}
      <p>Total students: {students.length}</p>
    </div>
  );
}

export default App;