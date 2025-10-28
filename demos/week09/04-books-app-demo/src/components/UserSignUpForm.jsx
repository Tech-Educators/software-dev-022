import { db } from "@/utils/connect";
import { auth } from "@clerk/nextjs/server";

export default async function UserSignUpForm() {
  const { userId } = await auth();

  // two rules about server functions
  // 'use server'
  // must be async

  async function handleSubmit(formData) {
    "use server";
    // turn formData into an object
    const data = Object.fromEntries(formData);

    await db.query(
      `INSERT INTO user_account (username, bio, clerk_id) VALUES ($1, $2, $3)`,
      [data.username, data.bio, userId]
    );
  }

  return (
    <form action={handleSubmit}>
      <input name="username" placeholder="enter username..." />
      <input name="bio" placeholder="enter bio..." />
      <button type="submit">submit</button>
    </form>
  );
}
