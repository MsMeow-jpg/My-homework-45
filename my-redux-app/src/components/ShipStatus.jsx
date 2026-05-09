import { useSelector } from "react-redux";

function ShipStatus() {
  const { shipStatus, completedCount } = useSelector((state) => state.delivery);

  return (
    <section className="ship-card">
      <h2>Ship Status</h2>
      <p>{shipStatus}</p>

      <div className="counter">
        Completed deliveries: <strong>{completedCount}</strong>
      </div>
    </section>
  );
}

export default ShipStatus;