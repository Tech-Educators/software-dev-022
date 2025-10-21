import pg from "pg"
import Image from "next/image"

export default async function Page({params}) {
    // calling away params return {id: 'whatever'}
    const {id} = await params 


    const db = new pg.Pool({connectionString: process.env.DB_CONN})
    const data = await db.query(`SELECT * FROM BOOKS WHERE id = $1`, [id])
    const bookInfo = data.rows[0]
    return (
        <div>
            <h2>{bookInfo.title}</h2>
            <p>{bookInfo.author} | {new Date(bookInfo.released).toLocaleDateString('en-GB',{month: 'long'}).split('T')[0]}</p>
        </div>
    )
}