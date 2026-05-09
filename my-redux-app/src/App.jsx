import "./App.css";
import SpaceHeader from "./components/SpaceHeader";
import ShipStatus from "./components/ShipStatus";
import DeliveryList from "./components/DeliveryList";
import ControlPanel from "./components/ControlPanel";

function App() {
  return (
    <div className="app">
      <SpaceHeader />

      <main className="dashboard">
        <section className="left-panel">
          <ShipStatus />
          <ControlPanel />
        </section>

        <DeliveryList />
      </main>
    </div>
  );
}

export default App;