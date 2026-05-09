import { useDispatch, useSelector } from "react-redux";
import { markAsDelivered, selectDelivery } from "../redux/deliverySlice";

function DeliveryCard({ delivery }) {
  const dispatch = useDispatch();
  const selectedDeliveryId = useSelector(
    (state) => state.delivery.selectedDeliveryId
  );

  const isSelected = selectedDeliveryId === delivery.id;

  return (
    <article className={isSelected ? "delivery-card selected" : "delivery-card"}>
      <div className="card-top">
        <h3>{delivery.planet}</h3>
        <span>{delivery.dangerLevel}</span>
      </div>

      <p className="package-name">{delivery.packageName}</p>

      <p>
        <strong>Receiver:</strong> {delivery.receiver}
      </p>

      <p>
        <strong>Status:</strong> {delivery.status}
      </p>

      <div className="card-actions">
        <button
          type="button"
          onClick={() => dispatch(selectDelivery(delivery.id))}
        >
          Select
        </button>

        <button
          type="button"
          onClick={() => dispatch(markAsDelivered(delivery.id))}
        >
          Mark Delivered
        </button>
      </div>
    </article>
  );
}

export default DeliveryCard;