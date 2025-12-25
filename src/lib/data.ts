import { Course, Category } from "./types";

export const demoCourses: Course[] = [
  {
    id: "1",
    slug: "react-101",
    title: "React 101: Build Modern Web Apps",
    instructor: "Jane Adams",
    price: 32.0,
    rating: 4.7,
    thumb: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
    category: "development",
    description: "A practical introduction to building modern web applications with React and TypeScript.",
  },
  {
    id: "2",
    slug: "digital-photography-mastery",
    title: "Digital Photography Mastery",
    instructor: "Carlos Gomez",
    price: 27.0,
    rating: 4.8,
    thumb: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    category: "photography",
    description: "Master composition, lighting, and post-processing techniques to create stunning photos.",
  },
  {
    id: "3",
    slug: "finance-fundamentals",
    title: "Finance Fundamentals For Beginners",
    instructor: "Dr. Clara Yun",
    price: 41.5,
    rating: 4.5,
    thumb: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    category: "finance",
    description: "Understand personal and corporate finance fundamentals for better decision making.",
  },
  {
    id: "4",
    slug: "python-bootcamp",
    title: "Python Bootcamp: Zero to Hero",
    instructor: "Samir Patel",
    price: 39.99,
    rating: 4.9,
    thumb: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    category: "development",
    description: "Comprehensive Python course that takes you from basics to building real projects.",
  },
  {
    id: "5",
    slug: "public-speaking-art",
    title: "The Art of Public Speaking",
    instructor: "Lucy Chen",
    price: 19.99,
    rating: 4.6,
    thumb: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    category: "personal-growth",
    description: "Build confidence and presence for public speaking and presentations.",
  },
  {
    id: "6",
    slug: "ui-ux-crash",
    title: "UI/UX Design Crash Course",
    instructor: "Daniel Lee",
    price: 26.0,
    rating: 4.4,
    thumb: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    category: "design",
    description: "A hands-on introduction to UI/UX fundamentals, prototyping, and accessible interfaces.",
  },
];

export const categories: Category[] = [
  { name: "Development", slug: "development", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" },
  { name: "Design", slug: "design", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
  { name: "Business", slug: "business", img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80" },
  { name: "Photography", slug: "photography", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" },
  { name: "Marketing", slug: "marketing", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
  { name: "Personal Growth", slug: "personal-growth", img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&q=80" },
  { name: "Finance", slug: "finance", img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80" },
];

export function findCourseById(id: string) {
  return demoCourses.find((c) => c.id === id || c.slug === id);
}

export function findCoursesByCategory(slug: string) {
  return demoCourses.filter((c) => c.category === slug);
}
