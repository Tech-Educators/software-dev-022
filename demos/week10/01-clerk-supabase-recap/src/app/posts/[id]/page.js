import { db } from "@/utils/dbConn";
import Image from "next/image";

export default async function EachPost({ params }) {
  const { id } = await params;

  const response = await db.query(
    "SELECT posts.*, users.username FROM posts JOIN users ON posts.user_id = users.id WHERE posts.id = $1",
    [id]
  );
  const post = response.rows[0];

  return (
    <>
      <div>
        <p>
          {post.username} | {post.created_at.toLocaleTimeString()}
        </p>
        <h2>{post.title}</h2>
        <Image src={post.img} alt={post.content} width={500} height={500} />
        <p>{post.content}</p>
        <p>Likes: {post.likes}</p>
        <br />
      </div>
    </>
  );
}
