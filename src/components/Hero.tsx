import { ArrowRight, Play, Star } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-32">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-fade-in">
                            <Star size={16} className="fill-indigo-700" />
                            <span>The #1 Platform for Online Learning</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-[1.1] tracking-tight">
                            Master New Skills <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                                Without Limits.
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Join 10,000+ students learning from industry experts. Get access to high-quality courses and accelerate your career growth today.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <a
                                href="#featured"
                                className="group bg-indigo-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 transition-all flex items-center gap-2"
                            >
                                Explore Courses
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <button className="flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-bold text-gray-700 hover:bg-gray-50 transition-all">
                                <div className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-indigo-600">
                                    <Play size={18} className="fill-indigo-600 ml-1" />
                                </div>
                                Watch Demo
                            </button>
                        </div>

                        <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <img
                                        key={i}
                                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`}
                                        alt="User"
                                        className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                                    />
                                ))}
                            </div>
                            <div className="text-sm text-gray-500">
                                <span className="font-bold text-gray-900">4.9/5</span> from over <span className="font-bold text-gray-900">2,000+</span> reviews
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-100 border-8 border-white animate-float">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                                alt="Students collaborating"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-2xl -z-0 rotate-12 hidden sm:block"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-600 rounded-full -z-0 opacity-10 hidden sm:block"></div>

                        <div className="absolute top-1/2 -left-12 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl z-20 hidden xl:block animate-bounce-slow">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                    <Star size={20} className="fill-green-600" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Top Rated</div>
                                    <div className="text-sm font-bold text-gray-900">UI/UX Design</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
