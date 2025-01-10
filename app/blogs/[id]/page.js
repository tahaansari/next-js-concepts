import Link from "next/link";
import React from "react";
import style from "../style.module.css";

async function fetchPost(id) {
  const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await fetchData.json();
  return data;
}

export const metadata = {
  title: "This is a dummy title",
  description: "This is a dummy description",
};

export const generateStaticParams = async () => {
  const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const data = await fetchData.json();
  return data.map((item) => ({
    id: item.id,
  }));
};

const page = async ({ params }) => {
  const { id } = params;
  const getPost = await fetchPost(id);
  console.log(getPost);
  return (
    <>
      <div className={style.item}>
        <Link href="/blogs">back</Link>
        <div>
          <h1>Id : {getPost.id}</h1>
        </div>
        <div>Title : {getPost.title}</div>
        <div>Desc : {getPost.body}</div>
      </div>
    </>
  );
};

export default page;
