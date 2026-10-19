import { useEffect, useState } from "react";
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.json())
      .then(data => setUser(data));
  }, []); // ✅ only runs once
  if (!user) return <p>Loading...</p>;
  return <h2>Hello, {user.name}</h2>;
}
export default App 