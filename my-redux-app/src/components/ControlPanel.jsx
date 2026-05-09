import { useDispatch } from "react-redux";
import {
  cancelMission,
  launchShip,
  resetDeliveries,
} from "../redux/deliverySlice";

function ControlPanel() {
  const dispatch = useDispatch();

  return (
    <section className="control-panel">
      <h2>Control Panel</h2>

      <button type="button" onClick={() => dispatch(launchShip())}>
        Launch Ship
      </button>

      <button type="button" onClick={() => dispatch(cancelMission())}>
        Cancel Mission
      </button>

      <button type="button" onClick={() => dispatch(resetDeliveries())}>
        Reset Deliveries
      </button>
    </section>
  );
}

export default ControlPanel;