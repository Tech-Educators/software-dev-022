import { LikeButton } from "./LikeButton"

export const Card = ({lightMode}) => {
    console.log(`Card light mode is set to ${lightMode}`)
    return (
        <div className="card">
            <img src="https://img.freepik.com/free-photo/people-office-work-day_23-2150690162.jpg?semt=ais_hybrid&w=740&q=80" />
           <LikeButton /> 
        </div>
    )
}