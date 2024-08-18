"use client";

import { useState, useEffect } from "react";
import recommendProducts from "@/helpers/recommendProducts";
import ProductCard from "@/components/ProductCard";
import { IRecommendProduct } from "@/app/types";

const RecommendProducts: React.FC = () => {
    const [recommendedProducts, setRecommendedProducts] = useState<IRecommendProduct[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("storedUser") || "{}");
        const id = storedUser.user?.id;
        const preferences = storedUser.user?.preferences;

        if (id && preferences) {
            recommendProducts(id, preferences)
                .then(data => {
                    setRecommendedProducts(data.recommended_products);
                })
                .catch(err => {
                    setError("Error fetching recommended products.");
                });
        } else {
            setError("User data is missing.");
        }
    }, []);

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <div className="m-5">
            <h2 className="text-2xl font-semibold text-black mb-5">Nuestros productos recomendados para ti</h2>
            <div className="flex flex-wrap place-content-center">
                {recommendedProducts.length > 0 ? (
                    recommendedProducts.map((item, index) => (
                        <div key={index}>
                            <ProductCard
                                name={item.product.name}
                                kcal={item.product.kcal}
                                prot={item.product.prot}
                                carbo={item.product.carbo}
                                fats={item.product.fats}
                                tags={item.product.tags}
                            />
                            <p className="text-sm text-gray-500 mt-2">{item.reason}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-black">No se encontraron productos recomendados.</p>
                )}
            </div>
        </div>
    );
};

export default RecommendProducts;