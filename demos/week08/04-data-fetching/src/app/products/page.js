import Image from "next/image";
import Link from "next/link";

// in nextjs page.js files they all get an object ithe {params: '', searchParams: ''}

// searchParams are query strings ?something=red

export default async function Page({searchParams}) {
  const res = await fetch(`https://dummyjson.com/products?limit=5`);
  const data = await res.json();
  // const data = (await res.json()).products
  const products = data.products;

  const pageSearchParams = await searchParams
//   if the usre is on http://localhost:3000/products?sortBy=asc
  console.log(pageSearchParams) // {"sortBy": "desc"}

//   if there is a query string for sortby=desc, we'll reverse the product order
  if (pageSearchParams.sortBy == 'desc') {
    products.reverse()
  }

  return (
    <div>
      <h2>All products for sale</h2>
      <div className="flex flex-wrap">
          {products.map((product) => {
            return (
              <Link href={`/products/${product.id}`} key={product.id}>
                <Image src={product.thumbnail} height={300} width={300} alt={product.description} />
                <p>{product.title}</p>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
