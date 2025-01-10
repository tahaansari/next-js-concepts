import Link from "next/link";

const Posts = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div>Id: {item.id}</div>
            <div>Title: {item.title}</div>
            <Link href={`/blogs/${item.id}`} style={{ color: "white" }}>
              <button>View Blog</button>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
