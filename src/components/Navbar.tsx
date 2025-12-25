
import { Book, Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useStore } from "@/store/useStore";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Categories", to: "/#categories" },
  { label: "Featured", to: "/#featured" },
  { label: "Dashboard", to: "/dashboard" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart, user } = useStore();

  return (
    <header className="w-full border-b bg-white/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <a href="#main" className="absolute -left-full focus:left-4 focus:top-4 focus:relative focus:inline-block bg-white px-3 py-2 rounded shadow text-sm">Skip to content</a>
        <nav className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <Book className="text-white" size={24} />
            </div>
            <Link to="/" className="font-bold text-xl tracking-tight text-gray-900">Course<span className="text-indigo-600">Hive</span></Link>
          </div>

          <div className="hidden md:flex gap-7 items-center">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="font-medium text-gray-600 hover:text-indigo-600 transition-colors px-2 py-1">
                {l.label}
              </Link>
            ))}

            <div className="h-6 w-px bg-gray-200 mx-2"></div>

            <button aria-label="Search" className="rounded-lg p-2 hover:bg-gray-100 transition">
              <Search className="w-5 h-5 text-gray-500" />
            </button>
            <Link aria-label="Cart" to="/cart" className="relative hover:bg-gray-100 p-2 rounded-lg transition">
              <ShoppingCart className="w-5 h-5 text-gray-500" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 text-[10px] font-bold bg-indigo-600 text-white w-4 h-4 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
            <Link to="/profile" className="flex items-center gap-2 font-medium text-gray-700 hover:text-indigo-700 transition p-1 rounded-full hover:bg-gray-100">
              {user?.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border border-gray-200" />
              ) : (
                <User className="w-5 h-5" />
              )}
              <span className="hidden lg:inline text-sm">{user?.name || "Profile"}</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div id="mobile-menu" className="md:hidden py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/profile" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">Profile</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
