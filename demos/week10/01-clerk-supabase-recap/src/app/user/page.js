import { db } from "@/utils/dbConn";
import { auth } from "@clerk/nextjs/server";

export default async function Profile() {
  const { userId } = await auth();

  const userData = (
    await db.query("SELECT * FROM users WHERE clerk_id = $1", [userId])
  ).rows[0];

  return (
    <>
      <h1>{userData.username}</h1>
      <p>{userData.bio}</p>
    </>
  );
}
