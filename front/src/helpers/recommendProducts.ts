const RECOMMEND_PRODUCTS_URL = process.env.NEXT_PUBLIC_API_URL;

async function recommendProducts(id: number, preferences: object) {
    const res = await fetch(`${RECOMMEND_PRODUCTS_URL}/products/recommend-products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: id,
            preferences: preferences,
        }),
    });

    const recommendedProducts = await res.json();
    return recommendedProducts;
}

export default recommendProducts;