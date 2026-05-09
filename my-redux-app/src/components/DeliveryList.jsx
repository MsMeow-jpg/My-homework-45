import { useSelector } from "react-redux";
import DeliveryCard from "./DeliveryCard";

function DeliveryList() {
  const deliveries = useSelector((state) => state.delivery.deliveries);

  return (
    <section className="delivery-list">
      <h2>Active Space Deliveries</h2>

      <div className="delivery-grid">
        {deliveries.map((delivery) => (
          <DeliveryCard key={delivery.id} delivery={delivery} />
        ))}
      </div>
    </section>
  );
}

export default DeliveryList;