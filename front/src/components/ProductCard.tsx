import { IProduct } from "@/app/types";

const ProductCard: React.FC<IProduct> = ({ name, kcal, prot, carbo, fats, tags }) => {
  return (
    <div className="relative flex flex-col w-72 rounded-xl bg-gray-800 p-6 shadow-lg mx-3 my-6">
      <div className="mb-4">
        <h5 className="text-2xl font-semibold text-white mb-2">
          {name}
        </h5>
        <p className="text-sm text-gray-400">
          {kcal} kcal
        </p>
        <p className="text-sm text-gray-400">
          {prot}g protein, {carbo}g carbs, {fats}g fats
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-green-400 text-white text-xs font-medium px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;