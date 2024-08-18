'use client';

import { useEffect, useState } from "react";
import recommendations from "@/helpers/recommendations";
import { IRecommendation, IUserRecommendation } from "@/app/types";



const Recommendations: React.FC = () => {
    const [userRecommendations, setUserRecommendations] = useState<IRecommendation[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("storedUser");

        if (storedUser) {
            const user = JSON.parse(storedUser).user;
            const userId = user.id;

            recommendations(userId)
                .then((data: IUserRecommendation) => {
                    setUserRecommendations(data.recommendations);
                })
                .catch(() => {
                    setError("Error al obtener las recomendaciones.");
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setError("No se encontró información de usuario.");
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <p className="text-center text-black">Cargando recomendaciones...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    if (userRecommendations.length === 0) {
        return (
            <div className="p-4 bg-white shadow-md rounded-lg">
                <p className="text-black">
                    Recuerda mantener una dieta balanceada. En promedio, un adulto debe consumir entre 2,000 y 2,500 calorías por día, dependiendo de la actividad física. Es importante cuidar las porciones y asegurarse de incluir una variedad de nutrientes en la dieta diaria.
                </p>
            </div>
        );
    }

    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            {userRecommendations.map((recommendation, index) => (
                <div key={index} className="mb-4">
                    {recommendation.recommended_foods && (
                        <p className="text-black">
                            Para mantener un nivel adecuado de {recommendation.nutrient}, se recomienda consumir los siguientes alimentos: {recommendation.recommended_foods.join(", ")}.
                        </p>
                    )}
                    {recommendation.avoid_foods && (
                        <p className="text-black">
                            Debido a tu sensibilidad a {recommendation.nutrient}, te sugerimos evitar los siguientes alimentos: {recommendation.avoid_foods.join(", ")}.
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Recommendations;