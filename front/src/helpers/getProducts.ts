import { IProduct } from "@/app/types";

const GETPRODUCTS_URL= process.env.NEXT_PUBLIC_API_URL

async function getProducts() {
    const res = await fetch(`${GETPRODUCTS_URL}/products`)
    const products: IProduct[] = await res.json()
    return products
}



export default getProducts;