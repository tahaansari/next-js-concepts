import React from 'react'
import style from "./style.module.css";

// import Button from '../components/Button';
import Link from 'next/link';

export async function fetchPosts(){
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data = posts.json();
    return data;
}

const page = async () => {
  const posts = await fetchPosts();


  return (
    <>
        {posts.map((item)=>{
            return <div className={style.item} key={item.id}>
                Title - {item.title}
                Button - <Link href={`/blog/${item.id}`} style={{color:"white"}}>View Blog</Link>
            </div>
        })}
    </>
  )
}

export default page