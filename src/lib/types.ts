export interface Course {
  id: string;
  slug: string;
  title: string;
  instructor: string;
  price: number;
  rating: number;
  thumb: string;
  category: string;
  description: string;
}

export interface Category {
  name: string;
  slug: string;
  img: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  enrolledCourses: string[]; // IDs of courses
}

export interface CartItem {
  courseId: string;
  title: string;
  price: number;
  thumb: string;
}
