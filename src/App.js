import Timer from "./components/timer/Timer";

function App() {
  return (
    <div className="App">
      {/* timer component is rendered with title, endTime, and elapsedTime props */}
      <Timer title={"My Timer"} endTime={152} elapsedTime={13} />{" "}
    </div>
  );
}

export default App;
