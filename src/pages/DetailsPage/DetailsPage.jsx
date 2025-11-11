import React from "react";
import { useLoaderData } from "react-router";

const DetailsPage = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2>This is a details page</h2>
    </div>
  );
};

export default DetailsPage;
