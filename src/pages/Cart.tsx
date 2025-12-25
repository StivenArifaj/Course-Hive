import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useStore } from "@/store/useStore";
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck } from "lucide-react";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useStore();

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12" id="main">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-100">
            <ShoppingBag size={24} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-[2.5rem] p-16 text-center shadow-sm border border-gray-100">
            <div className="w-24 h-24 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center mx-auto mb-8">
              <ShoppingBag size={48} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-10 max-w-md mx-auto">
              Looks like you haven't added any courses yet. Explore our featured courses and start learning today!
            </p>
            <Link
              to="/"
              className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100"
            >
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between px-4">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">{cart.length} Courses in Cart</span>
                <button
                  onClick={clearCart}
                  className="text-sm font-bold text-red-500 hover:text-red-600 transition-colors"
                >
                  Clear all
                </button>
              </div>

              {cart.map((item) => (
                <div key={item.courseId} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 group hover:shadow-md transition-all">
                  <div className="w-full sm:w-48 aspect-video rounded-2xl overflow-hidden shrink-0">
                    <img src={item.thumb} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between gap-4 mb-2">
                      <h3 className="font-bold text-gray-900 text-lg group-hover:text-indigo-600 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <span className="font-extrabold text-gray-900 text-xl">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">By Expert Instructor</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs font-bold text-indigo-600 uppercase tracking-wider">
                        <span>Lifetime Access</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span>Certificate</span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.courseId)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                        title="Remove item"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-indigo-50 border border-gray-100 sticky top-28">
                <h2 className="text-xl font-bold text-gray-900 mb-8">Order Summary</h2>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Estimated Tax (8%)</span>
                    <span className="font-bold text-gray-900">${tax.toFixed(2)}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex justify-between items-end">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-3xl font-extrabold text-indigo-600">${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                    <button className="absolute right-2 top-2 bottom-2 bg-gray-900 text-white px-4 rounded-xl text-xs font-bold hover:bg-gray-800 transition-all">
                      Apply
                    </button>
                  </div>
                </div>

                <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 group">
                  Checkout Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="mt-8 flex items-center justify-center gap-2 text-gray-400 text-xs font-medium">
                  <ShieldCheck size={16} className="text-green-500" />
                  Secure Checkout Guaranteed
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
