import { Ship } from "../../../graphql/__generated__/graphql";

const ShipCard = ({ ship }: { ship: Ship | null }) => {
  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Ship Name - {ship?.name}!</h2>
            <p className="text-orange-500">Home Port - {ship?.home_port}</p>
            <p className="text-fuchsia-800">Role - {ship?.roles}</p>
            <div className="card-actions">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipCard;
