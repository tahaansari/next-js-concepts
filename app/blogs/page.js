import React from "react";
import AddBlog from "@/app/components/AddBlog";
import Posts from "@/app/components/Posts";

// export const dynamic = "force-dynamic";

const page = async () => {
  console.log("page got called");

  const randomNumber = Math.floor(Math.random() * 10) + 1;

  // console.log(`random number is ${randomNumber}`);

  const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit= ${randomNumber}`);
  const data = await fetchData.json();

  return (
    <>
      <AddBlog />
      <Posts data={data}></Posts>
    </>
  );
};

export default page;
