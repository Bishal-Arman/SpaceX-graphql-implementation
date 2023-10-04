import { useQuery } from "@apollo/client";
import { GET_SHIPS } from "../../../graphql/queries";
import { Ship } from "../../../graphql/__generated__/graphql";
import ShipCard from "./ShipCard";
import "./Ships.css";

const Ships = () => {
  const { loading, error, data } = useQuery(GET_SHIPS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h1 className="text-center font-bold text-3xl text-blue-600">
        ---SpaceX Ships Details---
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 ships mb-2">
        {data?.ships?.map((ship: Ship | null) => (
          <ShipCard key={ship?.id} ship={ship}></ShipCard>
        ))}
      </div>
    </div>
  );
};

export default Ships;
