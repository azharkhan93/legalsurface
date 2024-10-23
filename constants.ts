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
    title: "Practices",
    link: "/services",
    dropdown: [
      { title: "Criminal Law", link: "/services" },
      { title: "Armed Force", link: "/services/armed-forces" },


    ],
    
  },
  // {
  //   title: "Services",
  //   link: "/services",
  // },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Blogs",
    link: "/blog",
  },
  {
    title: "Careers",
    link: "/careers",
  },
];

export const slidesData = [
  {
    title:
      "Legal Surface prides itself on a collaborative approach to legal practice.",
    subtitle:
      "As noted by one of our senior lawyers, at Legal Surface, we don't just represent clients — we champion their causes with integrity and dedication. Our approach is grounded in meticulous preparation and a relentless commitment to achieving justice.",
  },

  {
    title:
      "Trust Legal Surface for reliable and dedicated legal representation.",

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

export const SERVICES_DATA = [
  {
    id: 1,
    title: "Anti-Corruption Cases Representation",
    description:
      "We offer specialized legal defense in anti-corruption cases, representing clients accused under various anti-corruption laws. Our firm handles cases involving public servants, corporate entities, and private individuals, providing robust representation during investigations, trials, and appeals to ensure a fair legal process.",
    imageSrc: "/images/pd.jpg",
    altText: "Anti-Corruption Cases",
  },
  
  {
    id: 2,
    title: "Bail Applications in District Courts",
    description:
      "We handle bail applications with precision and urgency, representing clients in district courts across Jammu & Kashmir. Our expert team prepares and files applications, advocates for favorable bail terms, and works diligently to secure timely relief.",
    imageSrc: "/images/pd.jpg",
    altText: "Anti-Corruption Cases",
  },
  {
    id: 3,
    title: "Bail Applications in High Court",
    description:
      "Legal Surface specializes in representing clients in bail applications at the High Court of Jammu & Kashmir. We handle urgent bail requests, anticipate prosecution arguments, and ensure prompt legal action to achieve effective outcomes. Whether it's regular bail, anticipatory bail, or interim relief, our team is dedicated to securing your release.",
    imageSrc: "/images/pd.jpg",
    altText: "Bail Applications",
  },
  {
    id: 4,
    title: "NDPS Act Representation",
    description:
      "Legal Surface offers expert legal representation for cases under the Narcotic Drugs and Psychotropic Substances (NDPS) Act. Our team handles all aspects of NDPS cases, including arrests, investigations, and court proceedings, working diligently to ensure a strong defense and protect your rights.",
    imageSrc: "/images/pd.jpg",
    altText: "Bail Applications",
  },
  {
    id: 5,
    title: "PMLA Cases Representation",
    description:
      "We provide expert defense for cases under the Prevention of Money Laundering Act (PMLA). Our firm manages complex money laundering cases with thorough preparation and strategic representation, aiming to safeguard your interests and achieve the best possible results.",

    imageSrc: "/images/pd.jpg",
    altText: "Bail Applications",
  },
  
  {
    id: 7,
    title: "TADA Representation",
    description:
      "Legal Surface provides expert defense for cases under the Terrorist and Disruptive Activities (Prevention) Act (TADA). Our experienced advocates navigate the complexities of TADA cases, offering comprehensive support during investigations, trials, and appeals. We work diligently to challenge unlawful detentions and protect your fundamental rights.",

    imageSrc: "/images/pd.jpg",
    altText: "Bail Applications",
  },
  {
    id: 8,
    title: "UAPA Representation",
    description:
      "At Legal Surface, we offer expert legal representation for cases under the Unlawful Activities (Prevention) Act (UAPA). Our skilled lawyers specialize in defending individuals accused of terrorism-related offenses, ensuring that your constitutional rights are safeguarded throughout the legal process. We handle investigations, bail applications, and trial defenses with meticulous attention to detail.",

    imageSrc: "/images/pd.jpg",
    altText: "Bail Applications",
  },
  {
    id: 9,
    title: "White-Collar Crimes Representation",
    description:
      "We provide expert defense for white-collar crimes, including corporate fraud, embezzlement, and financial misconduct. Our experienced team navigates complex financial cases, ensuring meticulous preparation and strategic representation to protect your interests and achieve favorable outcomes.",

    imageSrc: "/images/pd.jpg",
    altText: "Bail Applications",
  },
  {
    id: 10,
    title: "Cyber Crimes Representation",
    description:
      "At Legal Surface, we offer expert defense for individuals facing charges related to cyber crimes. Our team handles cases involving online fraud, hacking, identity theft, and data breaches. We provide a strategic defense, safeguarding your rights in both trial courts and appeals.",
    imageSrc: "/images/pd.jpg",
    altText: "Bail Applications",
  },
  {
    id: 11,
    title: "Appeals & Revisions",
    description:
      "Legal Surface specializes in appeals and revisions, focusing on challenging unfavorable court decisions to seek justice. Our team reviews trial outcomes, prepares comprehensive appeal petitions, and advocates vigorously in higher courts to overturn or modify these decisions.",

    imageSrc: "/images/pd.jpg",
    altText: "Bail Applications",
  },
  {
    id: 6,
    title: "Trial Defense",
    description:
      "Our firm offers a robust trial defense for clients facing criminal charges. We meticulously prepare and present each case, using strategic legal arguments and compelling evidence to challenge the prosecution and secure the best possible outcome through skilled representation in court.",

    imageSrc: "/images/pd.jpg",
    altText: "Bail Applications",
  },
];

export const internshipData = {
  heading: 'Internships',
  subHeading: 'As an Intern, You Will:',
  description:
    'Our internship program offers law students a unique opportunity to gain hands-on experience and learn from top legal professionals in Jammu and Kashmir. This program is designed to immerse you in the practical aspects of legal practice and provide valuable insights into the legal field.',
  tasks: [
    {
      id: 1,
      description:
        'Assist with Case Research and Legal Document Preparation: Engage in comprehensive research and support the preparation of critical legal documents, gaining practical skills that are essential for legal practice.',
    },
    {
      id: 2,
      description:
        'Draft Legal Briefs and Other Essential Documents: Develop your drafting skills by working on legal briefs and various documents, contributing directly to ongoing cases.',
    },
    {
      id: 3,
      description:
        'Observe and Participate in Client Meetings: Gain exposure to client interactions and meetings, learning how to navigate client relationships and understand client needs.',
    },
    {
      id: 4,
      description:
        'Get Practical Experience in Case Management and Courtroom Proceedings: Experience the day-to-day management of legal cases and observe courtroom proceedings, providing you with a well-rounded view of legal practice.',
    },
    
  ],
};


export const internshipData2 = {
  heading: "Legal Internship Program",
  description:
    "Our legal internship offers aspiring lawyers an opportunity to gain hands-on experience in legal research, case preparation, and client interaction under the guidance of seasoned professionals.",
  subHeading: "Internship Responsibilities:",
  tasks: [
    { id: 1, description: "Conduct legal research on various case laws." },
    { id: 2, description: "Assist in drafting legal documents and pleadings." },
    { id: 3, description: "Attend client meetings and court proceedings." },
    { id: 4, description: "Work closely with lawyers on case management." },
  ],
  qualifications: [
    {
      id: 1,
      description:
        "Enrolled in a Law Degree Program: Candidates must be currently enrolled in a law degree program to be eligible for this internship.",
    },
    {
      id: 2,
      description:
        "Strong Research and Writing Skills: A solid foundation in research and writing is crucial for performing the tasks required during the internship.",
    },
    {
      id: 3,
      description:
        "Eagerness to Learn and Contribute: We seek motivated individuals who are eager to learn, contribute, and make the most of this invaluable learning experience.",
    },
  ],
};



export const internshipData3 = {
  heading: 'Associate Positions',
  subHeading: 'As an Associate, You Will:',
  description:
    'We are seeking talented and ambitious associates to join our dynamic team. This role is ideal for individuals looking to handle complex cases and make a significant impact within a leading legal firm.',
  tasks: [
    {
      id: 1,
      description:
        'Work on a Range of Criminal and Civil Cases: Engage with diverse and challenging cases, providing legal expertise in both criminal and civil matters.',
    },
    {
      id: 2,
      description:
        'Provide Legal Counsel and Develop Case Strategies: Offer strategic legal advice and develop effective case strategies to support our clients\' interests.',
    },
    {
      id: 3,
      description:
        'Represent Clients in Court and During Negotiations: Take an active role in representing clients, advocating for their rights, and negotiating favorable outcomes.',
    },
    {
      id: 4,
      description:
        'Collaborate with Our Experienced Team of Lawyers: Work alongside a team of seasoned professionals, benefiting from their expertise and contributing to collaborative success.',
    },
  ],
  qualifications: [
    {
      id: 1,
      description:
        'Law Degree and Bar Admission: Must hold a law degree and be admitted to the bar, demonstrating the required educational and professional credentials.',
    },
    {
      id: 2,
      description:
        'Experience in Relevant Practice Areas: Previous experience in criminal or civil law is preferred, showcasing your ability to handle complex legal matters.',
    },
    {
      id: 3,
      description:
        'Strong Analytical and Advocacy Skills: Demonstrate excellent analytical abilities and strong advocacy skills essential for effective legal practice.',
    },
    {
      id: 4,
      description:
        'Commitment to Professional Growth: Show a dedication to continuous learning and professional development within the legal field.',
    },
  ],
};



export const ApplySectionData1 = {
  heading: 'Apply Now',
  description:
    'Interested candidates should submit their resume, a cover letter detailing their interest in the internship, and any relevant academic transcripts or references. For more information or to apply, please contact us at +91 9419007365 or visit our website www.legalsurface.in',
};




