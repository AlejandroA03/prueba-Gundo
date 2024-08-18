import Recommendations from "@/components/Recommendations";
import RecommendProducts from "@/components/RecommendProducts";

export default function Dashboard() {
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold text-black">Tus Recomendaciones</h1>
            <Recommendations />
            <RecommendProducts />
        </div>
    );
}