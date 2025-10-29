async function delay() {
    return new Promise((resolve) => {
        setTimeout(resolve, 5000)
    })
}

export default async function SlowComponenet() {
    await delay()
    return (
        <p>I made it!</p>
    )
}