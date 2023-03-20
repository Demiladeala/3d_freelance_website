import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    Uiwebsite,
    foodapp,
    greenwebsite,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Hire talents"
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Ui/Ux designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Oluwademilade Ala",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Starbucks is a coffee company. I have designed the Landing page here & working on their Mobile application. Starbucks allows users to navigate freely and find products at discounts. Anyone can get the kind of coffee they want through the platform..",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Ishamel faraq",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Tesla is an American multinational automotive and clean energy company headquartered in Austin, Texas. Tesla designs and manufactures electric vehicles (electric cars and trucks), battery energy storage from home to grid-scale, solar panels.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "David Aspire",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Shopify Inc. is a Canadian multinational e-commerce company headquartered in Ottawa, Ontario. Shopify is the name of its proprietary e-commerce platform for online stores and retail point-of-sale systems. The Shopify platform offers online retailers a suite of services including payments",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Chris steve",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Meta Platforms, Inc., doing business as Meta and formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California. The company owns Facebook, Instagram, and WhatsApp, among other products and services",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Great work; I've collaborated with him before and will do so again! Definitely recommend!",
      name: "Brad hussey",
      designation: "CFO",
      owner:'Paul George',
      company: "Html Udemy",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who is as invested in their clients' success as Seth is.",
      name: "Temiloluwa ala",
      designation: "COO",
      owner:'Seth Curry',
      company: "The Led Lead",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Ifeoluwa is clearly a brilliant product designer who excels in his profession as a UI UX designer.",
      name: "Derrick Wang",
      owner:'Taiwo Ifeoluwa',
      designation: "CTO",
      company: "Food Merch",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ui/Ux Design",
      owner:
        "Taiwo Ifeoluwa",
      star: "⭐ 5.00",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Uiwebsite,
      source_code_link: "https://github.com/Demiladeala",
    },
    {
      name: "Mobile App Design",
      owner:
        "Paul George",
      star: "⭐ 5.00",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: foodapp,
      source_code_link: "https://github.com/Demiladeala",
    },
    {
      name: "Website Design",
      owner:
        "Zion React",
      star: "⭐ 5.00",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: greenwebsite,
      source_code_link: "https://github.com/Demiladeala",
    },
    {
      name: "Car Rent",
      owner:
        "Seth Curry",
      star: "⭐ 5.00",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Demiladeala",
    },
    {
      name: "Trip Guide",
      owner:
        "Jimi Hendrix",
      star: "⭐ 5.00",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Demiladeala",
    },
    {
      name: "Job IT",
      owner:
        "Paul Gilbert",
      star: "⭐ 5.00",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Demiladeala",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };