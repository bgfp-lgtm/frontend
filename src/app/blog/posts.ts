export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  image: string;
};

export const posts: BlogPost[] = [
  {
    slug: "marks-and-spencer-london-campaign",
    title: "Behind the Scenes: MARKS AND SPENCER LONDON Campaign",
    excerpt:
      "A look at creative development, production design, and post flow for our recent brand film.",
    date: "2025-09-11",
    content:
      "We partnered with the brand to craft a refined visual language, from pre‑viz to delivery. Our team led casting, location, and lighting design to shape a premium aesthetic. In post, we streamlined editorial, color, and finishing to meet multi‑platform deliverables.",
    image:
      "https://images.unsplash.com/photo-1757301310756-b092d8bea774?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "carlsberg-smooth-soda-launch",
    title: "Launching Carlsberg Smooth Soda",
    excerpt:
      "From concept to cut-downs—our integrated production and marketing approach for a beverage launch.",
    date: "2025-08-28",
    content:
      "We developed campaign concepts, executed principal photography, and delivered social-first edits. Our workflow emphasized modular scenes, enabling rapid variant creation for different channels.",
    image:
      "https://images.unsplash.com/photo-1757301310756-b092d8bea774?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "kia-motors-performance-film",
    title: "KIA MOTORS: Performance Film",
    excerpt:
      "Cinematography, motion, and sound design to communicate power and control.",
    date: "2025-07-19",
    content:
      "Shot with dynamic camera rigs and LED lighting to accent body lines, the film blends practical effects with precise color to reinforce the vehicle's character.",
    image:
      "https://images.unsplash.com/photo-1757301310756-b092d8bea774?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


