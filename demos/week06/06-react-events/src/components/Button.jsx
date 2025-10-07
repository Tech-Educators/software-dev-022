export function Button() {
    return (
        <button onMouseEnter={() => {
            console.log('Hello')
        }}>
            Click me!
        </button>
    )
}