export const slug = (value, prefix) =>
  `${prefix}-${value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;

export const utilityLinks = [
  { label: "Healthy Living", href: "#news" },
  { label: "About us", action: "about" },
  { label: "News", href: "#news" },
  { label: "Careers", action: "careers" },
  { label: "Contact", href: "#contact" },
];

export const mainNav = [
  { id: "home", label: "Home", href: "#top" },
  {
    id: "patients",
    label: "Patients & Visitors",
    links: [
      { label: "Pay a bill", action: "bill" },
      { label: "Departments", href: "#departments" },
      { label: "Consultants", href: "#consultants" },
      { label: "Contact", href: "#contact" },
    ],
  },
  { id: "departments", label: "Departments & Services", href: "#departments" },
  { id: "limerick", label: "Limerick", action: "limerick" },
  { id: "consultants", label: "Consultants", href: "#consultants" },
  { id: "gp", label: "GP Information", action: "gp" },
];

export const departments = [
  "Cancer Care",
  "Cardiology",
  "Orthopaedics",
  "Beacon for Kids",
  "Radiology",
  "Women's Centre",
  "Endoscopy",
  "Urology",
  "HealthCheck",
  "Ear, Nose & Throat (ENT)",
  "Sports Medicine",
  "Surgical Day Unit",
];

export const moreDepartments = [
  "Breast Centre",
  "Dermatology",
  "Gastroenterology",
  "Intensive Care",
  "Neurology",
  "Pain Medicine",
  "Physiotherapy",
  "Respiratory Medicine",
  "Vascular Surgery",
];

export const services = [
  "Blood Tests (Phlebotomy)",
  "Radiotherapy (Radiation Oncology)",
  "Diabetes Centre",
  "Neurosurgery",
  "Beacon for Kids: Surgical Services",
  "Beacon for Kids: Outpatient",
  "Hand Surgery",
  "Medical Oncology",
  "Laboratory",
];

export const moreServices = [
  "Physiotherapy",
  "Pharmacy",
  "Pain Medicine",
  "Breast Surgery",
  "Colorectal Surgery",
  "Dietetics",
  "Audiology",
  "Critical Care",
];

export const slides = [
  {
    id: "cardiology",
    icon: "heart",
    kicker: "Rapid Access Cardiology",
    badges: ["Consultant-led", "Private clinic"],
    points: [
      "Consultant cardiology care for people who need a specialist opinion.",
      "The Rapid Access Cardiology Clinic is featured in patient feedback on this page.",
    ],
    phone: "01 293 7575",
    question: "Do you need to see a heart specialist?",
    answer:
      "Cardiology consultants at Beacon Hospital provide private heart care, including interventional and non-invasive services.",
  },
  {
    id: "cancer",
    icon: "ribbon",
    kicker: "Cancer Care",
    badges: ["Multidisciplinary", "Dedicated unit"],
    points: [
      "Cancer care brings together consultants, radiotherapy, and medical oncology.",
      "Department pages outline the service, the consultants involved, and how to get in touch.",
    ],
    phone: "01 293 7575",
    question: "Looking for cancer care?",
    answer:
      "Cancer Care covers radiotherapy and medical oncology, with consultant teams and a clear path from enquiry to treatment.",
  },
  {
    id: "hip",
    icon: "joint",
    image: "/images/anatomy-hip-knee.jpg",
    kicker: "Rapid Access OA Hip & Knee Service",
    badges: ["Patient consult - 1 week", "Surgery - 1 month"],
    points: [
      "Ireland's fastest access to private OA hip and knee consult and surgical services.",
      "Specifically for patients suffering from Hip or Knee Osteoarthritis.",
    ],
    phone: "01 293 7575",
    question: "Are you suffering from Hip or Knee Osteoarthritis?",
    answer:
      "We now offer a Rapid Access Hip and Knee Service to patients suffering from Hip or Knee Osteoarthritis. Patients can be seen by a consultant within one week and if surgery is required this can be arranged within the month.",
  },
  {
    id: "womens",
    icon: "care",
    kicker: "Women's Centre",
    badges: ["Consultant-led", "Women's Centre"],
    points: [
      "Consultant gynaecology care is based in the Women's Centre.",
      "Service pages list the consultants involved and how to make an enquiry.",
    ],
    phone: "01 293 7575",
    question: "Looking for women's health care?",
    answer:
      "The Women's Centre brings consultant gynaecology together with the wider hospital team.",
  },
  {
    id: "emergency",
    icon: "plus",
    kicker: "Emergency Department",
    badges: ["Private emergency care", "Call 112 or 999 if life is at risk"],
    points: [
      "The emergency department is for people who need urgent private hospital care.",
      "If someone is seriously unwell, call 112 or 999 before travelling.",
    ],
    phone: "112",
    phoneLabel: "112 or 999",
    question: "Do you need emergency care?",
    answer:
      "For a life-threatening emergency, call 112 or 999. The emergency department provides private urgent care at the hospital.",
  },
];

export const consultants = [
  {
    name: "Ms Tafadzwa Mandiwanza",
    role: "Consultant Neurosurgeon",
    tags: ["Neurosurgery", "Beacon Brain Institute"],
    image: "/images/consultant-neurosurgeon.jpg",
    bio: "Consultant neurosurgeon with the Beacon Brain Institute.",
  },
  {
    name: "Dr Barry Hennigan",
    role: "Consultant Interventional Cardiologist",
    tags: ["Cardiology", "Non-invasive Cardiology"],
    image: "/images/consultant-cardiologist.jpg",
    bio: "Interventional cardiologist covering cardiology and non-invasive cardiology.",
  },
  {
    name: "Dr Saboohi Tariq",
    role: "Consultant Gynaecologist",
    tags: ["Women's Centre"],
    image: "/images/consultant-gynaecologist.jpg",
    bio: "Consultant gynaecologist based in the Women's Centre.",
  },
  {
    name: "Ms Phoebe Roche",
    role: "Consultant Otolaryngologist",
    tags: ["Ear, Nose & Throat (ENT)"],
    image: "/images/consultant-ent.jpg",
    bio: "Consultant otolaryngologist for ear, nose and throat care.",
  },
];

export const stories = [
  {
    date: "September 24th 2024",
    dateTime: "2024-09-24",
    title: "Beacon Hospital & Clancy Mark Topping Out Of €100m Expansion",
    excerpt:
      "A key construction milestone has been reached on Beacon Hospital's €100 million expansion, with the new phase of the build marked on site.",
    image: "/images/news-expansion.jpg",
  },
  {
    date: "September 16th 2024",
    dateTime: "2024-09-16",
    title:
      "Beacon Hospital opens Ireland's first private Neuro-Interventional Radiology Suite",
    excerpt:
      "Beacon Hospital has announced the opening of our new Neuro-Interventional Radiology (Neuro-IR) Suite, establishing the service at the hospital.",
    image: "/images/news-radiology.jpg",
  },
  {
    date: "July 18th 2024",
    dateTime: "2024-07-18",
    title:
      "NEW! Official Opening of Ireland's First Neurovascular Hybrid Theatre in a Private Hospital",
    excerpt:
      "Beacon Hospital opens Ireland's first neurovascular hybrid theatre in a private hospital, Beacon Hospital.",
    image: "/images/news-theatre.jpg",
  },
];

export const testimonial = {
  quote:
    "Grateful and thankful to all the staff at the Rapid Access Cardiology Clinic. Thank you for the wonderful care and your personal attention. You have gone above and beyond on several occasions. You are much appreciated. I feel I chose the best place and best doctor possible. Thank you.",
  name: "Mark",
  image: "/images/testimonial-mark.jpg",
};
