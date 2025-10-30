import { db } from "@/utils/dbConn";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function CreatePost() {
  const { userId } = await auth();
  //   If the foreign key is the SQL-generated id then we want to query the db to get that instead of the clerk id
  const properId = await db.query("SELECT id FROM users WHERE clerk_id = $1", [
    userId,
  ]);

  async function handlePost(formData) {
    "use server";
    // Assuming we have just one column called title:
    const { title } = Object.fromEntries(formData);
    await db.query("INSERT INTO posts (title) VALUES ($1)", [title]);
    revalidatePath("/");
    redirect("/");
  }

  return (
    <form action={handlePost}>
      {/* standard input setup */}
      <label htmlFor="title">Title:</label>
      <input type="text" name="title" />
      <button type="submit">Click me</button>
    </form>
  );
}
