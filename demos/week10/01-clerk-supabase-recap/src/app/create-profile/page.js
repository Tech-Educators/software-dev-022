import { db } from "@/utils/dbConn";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function CreateProfile() {
  const { userId } = await auth();

  async function handleSubmit(formData) {
    "use server";
    const { username, bio } = Object.fromEntries(formData);

    await db.query(
      "INSERT INTO users (clerk_id, username, bio) VALUES ($1, $2, $3)",
      [userId, username, bio]
    );

    revalidatePath("/user");
    redirect("/user");
  }

  return (
    <form action={handleSubmit}>
      <label htmlFor="username">Enter a username:</label>
      <input type="text" name="username" />
      <label htmlFor="bio">Enter a bio:</label>
      <textarea name="bio" />
      <button type="submit">Submit</button>
    </form>
  );
}
