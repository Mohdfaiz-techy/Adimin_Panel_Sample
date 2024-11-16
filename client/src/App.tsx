import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState<string>("");

  // useEffect(() => {
  //   axios
  //     .get('/api') // Using the proxy `/api` set in Vite config
  //     .then((response) => {
  //       setMessage(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);
  useEffect(() => {
    axios
      .get("/api") // The proxy `/api` connects to `http://localhost:5000/api`
      .then((response) => setMessage(response.data.message))
      .catch((err) => console.error(err));
  });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to MERN with Vite + React + TypeScript</h1>
      <p>Server says: {message}</p>
    </div>
  );
}

export default App;
