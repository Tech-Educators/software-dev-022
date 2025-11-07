import { db } from "@/utils/dbConn";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import Image from "next/image";

export default async function UserProfile({ params }) {
  const { userId } = await auth();
  const sqlId = (
    await db.query("SELECT id FROM users WHERE clerk_id = $1", [userId])
  ).rows[0].id;

  const { id } = await params;
  const userData = (await db.query("SELECT * FROM users WHERE id = $1", [id]))
    .rows[0];
  const userPosts = (
    await db.query("SELECT * FROM posts WHERE user_id = $1", [id])
  ).rows;

  async function handleFollow(formData) {
    "use server";
    const { follower_id, followed_id } = Object.fromEntries(formData);

    await db.query(
      "INSERT INTO following (follower_id, followed_id) VALUES ($1, $2)",
      [follower_id, followed_id]
    );
    revalidatePath(`/posts/${id}`);
  }

  const followResponse = await db.query(
    "SELECT * FROM following WHERE follower_id = $1 AND followed_id = $2",
    [sqlId, id]
  );
  const isFollowing = followResponse.rows[0];

  return (
    <>
      <div className="m-5">
        <h1 className="text-5xl">{userData.username}</h1>
        <p className="text-2xl">{userData.bio}</p>
      </div>
      {sqlId ? (
        <form action={handleFollow}>
          <input type="hidden" name="follower_id" value={sqlId} />
          <input type="hidden" name="followed_id" value={id} />
          <button type="submit" disabled={isFollowing}>
            {isFollowing ? "Already following" : "Follow"}
          </button>
        </form>
      ) : null}

      {userPosts.map((post) => (
        <div key={post.id}>
          <p>{post.created_at.toLocaleTimeString()}</p>
          <h2>{post.title}</h2>
          <Image src={post.img} alt={post.content} width={500} height={500} />
          <p>{post.content}</p>
          <p>Likes: {post.likes}</p>
          <br />
        </div>
      ))}
    </>
  );
}
