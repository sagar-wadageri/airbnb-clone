
import PropertyGrid from "./components/PropertyGrid";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          textAlign: "center",
          margin: "30px 0",
          fontSize: "28px",
          fontWeight: "600",
          color: "#111",
        }}
      >
        Find Your Perfect Stay
      </h1>

      <PropertyGrid />
    </div>
  );
}

export default App;
