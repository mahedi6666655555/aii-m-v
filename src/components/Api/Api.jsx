import React, { useEffect, useState } from "react";

const Api = () => {
  let [api, apis] = useState([]);
  useEffect(() => {
    let url = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => apis(data.data.tools));
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {api.map((res) => (
          <div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{res.name}</h2>
                <p>. {res.features[0]}</p>
                <p>. {res.features[1]}</p>
                <p>. {res.features[2]}</p>
              </div>
              <figure>
                <img
                  src={res.image}
                  alt="Shoes"
                />
              </figure>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Api;
