import { db } from "@/utils/dbConn";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function EachPost({ params }) {
  const { id } = await params;

  const response = await db.query(
    "SELECT posts.*, users.id, users.username FROM posts JOIN users ON posts.user_id = users.id WHERE posts.id = $1",
    [id]
  );
  const post = response.rows[0];

  if (!post) {
    notFound();
  }

  // On this page we can reuse the JSX from the home/feed page but without the .map as we only have one post
  return (
    <>
      <div key={post.id} className="mb-5">
        <p>
          {post.username} | {post.created_at.toLocaleDateString("en-gb")}
        </p>
        <h2>{post.title}</h2>
        <Image src={post.img} alt={post.content} width={400} height={400} />
        <p>{post.content}</p>
      </div>
    </>
  );
}
