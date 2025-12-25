import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, CartItem, Course } from '../lib/types';

interface AppState {
    user: User | null;
    cart: CartItem[];
    setUser: (user: User | null) => void;
    addToCart: (course: Course) => void;
    removeFromCart: (courseId: string) => void;
    clearCart: () => void;
    enrollInCourse: (courseId: string) => void;
}

export const useStore = create<AppState>()(
    persist(
        (set) => ({
            user: {
                id: 'user-1',
                name: 'John Doe',
                email: 'john@example.com',
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
                enrolledCourses: [],
            },
            cart: [],
            setUser: (user) => set({ user }),
            addToCart: (course) =>
                set((state) => {
                    const exists = state.cart.find((item) => item.courseId === course.id);
                    if (exists) return state;
                    return {
                        cart: [
                            ...state.cart,
                            {
                                courseId: course.id,
                                title: course.title,
                                price: course.price,
                                thumb: course.thumb,
                            },
                        ],
                    };
                }),
            removeFromCart: (courseId) =>
                set((state) => ({
                    cart: state.cart.filter((item) => item.courseId !== courseId),
                })),
            clearCart: () => set({ cart: [] }),
            enrollInCourse: (courseId) =>
                set((state) => {
                    if (!state.user) return state;
                    if (state.user.enrolledCourses.includes(courseId)) return state;
                    return {
                        user: {
                            ...state.user,
                            enrolledCourses: [...state.user.enrolledCourses, courseId],
                        },
                    };
                }),
        }),
        {
            name: 'course-hive-storage',
        }
    )
);
