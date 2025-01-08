import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// HOME PAGE UTILS 

export const navItems = [
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "Schedule",
    link: "/schedule",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
  {
    name: "Announcements",
    link: "/announcements",
  },
  {
    name: "Sponsors",
    link: "/sponsors",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Team",
    link: "/team",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export  const Sociallinks = [
  {
    title: "Whatsapp",
    icon: "/icons/socialmedia/whatsapp.png",
    href: "#",
  },

  {
    title: "Instagram",
    icon: "/icons/socialmedia/insta.png",
    href: "#",
  },
  {
    title: "Twitter",
    icon:"/icons/socialmedia/twitter.png",
    href: "#",
  },
  {
    title: "Youtube",
    icon: "/icons/socialmedia/youtube.png",
    href: "#",
  },

  {
    title: "LinkedIn",
    icon: "/icons/socialmedia/linkedin.png",
    href: "#",
  },
  {
    title: "Facebook",
    icon: "/icons/socialmedia/facebook.png",
    href: "#",
  },
];

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


export const Events = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "/assets/home-event-images/gevent-1.jpg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: 
         " Lana Del Rey, an iconic American singer-songwriter, is celebrated for her melancholic and cinematic music style. Born Elizabeth Woolridge Grant in New York City, she has captivated audiences worldwide withher haunting voice and introspective lyrics. <br /> <br /> Her songsoften explore themes of tragic romance, glamour, and melancholia,drawing inspiration from both contemporary and vintage pop culture.With a career that has seen numerous critically acclaimed albums, LanaDel Rey has established herself as a unique and influential figure inthe music industry, earning a dedicated fan base and numerousaccolades.",
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "/assets/home-event-images/gevent-1.jpg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: 
         " Babu Maan, a legendary Punjabi singer, is renowned for his soulful voice and profound lyrics that resonate deeply with his audience. Born in the village of Khant Maanpur in Punjab, India, he has become a cultural icon in the Punjabi music industry. <br /> <br /> His songs often reflect the struggles and triumphs of everyday life, capturing the essence of Punjabi culture and traditions. With a career spanning over two decades, Babu Maan has released numerous hit albums and singles that have garnered him a massive fan following both in India and abroad.",
  },

  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "/assets/home-event-images/gevent-1.jpg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: 
         " Metallica, an iconic American heavy metal band, is renowned for their powerful sound and intense performances that resonate deeply with their audience. Formed in Los Angeles, California, they have become a cultural icon in the heavy metal music industry. <br /> <br /> Their songs often reflect themes of aggression, social issues, and personal struggles, capturing the essence of the heavy metal genre. With a career spanning over four decades, Metallica has released numerous hit albums and singles that have garnered them a massive fan following both in the United States and abroad.",
  },
  
];




// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


export const SponList = [
  {
      name: 'Sponsor 1',
      image: '/assets/sponsors/1.png'
  },
  {
      name: 'Sponsor 2',
      image: '/assets/sponsors/2.jpeg'
  },
  {
      name: 'Sponsor 3',
      image: '/assets/sponsors/3.jpeg'
  },
  {
      name: 'Sponsor 4',
      image: '/assets/sponsors/4.png'
  },
  {
      name: 'Sponsor 5',
      image: '/assets/sponsors/5.jpeg'
  },
  {
      name: 'Sponsor 6',
      image: '/assets/sponsors/6.png'
  },
  {
      name: 'Sponsor 7',
      image: '/assets/sponsors/7.jpeg'
  },
  {
      name: 'Sponsor 8',
      image: '/assets/sponsors/8.png'
  },
  {
      name: 'Sponsor 9',
      image: '/assets/sponsors/9.png'
  },
  {
      name: 'Sponsor 10',
      image: '/assets/sponsors/10.png'
  },
  {
      name: 'Sponsor 11',
      image: '/assets/sponsors/11.png'
  },
  {
      name: 'Sponsor 12',
      image: '/assets/sponsors/12.png'
  },
  {
      name: 'Sponsor 13',
      image: '/assets/sponsors/13.png'
  },
  {
      name: 'Sponsor 14',
      image: '/assets/sponsors/14.png'
  },
];



export const videoLinks: Record<number,string> = {
  2017:"xQDj8OrE0bo?si=KW575XIEyKTzBuMS",
  2018:"WU_8wcNML3M?si=JwusbaJ7TvDwrYFS",
  2019:"GlRHHi22mQg?si=XHcqcWHIqIM2z7wo",
  2023:"GtArDHgOt5A?si=WfkmoRAPhQ5t5qYY",
  2024:"WvwU3scKoAI?si=gB2kQWbVTzNk4kc7"
}; 



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


export const cardData = [
  {
    day: "Day 1",
    cards: [
      {
        imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026",
        title: "StandUps",
        description: "A Fun night with Friends.",
        location: "IIT Mandi, Auditorium",
        price: "600₹",
      },
      {
        imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dj-night-invitation-flyer-design-template-58803bfdef2b0547de0c3ef496c3a267_screen.jpg?ts=1665764068",
        title: "Pro-Night",
        description: "Experience DJ with you friends",
        location: "Hockey Ground North Campus",
        price: "500₹",
      },
      {
        imageUrl: "https://i.pinimg.com/originals/7c/12/79/7c12796de2905baf4e498d588082e170.jpg",
        title: "Dancer Hits",
        description: "Prize pool 3K||1.5K||0.7K",
        location: "North Campus,Auiditorium",
        price: "100₹",
      },
      {
        imageUrl: "https://classicgamefest.com/wp-content/uploads/2020/03/87473755_1510224229127396_8307146197110358016_o.jpg",
        title: "Gaming Mania",
        description: "Relax and play with us.",
        location: "SCEE A13-1B North Campus",
        price: "400₹",
      },
      {
        imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/89d5f123483327.56323c3f98e66.jpg",
        title: "MusicWins !",
        description: "Enjoy peaceful music living.",
        location: "IIT Mandi,North Campus",
        price: "200₹",
      },
      {
        imageUrl: "https://www.nowlucknow.com/wp-content/uploads/2022/02/PHOTO-2022-02-15-14-26-43-723x1024.jpg",
        title: "De Oasis",
        description: "Enjoy peaceful music living.",
        location: "IIT Mandi,North Campus",
        price: "200₹",
      },
    ],
  },
  {
    day: "Day 2",
    cards: [
      {
        imageUrl: "https://as1.ftcdn.net/v2/jpg/01/58/48/58/1000_F_158485851_DaiK7ZXKw1j9wf9NFdg3eKrZJD5Sfbdi.jpg",
        title: "PartyAllNight",
        description: "A Lorem ipsum dolor ore?",
        location: "IIT Mandi,South Campus",
        price: "$250",
      },
      {
        imageUrl: "https://i.pinimg.com/originals/71/23/f8/7123f8b689af3c6765abb4f2fef53768.png",
        title: "Pubg Pro",
        description: "Experience tranquility with mountain views.",
        location: "IIT Mandi, A10",
        price: "300₹",
      },
      {
        imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dj-night-invitation-flyer-design-template-58803bfdef2b0547de0c3ef496c3a267_screen.jpg?ts=1665764068",
        title: "Pro-Night",
        description: "Experience DJ with you friends",
        location: "Hockey Ground North Campus",
        price: "500₹",
      },
      {
        imageUrl: "https://i.pinimg.com/originals/7c/12/79/7c12796de2905baf4e498d588082e170.jpg",
        title: "Dancer Hits",
        description: "Prize pool 3K||1.5K||0.7K",
        location: "North Campus,Auiditorium",
        price: "100₹",
      },
    ],
  },
  {
    day: "Day 3",
    cards: [
      {
        imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/89d5f123483327.56323c3f98e66.jpg",
        title: "MusicWins !",
        description: "Enjoy peaceful music living.",
        location: "IIT Mandi,North Campus",
        price: "200₹",
      },
      {
        imageUrl: "https://classicgamefest.com/wp-content/uploads/2020/03/87473755_1510224229127396_8307146197110358016_o.jpg",
        title: "Gaming Mania",
        description: "Relax and play with us.",
        location: "SCEE A13-1B North Campus",
        price: "400₹",
      },
    ],
  },
];


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const eventcards = [
  {
    imageUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026",
    title: "StandUps",
    description: "A Fun night with Friends.",
    location: "IIT Mandi, Auditorium",
    price: "600₹",
  },
  {
    imageUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dj-night-invitation-flyer-design-template-58803bfdef2b0547de0c3ef496c3a267_screen.jpg?ts=1665764068",
    title: "Pro-Night",
    description: "Experience DJ with you friends",
    location: "Hockey Ground North Campus",
    price: "500₹",
  },
  {
    imageUrl:
      "https://i.pinimg.com/originals/7c/12/79/7c12796de2905baf4e498d588082e170.jpg",
    title: "Dancer Hits",
    description: "Prize pool 3K||1.5K||0.7K",
    location: "North Campus,Auiditorium",
    price: "100₹",
  },
  {
    imageUrl:
      "https://classicgamefest.com/wp-content/uploads/2020/03/87473755_1510224229127396_8307146197110358016_o.jpg",
    title: "Gaming Mania",
    description: "Relax and play with us.",
    location: "SCEE A13-1B North Campus",
    price: "400₹",
  },
  {
    imageUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/89d5f123483327.56323c3f98e66.jpg",
    title: "MusicWins !",
    description: "Enjoy peaceful music living.",
    location: "IIT Mandi,North Campus",
    price: "200₹",
  },
  {
    imageUrl:
      "https://www.nowlucknow.com/wp-content/uploads/2022/02/PHOTO-2022-02-15-14-26-43-723x1024.jpg",
    title: "De Oasis",
    description: "Enjoy peaceful music living.",
    location: "IIT Mandi,North Campus",
    price: "200₹",
  },
  {
    imageUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dj-night-invitation-flyer-design-template-58803bfdef2b0547de0c3ef496c3a267_screen.jpg?ts=1665764068",
    title: "Pro-Night",
    description: "Experience DJ with you friends",
    location: "Hockey Ground North Campus",
    price: "500₹",
  },
  {
    imageUrl:
      "https://i.pinimg.com/originals/7c/12/79/7c12796de2905baf4e498d588082e170.jpg",
    title: "Dancer Hits",
    description: "Prize pool 3K||1.5K||0.7K",
    location: "North Campus,Auiditorium",
    price: "100₹",
  },
  {
    imageUrl:
      "https://classicgamefest.com/wp-content/uploads/2020/03/87473755_1510224229127396_8307146197110358016_o.jpg",
    title: "Gaming Mania",
    description: "Relax and play with us.",
    location: "SCEE A13-1B North Campus",
    price: "400₹",
  },
  {
    imageUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/college-fest-design-template-5443b82b18d8f816645e035945ef4f59_screen.jpg?ts=1637021026",
    title: "StandUps",
    description: "A Fun night with Friends.",
    location: "IIT Mandi, Auditorium",
    price: "600₹",
  },
];


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const Sliderslides = [
  {
    id: 1,
    title: "First Slide",
    subtitle: "Subtitle",
    description: "Description for the first slide.",
    image: "/assets/galery-raw-images/gallery-raw-1.jpg",
  },
  {
    id: 2,
    title: "Second Slide",
    subtitle: "Subtitle",
    description: "Description for the second slide.",
    image: "/assets/galery-raw-images/gallery-raw-2.jpg",
  },
  {
    id: 3,
    title: "Third Slide",
    subtitle: "Subtitle",
    description: "Description for the third slide.",
    image: "/assets/galery-raw-images/gallery-raw-3.jpg",
  },
];


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export const teamsList = [ 
  {
    id: 'team1',
    name: 'Secretary',
    members: [
      { 
        name: 'Ayush Sinha',
        photo: '/assets/team/ayush.JPG',
        heading: 'Literary Secretary',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/ayush-sinha-iit-mandi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'instagram', link: 'https://instagram.com/cultureshock_poet' },
          { name: 'whatsapp', link: '7992323005' },
          { name: 'email', link: 'literary_secretary@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Vivek Aggarwal',
        photo: '/assets/team/vivek.jpeg',
        heading: 'Cultural Secretary',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/vivek-aggarwal-b005b125a/' },
          { name: 'instagram', link: 'https://www.instagram.com/vivekaggarwal05/' },
          { name: 'whatsapp', link: '7417899100' },
          { name: 'email', link: 'cultural_secretary@students.iitmandi.ac.in' },
        ],
      },
    ], 
  },
  {
    id: 'team2',
    name: 'Sponsorship Team ',
    members: [
      { 
        name: 'Ayan Garg',
        photo: '/assets/team/ayan.jpeg',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://linkedin.com/in/AyanGargAyanGarg' },
          { name: 'instagram', link: 'https://instagram.com/ayangarg2' },
          { name: 'whatsapp', link: '7756837945' },
          { name: 'email', link: 'ayangarg2005@gmail.com' },
        ],
      },
      { 
        name: 'Ayush Bhardwaj',
        photo: '/assets/team/ayushb.jpeg',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/ayush-bhardwaj01' },
          { name: 'whatsapp', link: '9877809383' },
          { name: 'email', link: 'b23199@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Hardeep Gupta',
        photo: '/assets/team/hardeep.jpg',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/hardeep-gupta-14ab7b337' },
          { name: 'instagram', link: 'https://instagram.com/hardeepgupta123' },
          { name: 'whatsapp', link: '9219602541' },
          { name: 'email', link: 'hardeepgupta2912@gmail.com' },
        ],
      },
    ],
  },
  {
    id: 'team3',
    name: 'Planning And Management Team',
    members: [
      { 
        name: 'Avishkar Chavan',
        photo: '/assets/team/avishkar.jpeg',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/avishkarchavan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
          { name: 'instagram', link: 'https://instagram.com/avishkar_95' },
          { name: 'whatsapp', link: '8767757524' },
          { name: 'email', link: 'avishkarchavan55@gmail.com' },
        ],
      },
      { 
        name: 'Tushar Bhati',
        photo: '/assets/team/tushar.jpeg',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/tushar-bhati-632862318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
          { name: 'instagram', link: 'https://instagram.com/tusharbhatiiii' },
          { name: 'whatsapp', link: '9870226606' },
          { name: 'email', link: 'B23104@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Sujay Ghonshetwad',
        photo: '/assets/team/sujay.jpg',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/sujay-ghonshetwad-233b89225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'instagram', link: 'https://instagram.com/itz_sujay_20' },
          { name: 'whatsapp', link: '8767430882' },
          { name: 'email', link: '20sujay04@gmail.com' },
        ],
      },
      { 
        name: 'Jaspinder kaur ',
        photo: '/assets/team/jasbinder.jpg',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/jaspinder-kaur-ba33242a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'whatsapp', link: '9780771121' },
          { name: 'email', link: 'B23264@students.iitmandi.ac.in' },
        ],
      },
    ],
  },
  {
    id: 'team4',
    name: 'Development Team',
    members: [
      { 
        name: 'Piyush Kumar',
        photo: '/assets/team/piyush.jpeg',
        socialMediaLinks: [
        ],
      },
      { 
        name: 'Pragyansh',
        photo: '/assets/team/pragyansh.png',
        socialMediaLinks: [
        ],
      },
    ],
  },
  {
    id: 'team5',
    name: 'Publicity team ',
    members: [
      { 
        name: 'Deepansha Deora',
        photo: '/assets/team/depansha.jpg',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/deepansha-deora-27b8b4280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'instagram', link: 'https://instagram.com/deepansha_05' },
          { name: 'whatsapp', link: '97823 96590 ' },
          { name: 'email', link: '23deepansha@gmail.com' },
        ],
      },
      { 
        name: 'Gourav Chaudhary ',
        photo: '/assets/team/gaurav.jpg',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/gourav-chaudhary-845a78344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'instagram', link: 'https://instagram.com/Chodry_gourav_22' },
          { name: 'whatsapp', link: '8278741047' },
          { name: 'email', link: 'b23370@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Namita Singh ',
        photo: '/assets/team/namita.jpg',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/namita-singh-b00346329' },
          { name: 'instagram', link: 'https://instagram.com/namitasingh14114' },
          { name: 'whatsapp', link: '9811197429' },
          { name: 'email', link: 'b22224@students.iitmandi.ac.in' },
        ],
      },
      { 
        name: 'Divyanshu Raj',
        photo: '/assets/team/divyanshu.jpg',
        socialMediaLinks: [
          { name: 'linkedin', link: 'https://www.linkedin.com/in/divyanshu-raj-784306329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
          { name: 'whatsapp', link: '8797003838' },
          { name: 'email', link: 'b23438@students.iitmandi.ac.in' },
          { name: 'instagram', link: 'https://instagram.com/divyanshu_raj_2004' },
        ],
      },
    ],
  },
];


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


export const faqquestions = [
  {
    id: 1,
    question: "Popular Articles",
    answer: "Details about popular articles.",
  },
  {
    id: 2,
    question: "Fix problems & request removals",
    answer: "Details about fixing problems and removals.",
  },
  {
    id: 3,
    question: "Browse the web",
    answer: "Details about browsing the web.",
  },
  {
    id: 4,
    question: "Search on your phone or tablet",
    answer: "Details about searching on your device.",
  },
];


export const announcementFaq = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------