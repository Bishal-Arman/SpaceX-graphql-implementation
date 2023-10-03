import { useQuery } from "@apollo/client";
import { GET_SHIPS } from "../../../graphql/queries";
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
        {data?.ships?.map((ship) => (
          <div key={ship?.id}>
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
        ))}
      </div>
    </div>
  );
};

export default Ships;
