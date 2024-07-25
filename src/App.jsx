import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import MyClassComponent from "./ClassComp";

function App() {
  const person = {
    name: "Emeric",
    job: "Dev",
  };
  return (
    <div>
      <Header person={person} />
      <MyClassComponent />
    </div>
  );
}

export default App;
