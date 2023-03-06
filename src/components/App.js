import { useState } from "react";
import Router from "./Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <Router isLoggedIn={isLoggedIn} />;
}

export default App;
