import Image from "next/image"
export default function BookDetails({book}) {
    return (
        <div>
            <Image src={book.img_url} height={300} width={200} alt={`An image of the cover of ${book.title}`} />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <br />
            <p>{book.description}</p>
        </div>
    )
}