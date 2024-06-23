import "./App.css";
import ScrollTrigger from "./Scroll";
import Split from "./Split";
function App() {
  return (
    <div className="App">
      <ScrollTrigger />
      <Split/>
      <div style={{ height: "140rem", width: "100%" }}></div>
    </div>
  );
}

export default App;
