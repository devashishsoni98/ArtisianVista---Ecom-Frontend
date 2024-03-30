const stationaryData = [
    {
      id: "A",
      title: "Sketch pens",
      description: "Unleash your creativity with our exciting 20-shade sketch pen set! Featuring a vibrant range of colors, this set offers everything you need to bring your artistic vision to life. Plus, get a complimentary Glostix for adding a touch of shine to your artwork!",
      image: "https://images.app.goo.gl/iZwHRjUAJgyEjFW88",
      keyFeatures: [
        "20 Unique Shades: Explore a diverse color palette to create stunning artwork.",
        "High-Quality Pigments: Experience rich color saturation and smooth laydown.",
        "Versatile Tips: Suitable for various techniques, from fine detailing to bold strokes.",
        "Free Glostix Included: Add a touch of shimmer and dimension to your art."
      ]
    },
    {
      id: "B",
      title: "Blue Ball point pen",
      description: "Keep your thoughts flowing smoothly with our dependable blue ballpoint pen. This everyday essential delivers clean, consistent lines and comfortable writing, making it a perfect choice for note-taking, journaling, or everyday tasks.",
      image: "https://images.app.goo.gl/efubmdcyUwQpwVoS8",
      keyFeatures: [
        "Classic blue ink for clear and legible writing.",
        "Smooth-flowing ballpoint ink for effortless writing experience.",
        "Comfortable grip for extended use",
        "Reliable ink cartridge for consistent performance."
      ]
    },
    {
      id: "C",
      title: "Black Ball point pen",
      description: "Never be caught without a writing tool! Our black ballpoint pen is your reliable companion for everyday tasks. This classic design delivers crisp, black lines and a smooth writing experience, making it perfect for anything from note-taking and signing documents to jotting down quick ideas.",
      image: "https://images.app.goo.gl/W5UmUCiFDu2b2xgc9",
      keyFeatures: [
        "Bold black ink for clear and professional writing",
        "Smooth-flowing ballpoint ink for effortless writing comfort",
        "Comfortable grip for extended use",
        "Dependable ink cartridge for consistent performance"
      ]
    },
    {
      id: "D",
      title: "Highlighter pens",
      description: "Highlight your ideas with a touch of softness! This set of 6 pastel highlighters offers a beautiful range of gentle colors that won't overpower your notes. Perfect for studying, bullet journaling, or adding subtle emphasis, these highlighters will brighten your work in style.",
      image: "https://images.app.goo.gl/9Y3BtBrEVmEJVK1K6",
      keyFeatures: [
        "Set of 6 Pastel Shades: Explore a delightful range of soft colors for gentle highlighting.",
        "Clear Highlighting: Transparent ink allows you to see your text clearly beneath the highlight.",
        "Fast-Drying Formula: Avoid smudging and get back to writing quickly.",
        "Chisel Tip: Provides versatility for both broad highlighting and fine underlining."
      ]
    },
    {
      id: "E",
      title: "Notebooks",
      description: "Take your note-taking to the next level with our king-size notebook. Featuring 120 expansive pages, this notebook offers ample space for capturing your thoughts, ideas, and creative projects.",
      image: "https://images.app.goo.gl/S7XxCih3hohcqS3P9",
      keyFeatures: [
        "King-Size Pages (24 cm x 18 cm): Enjoy a generous writing surface for detailed notes, diagrams, or mind maps.",
        "120 Pages: Provides ample space for all your notes and projects.",
        "High-Quality Paper: Smooth pages for a pleasurable writing experience."
      ]
    },
    {
      id: "F",
      title: "Oil Pastel colours",
      description: "Elevate your artwork with the dazzling color power of our 24-shade vibrant oil pastels! This set bursts with a spectrum of rich, intensely pigmented colors, designed to ignite your artistic expression and bring your ideas to life with stunning vibrancy.",
      image: "https://images.app.goo.gl/8gXoN9X9QJeNThhQ7",
      keyFeatures: [
        "24 Vibrant Shades: Unleash your creativity with a vast palette of bold, eye-catching colors.",
        "Superior Pigmentation: Experience exceptional color saturation for artwork that pops.",
        "Smooth Blending: Create seamless color transitions and achieve stunning effects.",
        "Soft Texture: Glide effortlessly across the page for easy application and layering."
      ]
    },
    {
      id: "G",
      title: "Pencil",
      description: "Sharpen your skills and erase your mistakes with this convenient all-in-one pencil kit! Perfect for students, artists, or anyone who loves the classic feel of a pencil, this kit has everything you need to get started.",
      image: "https://images.app.goo.gl/53Z4a65RjQXZxDF67",
      keyFeatures: [
        "Pencil with Eraser: The convenient eraser at the back lets you fix mistakes quickly and easily.",
        "Bonus Sharpener: Keep your pencil sharp throughout its life with the included sharpener.",
        "Free Eraser: The extra eraser ensures you always have a clean writing experience."
      ]
    },
    {
      id: "H",
      title: "Erasers",
      description: "Sparkly and oh-so-functional, this adorable set of 5 unicorn erasers is a must-have for any young artist, writer, or unicorn enthusiast!",
      image: "https://www.tinyminymo.com/cdn/shop/products/SL0081TM4_250x250@2x.jpg?v=1601176225",
      keyFeatures: [
        "Enchanted Designs: Each eraser boasts a magical unicorn design in a variety of fun colors and shapes, making every erase session delightful.",
        "Sparkly & Effective: Made from high-quality, latex-free material, these erasers gently remove pencil marks without damaging your paper, keeping your work pristine.",
        "Durable & Long-Lasting: These erasers are built to last, ensuring countless magical erasing adventures.",
        "The Perfect Gift: This delightful set makes a wonderful gift for birthday parties, classroom rewards, or just to add a touch of magic to any pencil case.",
        "Safe for Young Artists (Latex-Free Material): Made with high-quality, latex-free material, these erasers are gentle on skin and perfect for young artists."
      ]
    },
    {
      id: "I",
      title: "Sharpener",
      description: "Make homework time a fry-tastic experience with this set of playful French Fry Sharpeners! Perfect for any kid who loves art, writing, or, well, french fries!",
      image: "https://m.media-amazon.com/images/I/510mU5E4x0L.jpg",
      keyFeatures: [
        "Fun & Functional: Shaped like everyone's favorite fry, these sharpeners add a touch of whimsy to pencil sharpening, making it a fun and engaging experience for kids.",
        "Sharpens Like a Pro: Despite their playful design, these sharpeners feature a high-quality blade that efficiently sharpens pencils, ensuring smooth writing and happy kids.",
        "Easy to Use: Designed for small hands, these sharpeners are simple and safe for kids to use independently.",
        "Durable & Long-Lasting: Made from sturdy plastic, these sharpeners can handle even the most enthusiastic sharpeners.",
        "Compact & Portable: The small size makes them perfect for slipping into a pencil case or backpack for on-the-go sharpening needs."
      ]
    },
    {
      id: "J",
      title: "Fountain Pen",
      description: "Experience the beauty and warmth of natural writing with the Wooden Bamboo Fountain Pen. This unique pen combines eco-friendly design with exceptional writing performance, making it a perfect choice for nature lovers and pen aficionados alike.",
      image: "https://m.media-amazon.com/images/I/515sXTO5QkL.AC_UF1000,1000_QL80.jpg",
      keyFeatures: [
        "Natural Beauty: Crafted from genuine bamboo, each pen boasts a unique wood grain pattern, making it a one-of-a-kind writing instrument.",
        "Lightweight Comfort: The smooth, lightweight bamboo construction provides a comfortable and balanced grip for extended writing sessions.",
        "Smooth Ink Flow: The high-quality nib ensures a consistent and satisfying ink flow, allowing you to express yourself with effortless strokes.",
        "Eco-Conscious Choice: Made from a sustainable and renewable resource, the bamboo construction makes this pen an environmentally friendly option.",
        "Unique Gift Idea: The natural beauty and functionality of this pen make it a thoughtful and memorable gift for any writer or nature enthusiast."
      ]
    }
  ];

  export default stationaryData;
