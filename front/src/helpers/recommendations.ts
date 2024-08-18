const RECOMMENDATIONS_URL= process.env.NEXT_PUBLIC_API_URL

async function recommendations(id:number) {
    const res = await fetch(`${RECOMMENDATIONS_URL}/users/${id}`)
    const recommendations = await res.json()
    return recommendations
}



export default recommendations;