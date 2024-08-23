import {
  FaHome,
  FaDollarSign,
  FaUsers,
  FaBroom,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";
import step1Animation from "@/animations/bookings.json";
import step2Animation from "@/animations/order.json";
import step3Animation from "@/animations/details.json";
import step4Animation from "@/animations/service.json";
import { MdCheckCircle, MdPeople, MdTrendingUp } from "react-icons/md";

export const NavbarData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/servicess",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Blogs",
    link: "/blog",
  },

];

export const slidesData = [
  {
    title: "Expert Legal Representation for All Your Needs",
    subtitle:
      "Trust our seasoned attorneys to provide unparalleled legal expertise. Whether you're facing a complex legal battle or seeking guidance on important matters, our dedicated team is here to protect your rights and advocate for your best interests with precision and car",
    
  },

  {
    title: "Your Trusted Legal Advisors for Lifelong Support",
    subtitle:
      "Navigate complex legal challenges with unwavering confidence. Our experienced team is committed to offering clear, strategic, and effective guidance tailored to your unique situation. Whether you're dealing with personal or business matters, we stand by you every step of the way, ensuring your legal journey is as smooth and successful as possible",
   
  },
  
];
export const reviews = [
  {
    text: "Thank you, before I begin, I'd like everyone to notice that my report is in a professional, clear plastic binder...",
    name: "Max Conversion",
    title: "LittleSnippets.net",
    image: "/images/nik.png",
    alt: "Max Conversion picture",
  },
  {
    text: "You know sometimes when I'm talking, my words can't keep up with my thoughts...",
    name: "Pelican Steve",
    title: " LittleSnippets.net",
    image: "/images/nik.png",
    alt: "Pelican Steve picture",
  },
  {
    text: "My behavior is addictive functioning in a disease process of toxic co-dependency...",
    name: "#1157",
    title: " LittleSnippets.net",
    image: "/images/nik.png",
    alt: "#1157 picture",
  },
  {
    text: "My behavior is addictive functioning in a disease process of toxic co-dependency...",
    name: "#1157",
    title: " LittleSnippets.net",
    image: "/images/nik.png",
    alt: "#1157 picture",
  },
  {
    text: "My behavior is addictive functioning in a disease process of toxic co-dependency...",
    name: "#1157",
    title: " LittleSnippets.net",
    image: "/images/nik.png",
    alt: "#1157 picture",
  },
];

// export const reviews = [
//   {
//     text: "Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... Hobbes: Probably so we can think twice.",
//     name: "Pelican Steve",
//     title: "LittleSnippets.net",
//     image: "/images/nik.png", 
//   },
//   {
//     text: "Thank you, before I begin, I'd like everyone to notice that my report is in a professional, clear plastic binder...",
//     name: "Max Conversion",
//     title: "LittleSnippets.net",
//     image: "/images/nik.png", 
//   },
//   {
//     text: "My behavior is addictive functioning in a disease process of toxic co-dependency...",
//     name: "#1157",
//     title: "LittleSnippets.net",
//     image: "/images/nik.png", 
//   },
//   // {
//   //   image: "/images/banner.jpg",
//   //   alt: "John Doe",
//   //   name: "Mr Waqar",
//   //   position: "Regular Client",
//   //   rating: 5,
//   //   content:
//   //     "Thoroughly enjoyed the services provided by our team. They particularly appreciated the efficient and professional manner in which our team worked.",
//   // },
//   // {
//   //   image: "/images/banner.jpg",
//   //   alt: "Jane Smith",
//   //   name: "Mr Hero",
//   //   position: "Regular Client",
//   //   rating: 5,
//   //   content:
//   //     "Its the best salon I Have ever been to. The staff is incredibly talented and always makes me feel welcome. The services are top-notch.",
//   // },
//   // {
//   //   image: "/images/banner.jpg",
//   //   alt: "Alice Johnson",
//   //   name: "Mr Chicken",
//   //   position: "Regular Client",
//   //   rating: 5,
//   //   content:
//   //     "I can confidently say that its the premier salon in town. The exceptional service and attention to detail always exceed my expectations.",
//   // },
//   // {
//   //   image: "/images/banner.jpg",
//   //   alt: "Aman",
//   //   name: "Mr Amaan",
//   //   position: "Regular Client",
//   //   rating: 5,
//   //   content:
//   //     "I can confidently say that its the premier salon in town. The exceptional service and attention to detail always exceed my expectations.",
//   // },
// ];

export const services = [
  {
    image: "/images/banner.jpg",
    text: "Waxing",
    text2: "At Home",
  },
  {
    image: "/images/banner.jpg",
    text: "Facial",
    text2: "At Home",
  },
  {
    image: "/images/banner.jpg",
    text: "Lashes",
    text2: "At Home",
  },
  {
    image: "/images/banner.jpg",
    text: "Threading",
    text2: "At Home",
  },
  {
    image: "/images/home3.jpg",
    text: "Hair",
    text2: "At Home",
  },
  {
    image: "/images/home3.jpg",
    text: "Threading ",
    text2: "At Home",
  },
];

export const columnCardData = [
  {
    id: 1,
    icon: FaHome,
    title: "Home Services",
    description:
      "Experience the perfect blend of artistry and glamour. Enjoy our luxury salon services at home with just one click.",
  },
  {
    id: 2,
    icon: FaDollarSign,
    title: "Affordable Price",
    description:
      "Experience the perfect blend of artistry and glamour. Enjoy our luxury salon services at home at affordable prices.",
  },
  {
    id: 3,
    icon: FaUsers,
    title: "Professional Team",
    description:
      "Our dedicated team is committed to providing you with exceptional service tailored to your needs. Thank you for considering us!",
  },
  {
    id: 4,
    icon: FaBroom,
    title: "Clean & Hygiene",
    description:
      "We prioritize hygiene and cleanliness to ensure your safety. Experience the peace of mind that comes with our commitment to cleanliness.",
  },
];

export const stepsData = [
  {
    text: "Choose your desired makeup service from our extensive range of professional options.",
    animation: step4Animation,
  },
  {
    text: "Select a convenient date and time for your booking to ensure you get the perfect...",
    animation: step1Animation,
  },
  {
    text: "Enter your contact details and address to help us provide you with the best service possible.",
    animation: step3Animation,
  },
  {
    text: "Review your booking and confirm your order to finalize your appointment.",
    animation: step2Animation,
  },
];

export const faqItems = [
  {
    question: "How Can I Book A Services On Glam Squad?",
    answer:
      "Yes, you can book our services from our website and browse through the categories of services provided by us. Click the service you need, choose your date and time. You will be asked to make payment for the service. You will get the service at home.",
  },
  {
    question: "Does Glam Squad Offers All Kinds Of Services At Home?",
    answer:
      "Yes, we provide all available beauty services like waxing, threading, skin cleanup, manicure/pedicure. If you have any questions, you can discuss with our beautification. The makeup artist will do those during your session.",
  },
  {
    question: "Does Galam Up beauticans bring their own beauty kit?",
    answer:
      "Yes, our home salon beauticians will get their own beauty products and facials. You don't have to worry about arranging them before the service.",
  },
  {
    question: "Do Glam Squad accepts online payments?",
    answer:
      "Yes, we provide multiple online payment options including online payment like Paytm, GPay, PhonePe, and we accept cash also.",
  },
];
export const contactCardData = [
  {
    icon: FaPhone,
    text1: "Phone Number:",
    text2: "+91 8899355648",
  },
  {
    icon: FaMapMarkerAlt,
    text1: "Address:",
    text2: "Rajbagh, Srinagar J & K",
  },

  {
    icon: FaClock,
    text1: "Opening Hours:",
    text2: "Mon - Sat 9:00 AM - 10:00 PM ",
  },
  {
    icon: FaEnvelope,
    text1: "Email Address:",
    text2: "glam90239@gmail.com",
  },
];

export const products = [
  {
    imageUrl: "/images/home3.jpg",
    productName: "Luxury Leo Repechage facial",
    productDes: "Service Time: 40 Mins",
    price: 200,
  },
  {
    imageUrl: "/images/home3.jpg",
    productName: "full body",
    productDes: "Service Time: 40 Mins",
    price: 550,
  },
  {
    imageUrl: "/images/home3.jpg",
    productName: "Hair",
    productDes: "Service Time: 40 Mins",
    price: 700,
  },
  {
    imageUrl: "/images/home3.jpg",
    productName: "Nails",
    productDes: "Service Time: 40 Mins",
    price: 50,
  },
  {
    imageUrl: "/images/home3.jpg",
    productName: "Wax body",
    productDes: "Service Time: 40 Mins",
    price: 10,
  },
  {
    imageUrl: "/images/home3.jpg",
    productName: "ody",
    productDes: "Service Time: 40 Mins",
    price: 10,
  },
  {
    imageUrl: "/images/home3.jpg",
    productName: "hands",
    productDes: "Service Time: 40 Mins",
    price: 10,
  },
];

export const expertiseData = [
  {
    Icon: MdPeople,
    heading: "Client Focused",
    description:
      "Many firms will say that the client comes first, but at Legal Surface, it's the foundation of our firm. Everything we have built has been to find a way to better serve those who place their trust in us.",
  },
  {
    Icon: MdCheckCircle,
    heading: "Details Matter",
    description:
      "Details often make the difference between success and failure. Our clients rely on us to pay attention to the details, spot the ones others miss, and understand the role those details play in their overall goals.",
  },
  {
    Icon: MdTrendingUp,
    heading: "Results-Driven",
    description:
      "We best serve our clients by first understanding the results our clients need and then formulating a legal strategy focused on achieving those results.",
  },
];

// export const testimonialsData = [
//   {
//     text: "Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... Hobbes: Probably so we can think twice.",
//     name: "Pelican Steve",
//     title: "LittleSnippets.net",
//     image: "/images/nik.png", 
//   },
//   {
//     text: "Thank you, before I begin, I'd like everyone to notice that my report is in a professional, clear plastic binder...",
//     name: "Max Conversion",
//     title: "LittleSnippets.net",
//     image: "/images/nik.png", 
//   },
//   {
//     text: "My behavior is addictive functioning in a disease process of toxic co-dependency...",
//     name: "#1157",
//     title: "LittleSnippets.net",
//     image: "/images/nik.png", 
//   },
// ];

export const API_HOST = "http://localhost:4000/";
