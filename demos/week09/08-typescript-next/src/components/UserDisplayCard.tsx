import Image from "next/image";

// remember that props go the component as an object
// so we need to *type* that object



export default function UserDisplayCard({name, location, image}: {name: string, location: string, image: string}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{location}</p>
            <Image height={300} width={200} alt="" src={image} />
        </div>
    )
}

type arrayOfFriendsType = {
    arrayOfFriends: string[]
}

export function UserFriends({arrayOfFriends} : arrayOfFriendsType) {
    return (
        <div>
        {arrayOfFriends.map(friend => (
            <div>
                {/* firend detials */}
            </div>
        ))}
        </div>
    )
}