import { db } from "@/utils/dbConn";
import { auth } from "@clerk/nextjs/server";

export default async function CreateProfile() {
  const { userId } = await auth();

  async function handleSubmit(formData) {
    "use server";
    const { username, bio } = Object.fromEntries(formData);
    await db.query(
      "INSERT INTO users (clerk_id, username, bio) VALUES ($1, $2, $3)",
      [userId, username, bio]
    );
    // db query to insert values from form into the users table, also insert the clerk id that we get from auth/currentUser
    // We can use userId directly in the query or add it as an input with 'type="hidden"' to include it with the formData
  }

  return (
    <form action={handleSubmit}>
      <label htmlFor="username">Enter a username:</label>
      <input name="username" />
      <label htmlFor="bio">Enter a bio:</label>
      <textarea name="bio" />
      <button type="submit">SUBMIT</button>
      {/* standard labels and inputs for whatever data we want to include in the profile */}
    </form>
  );
}
