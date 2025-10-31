import { db } from "@/utils/dbConn";

export default async function eachUser({ params }) {
  const { id } = await params;

  const response = await db.query("SELECT * FROM users WHERE id = $1", [id]);
  const user = response.rows[0];

  return (
    <>
      <h1>
        {user.username} | {user.bio}
      </h1>
    </>
  );
}
