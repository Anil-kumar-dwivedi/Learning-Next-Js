import React from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}
const DataFetching = async () => {
  const data = await getData();
  return (
    <>
      <h1>Fake api data</h1>
      {data.map((post, i) => (
        <div key={i} style={{ marginBottom: "1rem",display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center" }}>
          <h2 style={{ fontSize: "20px", color: "red" }}>{post.title}</h2>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default DataFetching;
