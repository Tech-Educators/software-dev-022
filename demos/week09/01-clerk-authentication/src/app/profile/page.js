import {auth, currentUser} from "@clerk/nextjs/server"
import Image from "next/image"

export default async function Page() {
    // auth is good if you just need the user ID or see if they're signed in.
    const user = await auth()
    console.log(user)

    // currentUser comes with more actual userInfomation - like their name 
    const current = await currentUser() 
    console.log(current)
    return (
        <div>
            <p>User page:</p>
            <h2>{current.username}</h2>
            <Image src={current.imageUrl} height={200} width={200} alt=""/>
        </div>
    )
}