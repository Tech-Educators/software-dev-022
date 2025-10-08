import './Image.css'
import { useState } from 'react'

// whenever state changes, the Image comonponent is re-renderd
export const Image = ({imgUrl, title, author, loved}) => {
    const [showData, setShowData] = useState(false)
    console.log('Running compoinign....')

    function handleClick() {
        setShowData(!showData)
    }
    if (loved === true) {
        return <p>This is super loved, but now we can't see the image because this return statement prevents the one below from returning</p>
    }

    return (
        <div className="image-section">
            <img src={imgUrl} alt={title} onClick={handleClick}/>
            {showData == true ? (
                <>
                    <h2>{title}</h2>
                    <p>{author}</p>
                </>
            ) : null
            }
            {/* Another way of checking this/conditional rendering */}
            {/* is loved is true and <p> is always true - and the way && statements work is if both things are true the only on the right is returned from the operator */}
            {loved && <p>This photo is super hot atm!</p>}
        </div>
    )
}