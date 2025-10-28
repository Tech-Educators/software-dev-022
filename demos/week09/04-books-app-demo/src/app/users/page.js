import {auth} from "@clerk/nextjs/server"
import { db } from "@/utils/connect"
import UserSignUpForm from "@/components/UserSignUpForm"
import Link from "next/link"

export default async function UserPage() {
    const authInfo = await auth()

    // without destrcutring 
    const isAuthenticated = authInfo.isAuthenticated
    const redirectToSignIn = authInfo.redirectToSignIn
    const userId = authInfo.userId

    // with destructing 
    // const {isAuthenticated, redirectToSignIn, userId} = await auth()

    // Is the user signed in with clerk
    if (isAuthenticated == false) {
        redirectToSignIn()
    }

    // is the user in our database?

    const res = await db.query(`SELECT * FROM user_account WHERE clerk_id = $1`, [userId])
    const userInfo = res.rows[0] // get just the user info
    console.log(userInfo)
    
    // if userInfo is undefined, we know they're not in our database
    const isNotDB = userInfo === undefined

    if (isNotDB) {
        return (
            <div>
                <UserSignUpForm />
            </div>
        )
    }


    return (
        <div>
            <h2>Your profile:</h2>
            <p className="text-2xl">{userInfo.username}</p>
            <p>{userInfo.bio}</p>

            <br />
            <Link href={`/users/edit`}>Edit your profile</Link>
        </div>
    )
}