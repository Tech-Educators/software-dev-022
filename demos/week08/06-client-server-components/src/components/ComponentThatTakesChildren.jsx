'use client'
export default function ComponentThatTakesChildren({children}) {
    console.log(`Client that takes children runs on the client`)
    return (
        <div>
            <h3>Children this components has stolen:</h3>
            {children}
        </div>
    )
}