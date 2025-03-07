const projects = [
  {
    title: "Portfolio Website v3",
    shortDescription: "Modern portfolio built using Next.js and TailwindCSS",
    techStack: ["Next.js", "TailwindCSS", "TypeScript", "Framer Motion"],
    bulletPoints: [
      "Designed and developed a fully responsive portfolio website.",
      "Showcases personal projects, skills, and achievements.",
      "Utilized Next.js for server-side rendering and optimized performance.",
      "Styled with TailwindCSS for modern and consistent UI.",
      "Integrated animations using Framer Motion for enhanced user experience.",
    ],
    date: "Jan 2025",
    imageUrl: "/images/2025porfolio.png",
    liveUrl: "https://redbot.pro/",
  },
  {
    title: "Model UN 2024-25",
    shortDescription: "Competing in conferences with my Model UN club.",
    techStack: ["Public Speaking", "Debate", "Team Building"],
    bulletPoints: [
      "Awards So Far:",
      "🥉 3rd Place, Churchill, Despicable Me Committee",
    ],
    date: "Dec 2024",
    imageUrl: "/images/modelun.jpg",
    liveUrl: "https://www.instagram.com/whsmun/",
  },
  {
    title: "Congressional App Challenge 2024",
    shortDescription: "Web app built for the Congressional App Challenge",
    techStack: ["Next.js", "TailwindCSS", "TypeScript"],
    bulletPoints: [
      "Developed a web app aimed at increasing recycling awareness.",
      "Built with Next.js and TailwindCSS for a responsive and modern design.",
      "Implemented interactive features to encourage user engagement.",
    ],
    date: "Dec 2024",
    imageUrl: "/images/congretionalapp.png",
    liveUrl: "https://mocorecycle.vercel.app/",
  },
  {
    title: "Computer Science Scholar Society",
    shortDescription:
      "Founded a CS club at school to attend competitions and build projects.",
    techStack: ["Public Speaking", "Leadership", "Programming"],
    bulletPoints: [
      "Founded a CS club at school to attend competitions and build projects.",
      "Planning to compete at near by universitys such as Penn and UMD",
    ],
    date: "Oct 2024",
    imageUrl: "/images/csss.jpg",
    liveUrl: "https://csssociety.net/",
  },
  {
    title: "Portfolio v2",
    shortDescription: "2nd minimalistic iteration of my portfolio website",
    techStack: ["Next.js", "TailwindCSS"],
    bulletPoints: [
      "Made a simplistic portfolio website with a focus on minimalism.",
      "Attempted to have a single json file as the database.",
      "Highlight feature was system fonts and dark mode!",
    ],
    date: "April 2024",
    imageUrl: "/images/portfoliov2.png",
    liveUrl: "https://portfolio-nu-mocha-25.vercel.app/",
  },
  {
    title: "Model UN 2023-24",
    shortDescription: "Competing in conferences with my Model UN club.",
    techStack: ["Public Speaking", "Debate", "Team Building"],
    bulletPoints: [
      "Awards:",
      "🥈 2nd Place, University of Maryland, The British Raj",
      "🥉 3rd Place, Thomas Jefferson, 3 Dynasties",
      "🥉 3rd Place, Churchill, UNEP",
    ],
    date: "Dec 2024",
    imageUrl: "/images/modelun.jpg",
    liveUrl: "https://www.instagram.com/whsmun/",
  },
  {
    title: "PokeGenerator",
    shortDescription: "AI run Pokémon Card maker",
    techStack: ["Next.js", "Firebase", "OpenAI", "Node.js"],
    bulletPoints: [
      "Enter a topic and generate a Pokémon card within 20 seconds.",
      "Integrates Firebase for backend services.",
      "Uses OpenAI to power AI-driven card creation.",
      "Deployed with modern web technologies.",
    ],
    date: "Nov 2023",
    imageUrl: "/images/palmblade.png",
    liveUrl: "https://pokegpt-mauve.vercel.app/",
  },
  {
    title: "Smoke Pred Competition",
    shortDescription: "AI Algorithm using Bio-Signals",
    techStack: ["Python", "XGBoost", "LightGBM", "Optuna"],
    bulletPoints: [
      "Placed in the top 71st percentile on Kaggle.",
      "Prediction of smoker status using bio-signals.",
      "Used XGBoost and LightGBM models.",
      "Performed hyperparameter tuning with Optuna.",
    ],
    date: "Nov 2023",
    imageUrl: "/images/smokerpred.png",
    liveUrl: "https://github.com/AyanCh0w/Smoke-Pred",
  },
  {
    title: "AI Taxi",
    shortDescription: "Reinforcement Learning Taxi Simulation",
    techStack: ["Python", "Reinforcement Learning", "Q-Learning"],
    bulletPoints: [
      "Implemented a taxi simulator using reinforcement learning.",
      "Learned about state-action-reward dynamics and Q-Learning.",
      "Trained the taxi to optimize passenger pickups and drop-offs.",
      "Explored key concepts in artificial intelligence and decision-making.",
    ],
    date: "Jul 2023",
    imageUrl: "/images/aitaxi.webp",
    liveUrl: "https://github.com/AyanCh0w/TaxiRL",
  },
  {
    title: "flashAI",
    shortDescription: "AI-powered Flashcard Maker",
    techStack: ["React", "TypeScript", "Firebase", "Authentication"],
    bulletPoints: [
      "Learned TypeScript, React & Firebase to build an app for studying.",
      "Supports Google login and anonymous accounts.",
      "Includes authentication and restricted pages.",
    ],
    date: "May 2023",
    imageUrl: "/images/flashai.webp",
    liveUrl: "https://github.com/AyanCh0w/flashAi",
  },
  {
    title: "Chat CXT",
    shortDescription: "Chatbot with Google WebScraping",
    techStack: ["GPT", "Web Scraping", "Google API"],
    bulletPoints: [
      "Combined GPT with Google web scraping for up-to-date answers.",
      "Implemented content filtering and blocklist management.",
      "Developed custom examples and demos.",
      "Beta version for testing.",
    ],
    date: "Mar 2023",
    imageUrl: "/images/chatcxt.webp",
    liveUrl: "https://github.com/AyanCh0w/ChatCXT",
  },
  {
    title: "Totaled Cars",
    shortDescription: "CNN DC-GAN Model for generating cars",
    techStack: ["Python", "TensorFlow", "Keras", "Machine Learning"],
    bulletPoints: [
      "Built a car generator using DC-GAN principles.",
      "Created a super-resolution model to enhance low-res car images.",
      "Trained with adversarial loss on car image datasets.",
      "Applied advanced deep learning techniques for image generation.",
    ],
    date: "Jul 2022",
    imageUrl: "/images/totaledcars.avif",
    liveUrl: "https://github.com/AyanCh0w/CarGenerator",
  },
  {
    title: "First Lego League (FLL) - Year 2",
    shortDescription:
      "Advanced group robotics project with improved strategies",
    techStack: ["Python", "LEGO Robotics", "Mechanical Engineering"],
    bulletPoints: [
      "Enhanced programming skills by building on previous year's experience.",
      "Implemented innovative solutions for complex challenges.",
      "Focused on teamwork and iterative design to optimize robot performance.",
      "Earned recognition for problem-solving and innovation in the state-level competition.",
    ],
    date: "May 2022",
    imageUrl: "/images/superpowerdfll.webp",
    liveUrl:
      "https://www.first-lego-league.org/en/2022-23-season/the-superpowered-season",
  },
  {
    title: "Apple WebPage Mockup",
    shortDescription: "Mockup of product page for the new iPhone 14 Pro",
    techStack: ["HTML", "CSS"],
    bulletPoints: [
      "Created a visually accurate mockup for the iPhone 14 Pro.",
      "Learned basic HTML and CSS through practical application.",
      "Responsive design principles implemented.",
    ],
    date: "Jun 2022",
    imageUrl: "/images/applemockup.webp",
    liveUrl: "https://ayanch0w.github.io/applewebpagemockup/",
  },
  {
    title: "Voice GPT-3",
    shortDescription: "GPT-3 Voice Assistant",
    techStack: ["GPT-3", "Speech Recognition", "Speech Synthesis"],
    bulletPoints: [
      "Verbal communication with GPT-3.",
      "Utilized speech synthesis for audio responses.",
      "Implemented with Python.",
    ],
    date: "Feb 2022",
    imageUrl: "/images/voicegpt.webp",
    liveUrl:
      "https://github.com/AyanCh0w/GPT3-Voice-Chat-Bot/blob/main/main.py",
  },
  {
    title: "Resnet",
    shortDescription: "CNN Model",
    techStack: ["Python", "TensorFlow", "Keras", "Machine Learning"],
    bulletPoints: [
      "Advanced CNN model for image classification.",
      "Based on the ResNet architecture paper.",
      "Implemented using TensorFlow and Keras.",
      "Optimized for large-scale image datasets.",
    ],
    date: "Nov 2021",
    imageUrl: "/images/cifar10.png",
    liveUrl: "https://github.com/AyanCh0w/ResNetModel",
  },
  {
    title: "First HTML Portfolio",
    shortDescription: "HTML webpage on custom domain",
    techStack: ["HTML", "CSS"],
    bulletPoints: [
      "Designed a personal portfolio with a responsive grid layout.",
      "Configured a custom domain and SSL certificate.",
      "Learned the basics of web hosting and domain setup.",
    ],
    date: "Jun 2021",
    imageUrl: "/images/htmlportfolio.avif",
    liveUrl: "https://bluboss101.github.io/Portfolio/",
  },
  {
    title: "First Lego League (FLL) - Year 1",
    shortDescription: "Group robotics project for Cargo Connect challenges",
    techStack: ["Scratch", "LEGO Robotics", "Team Collaboration"],
    bulletPoints: [
      "Designed and programmed a robot using LEGO robotics kits.",
      "Completed various Cargo Connect challenges focused on logistics and engineering.",
      "Collaborated with teammates to refine robot design and strategies.",
      "Achieved 10th place out of 150 participants in the regional competition.",
    ],
    date: "May 2021",
    imageUrl: "/images/cargoconnect.png",
    liveUrl: "https://bluboss101.github.io/Portfolio/FLLView.html",
  },
  {
    title: "Pygame Gravity Sim",
    shortDescription: "A gravity simulation using Pygame",
    techStack: ["Python", "Pygame"],
    bulletPoints: [
      "Developed a gravity simulation with Pygame.",
      "Implemented key features like resetting and reversing gravity.",
      "Learned basic physics and collision detection.",
      "Enhanced programming skills with Python.",
    ],
    date: "Feb 2020",
    imageUrl: "/images/python.png",
    liveUrl: "https://github.com/Bluboss101/Pygame-Gravity",
  },
];

export default projects;
