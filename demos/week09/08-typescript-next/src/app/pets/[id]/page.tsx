

// anything in an URL will be of type string

// all page.js files are passed an object 
/*
{
    params: {id: '2'},
    searchParams: {sortBy: 'asc'}
}
*/

type pageParams = {
    params: {
        id: string
    }
}

export default async function Page({params}: pageParams) {
    const {id} = await params
    return (
        <></>
    )
}



/// ====== OR DO THIS ====== :

// export default async function Page({params}: {params: {id: string} }) {
//     const {id} = await params
//     return (
//         <div>

//         </div>
//     )
// }