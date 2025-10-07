import './Hero.css'
// the styles in the Hero.css still apply to the whole application not just this component, even though its only imported here. 


export const Hero = () => {
    return (
        <div className='hero-text'>
            <p>For all the latest game news!</p>
            <p>What is even coming out</p>
        </div>
    )
}