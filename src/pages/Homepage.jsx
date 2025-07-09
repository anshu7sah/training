import React, { useEffect, useState } from "react";
import axios from "axios";

const Homepage = () => {
  const [data, setData] = useState();
  const clickHandler = () => {};
  useEffect(() => {
    const fetchingData = async () => {
      const { data } = await axios.get("https://dummyjson.com/products");
      setData(data.products);
    };
    fetchingData();
  }, []);
  console.log(data);

  return (
    <div>
      {data?.map((d) => (
        <div
          key={d.id}
          style={{
            border: "1px solid black",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <a href={`/singleproduct/${d.id}`}>{d.title}</a>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
