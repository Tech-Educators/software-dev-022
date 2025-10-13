import { Link } from "react-router"
import { plants } from "../plantInfo"

export default function PlantsPage() {
    return (
        <div>
            <h2>Page with all my plants</h2>
            <div>
                {plants.map((plant => {
                    return (
                        // Link to plants/whatever the plant id
                        <Link to={`/plants/${plant.id}`}>
                            <p>{plant.name}</p>
                        </Link>
                    )
                }))}
            </div>
        </div>
    )
}