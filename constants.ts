
import { FaHome, FaDollarSign, FaUsers, FaBroom } from "react-icons/fa";
import step1Animation from "@/animations/bookings.json";
import step2Animation from "@/animations/order.json";
import step3Animation from "@/animations/details.json";
import step4Animation from "@/animations/service.json";

export const NavbarData = [
  {
    title: "Home",
     link: "/",
  },
  {
    title: "About",
     link: "",
  },
  {
    title: "Services",
     link: "",
  },
  // {
  //   title: "FAQs",
  //   link: "#",
  // },
  {
    title: "Clients",
     link: "",
  },
  {
    title: "Testimonials",
    // link: "/about#testimonial",
  },
  {
    title: "About",
    // link: "/about",
  },
];

export const slidesData = [
  {
    title: "Discover the Hidden Beauty Within You Today",
    subtitle: "Experience the ultimate in beauty indulgence at Glam Squad,our expert team transforms your look with luxurious services tailored to your unique style",
    image: "/images/hom.jpg",
  },
  
  {
    title: "Transform Your Look Unleash Your Inner Glow",
    subtitle: "Transform your beauty routine with our expert makeup services, tailored to enhance your natural beauty",
    image: "/images/home2.jpg",
  },
  {
    title: "Pamper Yourself Elevate Your Beauty Experience",
    subtitle: "Trust us to provide expert care that leaves you feeling confident and looking stunning. Book your appointment today and let us help you shine",
    image: "/images/home3.jpg",
  },
];

export const reviews = [
  {
    image: '/images/home3.jpg',
    alt: 'John Doe',
    name: 'Sheikh Shahi',
    position: "Regular Client",
    rating: 5,
    content: 'Thoroughly enjoyed the services provided by our team. They particularly appreciated the efficient and professional manner in which our team worked.'
  },
  {
    image: '/images/home3.jpg',
    alt: 'Jane Smith',
    name: 'Hajra Watali',
    position: "Regular Client",
    rating: 5,
    content: 'Its the best salon I Have ever been to. The staff is incredibly talented and always makes me feel welcome. The services are top-notch.'
  },
  {
    image: '/images/home3.jpg',
    alt: 'Alice Johnson',
    name: 'Aayat Hussain',
    position: "Regular Client",
    rating: 5,
    content: 'I can confidently say that its the premier salon in town. The exceptional service and attention to detail always exceed my expectations.'
  },
  {
    image: '/images/home3.jpg',
    alt: 'Heena Zargar',
    name: 'Heena Zargar',
    position: "Regular Client",
    rating: 5,
    content: 'I can confidently say that its the premier salon in town. The exceptional service and attention to detail always exceed my expectations.'
  },
  
];


export const services = [
  {
    image: '/images/home3.jpg',
    text: 'Waxing',
    text2: 'At Home',
  },
  {
    image: '/images/home3.jpg',
    text: 'Facial',
    text2: 'At Home',
  },
  {
    image: '/images/home3.jpg',
    text: 'Lashes',
    text2: 'At Home',
  },
  {
    image: '/images/home3.jpg',
    text: 'Threading',
    text2: 'At Home',
  },
  {
    image: '/images/home3.jpg',
    text: 'Hair',
    text2: 'At Home',
  },
  {
    image: '/images/home3.jpg',
    text: 'Threading ',
    text2: 'At Home',
  },
  
];



export const columnCardData = [
  {
    id: 1,
    icon: FaHome,
    title: "Home Services",
    description: "Experience the perfect blend of artistry and glamour. Enjoy our luxury salon services at home with just one click."
  },
  {
    id: 2,
    icon: FaDollarSign,
    title: "Affordable Price",
    description: "Experience the perfect blend of artistry and glamour. Enjoy our luxury salon services at home at affordable prices."
  },
  {
    id: 3,
    icon: FaUsers,
    title: "Professional Team",
    description: "Our dedicated team is committed to providing you with exceptional service tailored to your needs. Thank you for considering us!"
  },
  {
    id: 4,
    icon: FaBroom,
    title: "Clean & Hygiene",
    description: "We prioritize hygiene and cleanliness to ensure your safety. Experience the peace of mind that comes with our commitment to cleanliness."
  }
];

export const stepsData = [
  {
    text: "Choose your desired makeup service.",
     animation: step4Animation
    
  },
  {
    text: "Select a convenient date and time for booking.",
    animation: step1Animation
    
  },
  {
    text: "Enter your contact details and address.",
    animation: step3Animation
  },
  {
    text: "Review your booking and confirm your order.",
    animation: step2Animation
    
    
  }
];







export const API_HOST = "https://mvp-lit-list.saibbyweb.com/admin/graphql";




