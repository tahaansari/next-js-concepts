import Link from "next/link";
import React from "react";
import style from "../style.module.css";

async function fetchPost(id) {
  const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await fetchData.json();
  return data;
}

const page = async ({ params }) => {
  const { id } = params;
  const getPost = await fetchPost(id);
  console.log(getPost);
  return (
    <>
      <div className={style.item}>
        <Link href="/blogs">back</Link>
        <div>Id : {getPost.id}</div>
        <div>Title : {getPost.title}</div>
        <div>Desc : {getPost.body}</div>
      </div>
    </>
  );
};

export default page;
