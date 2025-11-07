import { db } from "@/utils/dbConn";
import { auth } from "@clerk/nextjs/server";

export default async function CreatePost() {
  const { userId } = await auth();
  const sqlId = (
    await db.query("SELECT id FROM users WHERE clerk_id = $1", [userId])
  ).rows[0].id;

  if (!sqlId) {
    return (
      <p>
        You&apos;re not signed in or you don&apos;t have a profile! Please go
        make one!
      </p>
    );
  }

  async function handlePost(formData) {
    "use server";
    const { title, content, image } = Object.fromEntries(formData);
    await db.query(
      "INSERT INTO posts (title, content, img, user_id) VALUES ($1, $2, $3, $4)",
      [title, content, image, sqlId]
    );
  }

  return (
    <form action={handlePost}>
      <label htmlFor="title">Enter a title:</label>
      <input type="text" name="title" />
      <label htmlFor="content">Enter the content:</label>
      <input type="text" name="content" />
      <label htmlFor="image">Enter an image URL:</label>
      <input type="url" name="image" />
      <button type="submit">Submit</button>
    </form>
  );
}
