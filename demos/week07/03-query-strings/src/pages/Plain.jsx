import { useParams, useSearchParams } from "react-router"
export default function Plain() {
    const [params, setSearchParams] = useSearchParams()


    console.log(params)
    // http://localhost:5173?cat=true&sorted=asc
    console.log(params.get('cat')) // true
    console.log(params.get('sorted')) // asc
    return (
        <div>
            <h2>Query strings</h2>
        </div>
    )
}