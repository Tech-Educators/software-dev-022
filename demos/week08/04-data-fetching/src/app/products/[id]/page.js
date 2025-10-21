// What information do I need to know so I can make a request to get the correct product infromation

// the act of the user going to a certain route of our application triggers this page compoennt to run 
// product/[parameter]

// some examples of where the user could go
// ROUTE PARAMETERS -> params
// product/sam
// products/2
// proucts/cool-lipstick
export default async function Page({params}) {
    const routeParams = await params
    console.log(routeParams)

    const res = await fetch(`https://dummyjson.com/products/${routeParams.id}`)
    const productInfo = await res.json()
    console.log(productInfo)

    return (
        <div>
            <p>{productInfo.title}</p>
            <p>{productInfo.description}</p>
            <p>{productInfo.price}</p>
        </div>
    )
}
