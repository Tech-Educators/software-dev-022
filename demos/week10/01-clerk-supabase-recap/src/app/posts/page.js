import { db } from "@/utils/dbConn";
import Image from "next/image";
import { revalidatePath } from "next/cache";

export default async function PostsPage() {
  const response = await db.query(
    "SELECT posts.*, users.username FROM posts JOIN users ON posts.user_id = users.id"
  );
  // const response = (await db.query('SELECT * FROM posts')).rows
  const posts = response.rows;

  async function handleLike(formData) {
    "use server";
    const { postId, prevLike } = Object.fromEntries(formData);

    await db.query("UPDATE posts SET likes = $1 WHERE id = $2", [
      Number(prevLike) + 1,
      postId,
    ]);

    revalidatePath("/posts");
  }

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <p>
            {post.username} | {post.created_at.toLocaleTimeString()}
          </p>
          <h2>{post.title}</h2>
          <Image src={post.img} alt={post.content} width={500} height={500} />
          <p>{post.content}</p>
          <p>Likes: {post.likes}</p>
          <form action={handleLike}>
            <input type="hidden" name="postId" value={post.id} />
            <input type="hidden" name="prevLike" value={post.likes} />
            <button type="submit">LIKE</button>
          </form>
          <br />
        </div>
      ))}
    </>
  );
}
