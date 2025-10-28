import { db } from "@/utils/connect";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const { userId, redirectToSignIn } = await auth();

//   just incase someoen accidentally stubmled on here
  if (!userId) redirectToSignIn()

  const data = await db.query(
    `SELECT username, bio FROM user_account WHERE clerk_id = $1`,
    [userId]
  );
  const user = data.rows[0];

  async function handleUpdateUser(formData) {
    "use server"
    const username = formData.get('username')
    const bio = formData.get('bio')

    // DB to update the users details 
    
    await db.query(`
        UPDATE user_account 
        SET username = $1,
        bio = $2
        WHERE clerk_id = $3
        `, [username, bio, userId])

    redirect('/users')
  }

  return (
    <div>
        {/* is there some way to have just one form for either adding new details or updating your detialls.... */}
      <h2>Edit your profile:</h2>
      <form action={handleUpdateUser}>
        <input name="username" placeholder="enter username..." defaultValue={user.username} />
        <input name="bio" placeholder="enter bio..." defaultValue={user.bio} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

// UPDATE statemento

// PATCH - only update the particular fields that changed
// For the sake of simplicity
// We'll get all of the data about our user
// prefill the form
// then post it all back to the db.
