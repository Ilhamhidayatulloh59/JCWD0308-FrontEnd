import { Home } from "./components/home";
import { Profile } from "./components/profile";
import "./App.css"
import { Button } from "./components/button";

function App() {
  let name = "John"
  let age = 30
  return (
    <div>
      <h1 className="red-color">Hello World</h1>
      <Home />
      <Profile nama={name} umur={age} />
      <Button />
    </div>
  );
}

export default App;
