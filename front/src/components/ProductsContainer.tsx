'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from "@/components/ProductCard";
import getProducts from "@/helpers/getProducts";
import { IProduct } from "@/app/types";

const ProductsContainer: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await getProducts();
            setProducts(productsData);
            setFilteredProducts(productsData);
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        let filtered = products;

        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedTags.length > 0) {
            filtered = filtered.filter(product =>
                selectedTags.every(tag => product.tags.includes(tag))
            );
        }

        setFilteredProducts(filtered);
        setCurrentPage(1);
    }, [searchTerm, selectedTags, products]);

    const handleTagChange = (tag: string) => {
        setSelectedTags(prevSelectedTags =>
            prevSelectedTags.includes(tag)
                ? prevSelectedTags.filter(t => t !== tag)
                : [...prevSelectedTags, tag]
        );
    };

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="m-5">
            <div className="flex justify-between mb-4 text-black">
                <div className="flex gap-4">
                    <label>
                        <input
                            type="checkbox"
                            value="Gluten"
                            onChange={() => handleTagChange("Gluten")}
                        />
                        Sin Gluten
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Alto en proteínas"
                            onChange={() => handleTagChange("Alto en proteínas")}
                        />
                        Alto en proteínas
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Vitamina C"
                            onChange={() => handleTagChange("Vitamina C")}
                        />
                        Vitamina C
                    </label>
                </div>
                <input
                    type="text"
                    placeholder="Buscar producto..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 border rounded"
                />
            </div>
            <div className="flex flex-wrap place-content-center">
                {currentProducts.map((product) => (
                    <ProductCard
                        key={product.name}
                        name={product.name}
                        kcal={product.kcal}
                        prot={product.prot}
                        carbo={product.carbo}
                        fats={product.fats}
                        tags={product.tags}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerPage) }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductsContainer;