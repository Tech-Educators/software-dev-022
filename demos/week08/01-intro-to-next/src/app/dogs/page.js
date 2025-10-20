import Link from "next/link"

export default function Page() {

    const pets = [
        {
            id: 0,
            name: 'Archer',
            type: 'Husky'
        }, {
            id: 1,
            name: 'Maisie',
            type: 'Lurcher'
        }, {
            id: 2,
            name: 'Bella',
            type: 'Cocker Spaniel'
        }, {
            id: 3,
            name: 'Elsa',
            type: 'Lurcher'
        }
    ]

    // make a dynamic route so that each time someone goes to /dogs/[anything]
    // they hit that page

    // in express and react router we could use a : to signify a dynamic 
    // :id for example was useParams() req.params

    // in nextjs we use []s in the folder name
    // we can use await params to get the parameter details
    return (
        <div>
            <p>This is the dogs page!</p>
            {pets.map(pet => (
                <div key={pet.id}>
                    <Link href={`/dogs/${pet.id}`}>{pet.name}</Link>
                </div>
            ))}
        </div>
    )
}