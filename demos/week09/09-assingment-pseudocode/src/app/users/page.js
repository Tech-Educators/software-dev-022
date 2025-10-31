import { db } from "@/utils/dbConn";

export default async function Users() {
  const response = await db.query("SELECT * FROM users");
  const users = response.rows;

  console.log(users);

  return (
    <>
      {users.map((user) => (
        <h1 key={user.id}>
          {user.username} | {user.bio}
        </h1>
      ))}
    </>
  );
}
