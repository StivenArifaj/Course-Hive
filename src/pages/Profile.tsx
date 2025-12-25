import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useStore } from "@/store/useStore";
import { User, Mail, Shield, Bell, CreditCard, Settings, LogOut, ChevronRight } from "lucide-react";

export default function Profile() {
  const { user } = useStore();

  const menuItems = [
    { label: "Personal Information", desc: "Update your name, email, and avatar", icon: User },
    { label: "Login & Security", desc: "Manage your password and 2FA", icon: Shield },
    { label: "Notifications", desc: "Choose what you want to be notified about", icon: Bell },
    { label: "Payments & Billing", desc: "Manage your payment methods and invoices", icon: CreditCard },
    { label: "Account Preferences", desc: "Language, region, and accessibility settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12" id="main">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="relative group">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-xl"
            />
            <button className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-700 transition-all">
              <Settings size={16} />
            </button>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">{user?.name}</h1>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500">
              <Mail size={16} />
              <span>{user?.email}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="divide-y divide-gray-50">
            {menuItems.map((item, i) => (
              <button key={i} className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-all group">
                <div className="flex items-center gap-6 text-left">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{item.label}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </div>
                <ChevronRight size={20} className="text-gray-300 group-hover:text-indigo-600 transition-colors" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <Link
            to="/dashboard"
            className="text-indigo-600 font-bold hover:underline flex items-center gap-2"
          >
            <ChevronRight size={16} className="rotate-180" />
            Back to Dashboard
          </Link>
          <button className="flex items-center gap-2 text-red-500 font-bold hover:bg-red-50 px-6 py-3 rounded-2xl transition-all">
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </main>
    </div>
  );
}
