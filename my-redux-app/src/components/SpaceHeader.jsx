import { useSelector } from "react-redux";

function SpaceHeader() {
  const { companyName, shipName, captain } = useSelector(
    (state) => state.delivery
  );

  return (
    <header className="space-header">
      <p className="badge">Intergalactic Delivery Department</p>
      <h1>{companyName}</h1>
      <p className="subtitle">
        Ship: <strong>{shipName}</strong> · Captain: <strong>{captain}</strong>
      </p>
    </header>
  );
}

export default SpaceHeader;