import { FaHome, FaDollarSign, FaUsers, FaBroom } from "react-icons/fa";
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
    link: "/services",
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
    title: "Legal Surface prides itself on a collaborative approach to legal practice.",
    subtitle:
    "As noted by one of our senior lawyers, at Legal Surface, we don't just represent clients — we champion their causes with integrity and dedication. Our approach is grounded in meticulous preparation and a relentless commitment to achieving justice."

  },

  {
    title: "For reliable and dedicated legal representation, trust Legal Surface.",
    
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

export const faqItems = [
  {
    question: "How Can I Schedule a Consultation with Your Law Firm?",
    answer:
      "You can easily schedule a consultation with us by visiting our website and selecting the 'Book a Consultation' option. Choose your preferred date and time, and fill in the required details. Our team will confirm your appointment via email or phone.",
  },
  {
    question: "What Types of Legal Services Does Your Firm Provide?",
    answer:
      "Our law firm provides a wide range of legal services, including family law, corporate law, real estate law, estate planning, and criminal defense. We also offer specialized services for businesses and individuals. Contact us to discuss your specific legal needs.",
  },
  {
    question: "Do You Offer Free Initial Consultations?",
    answer:
      "Yes, we offer a free initial consultation to discuss your case and determine how we can assist you. This allows us to understand your needs and provide you with an overview of the legal options available to you.",
  },
  {
    question: "How Can I Make Payments for Legal Services?",
    answer:
      "We offer multiple payment options, including credit/debit cards, bank transfers, and online payment methods such as PayPal. We also provide flexible payment plans for our clients. Please contact our billing department for more details.",
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

export const stats = [
  { heading: "200+", subHeading: "Trust Administion" },
  { heading: "400+", subHeading: "Estate Plans" },
  { heading: "400+", subHeading: "Litigation Clients" },
  { heading: "100+", subHeading: "Secured Cases" },
];

export const API_HOST = "http://localhost:4000/";
