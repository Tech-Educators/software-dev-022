import { useParams } from "react-router"
import { findPlant } from "../plantInfo"

export default function IndividualPlant() {
    // so if the route is plants/1 the params are {"id": "1"}
    // plants/1
    const params = useParams()
    console.log(params)
    const plantInfo = findPlant(params.id)
    console.log(plantInfo)
    return (
        <div>
            {plantInfo ? (
                <div>
                    <p>{plantInfo.name}</p>
                    <p>{plantInfo.description}</p>
                    <img src={plantInfo.image} />
                </div>
            ) : <p>Not a plant</p>}
        </div>
    )
}