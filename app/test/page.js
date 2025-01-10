import React from "react";

const page = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5")
    .then((response) => {
      response.json();
    })
    .then((json) => {
      console.log(json);
    });

  //   const comments = fetch("https://jsonplaceholder.typicode.com/comments?_start=0&_limit=5")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((json) => {
  //       return json;
  //     });

  //   const ablums = fetch("https://jsonplaceholder.typicode.com/albums?_start=0&_limit=5")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((json) => {
  //       return json;
  //     });

  return (
    <div>
      <h1>Get Posts</h1>
      <ul>{posts && posts.map((item, index) => <li key={index}>{item.title}</li>)}</ul>
      {/* <h1>Get Comments</h1>
      <ul>{comments && comments.map((item, index) => <li key={index}>{item.name}</li>)}</ul>
      <h1>Get Albums</h1>
      <ul>{ablums && ablums.map((item, index) => <li key={index}>{item.title}</li>)}</ul> */}
      {/* 
      
      <h1>Get Photos</h1>s
      <h1>Get Todos</h1>
      <h1>Get Users</h1> */}
    </div>
  );
};

export default page;
