import { Star, ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useStore } from "@/store/useStore";
import { Course } from "@/lib/types";

export default function CourseCard(course: Course) {
  const { id, slug, title, instructor, price, rating, thumb, category } = course;
  const { addToCart, cart } = useStore();
  const isInCart = cart.some((item) => item.courseId === id);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col group h-full">
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        <img
          src={thumb}
          alt={title}
          loading="lazy"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-indigo-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {category}
          </span>
        </div>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <Link
            to={`/course/${slug ?? id}`}
            className="bg-white text-gray-900 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors shadow-lg"
            title="View Details"
          >
            <Eye size={20} />
          </Link>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-5">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
          <span className="text-xs font-bold text-gray-600 ml-1">{rating}</span>
        </div>

        <h3 className="text-gray-900 font-bold mb-1 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-xs mb-4">By <span className="font-medium text-gray-700">{instructor}</span></p>

        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50">
          <span className="text-gray-900 font-extrabold text-xl">${price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(course)}
            disabled={isInCart}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${isInCart
                ? "bg-green-50 text-green-600 cursor-default"
                : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-indigo-200"
              }`}
          >
            {isInCart ? (
              "In Cart"
            ) : (
              <>
                <ShoppingCart size={16} />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
