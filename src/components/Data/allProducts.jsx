const allProducts = [
    {
      id: "A",
      title: "Women's Lowers",
      description:
        "Enhance your comfort and style with our versatile women's lowers. Crafted from cotton blend, these lowers offer a soft, breathable feel that moves effortlessly with you. They provide a functional and flattering fit. Perfect for lounging, yoga, workouts, or everyday wear.",
      image: "https://inwear.in/wp-content/uploads/2020/05/LL-11GRY.jpeg",
      size: ["XS", "S", "L", "XL"],
      color: "grey",
      keyFeatures: [
        "Cotton for softness and breathability",
        "Two pockets for convenient storage",
        "Versatile style for various activities",
        "Available in a range of colors and sizes to suit your preference",
      ],
    },
    {
      id: "B",
      title: "Men's Lowers",
      description:
        "Elevate your comfort and mobility with our men's lowers. Made from cotton blend, these lowers provide a comfortable, breathable feel that moves with you. They offer both functionality and a flattering fit.",
      image: "https://www.montecarlo.in/cdn/shop/products/223061522-1-38_1.jpg?v=1702638317&width=1100",
      size: ["XS", "S", "L", "XL"],
      color: "black",
      keyFeatures: [
        "Cotton blend for softness and breathability",
        "Two pockets for convenient storage",
        "Versatile style for various activities",
        "Available in a range of sizes to suit your preference",
      ],
    },
    {
      id: "C",
      title: "Women's T-Shirt",
      description:
        "Elevate your everyday style with our women's t-shirt. Crafted from cotton blend for a soft and breathable feel, this t-shirt moves effortlessly with you. Featuring a round neck and short sleeve design, it offers a comfortable and flattering fit. Perfect for casual wear, layering, or workouts, this t-shirt is a versatile addition to your wardrobe.",
      image: "https://images.glowroad.com/faceview/ce/g9h/fd/a9d/imgs/ef7d6391-3a51-41bc-aec4-3bcf970f40bf_3536724-xlgn400x400.jpg?productId=P-23557741",
      size: ["XS", "S", "L", "XL"],
      color: "white",
      keyFeatures: [
        "Cotton blend for softness and breathability",
        "Round neckline with short sleeves design for a comfortable fit for summers",
        "Versatile style for various activities",
        "Available in a range of sizes to suit your preference",
      ],
    },
    {
      id: "D",
      title: "Men's T-Shirt",
      description:
        "Upgrade your casual look with our men's t-shirt. Made from cotton blend fabric for softness and breathability, this t-shirt moves comfortably with you. Featuring a round neckline and short sleeve design, it provides a relaxed yet flattering fit. Ideal for everyday wear, layering, or workouts, this t-shirt is a versatile wardrobe essential.",
      image: "https://img0.junaroad.com/uiproducts/19492383/zoom_0-1678427235.jpg",
      size: ["XS", "S", "L", "XL"],
      color: "Mustard",
      keyFeatures: [
        "Cotton blend for softness and breathability",
        "Polo neck and short sleeve design for a comfortable fit",
        "Versatile style for various activities",
        "Available in a range of sizes to suit your preference",
      ],
    },
    {
      id: "E",
      title: "Women's Shirt",
      description:
        "Impeccably tailored with cotton fabric, the button-down shirt offers a polished look for any occasion. This versatile top ensures a perfect fit as it is available in various sizes.",
      image: "https://www.dhresource.com/webp/m/0x0/f2/albu/g21/M00/C5/F7/rBVaqmB6YCuAJKWfAAEmVt-fq0s495.jpg",
      size: ["XS", "S", "L", "XL"],
      color: "off white",
      keyFeatures: [
        "Wrinkle-resistant fabric for easy care",
        "Breathable material for all-day comfort",
        "Flattering V neck style for a polished look",
      ],
    },
    {
      id: "F",
      title: "Men's Shirt",
      description:
        "Elevate your workday wardrobe with this pure cotton shirt. Featuring a classic fit and a collar, this shirt offers timeless style and comfort. This wardrobe essential comes in different sizes to ensure a perfect fit.",
      image: "https://turtle.in/cdn/shop/products/1_e01cfaec-cd09-4aec-a3be-310e33d30374.jpg?v=1669886220",
      size: ["XS", "S", "L", "XL"],
      color: "off white",
      keyFeatures: [
        "Machine-washable for easy care",
        "Durable fabric for long-lasting wear",
      ],
    },
    {
      id: "G",
      title: "Jeans for Women",
      description:
        "Elevate your everyday look with our black straight-fit jeans. Featuring a universally flattering straight leg silhouette, these jeans offer unmatched comfort and versatility.",
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/23688086/2023/8/3/bcf17f3a-42a7-427e-923a-3e98b9504fc41691062225411-Calvin-Klein-Jeans-Women-Jeans-3941691062224907-1.jpg",
      size: ["XS", "S", "L", "XL"],
      color: "black",
      keyFeatures: [
        "Classic black wash for timeless style",
        "Straight-leg cut that flatters all body types",
        "Comfortable, everyday denim",
      ],
    },
    {
      id: "H",
      title: "Jeans for Men",
      description:
        "Men's blue slim fit mid-wash jeans. Comfortable fabric for long time wear. This wardrobe essential comes in different sizes to give you a perfect fit.",
      image: "https://imagescdn.planetfashion.in/img/app/product/7/740045-8290260.jpg?auto=format&w=494.40000000000003",
      size: ["XS", "S", "L", "XL"],
      color: "blue",
      keyFeatures: [
        "Men's blue slim fit mid-wash jeans",
        "Comfortable and stylish",
        "Perfect for everyday wear",
      ],
    },
    {
      id: "I",
      title: "Hoodie for Women",
      description:
        "Crafted for comfort and effortless style, our women's hoodie is a must-have for your wardrobe.",
      image: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/33c78cffd4320c60102b5feae4102b30.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
      size: ["XS", "S", "L", "XL"],
      color: "solid grey",
      keyFeatures: [
        "Soft and cozy fleece for ultimate comfort",
        "Relaxed fit for a flattering silhouette",
        "Kangaroo pocket for essentials and hand warmth",
        "Drawstring hood for adjustable warmth",
      ],
    },
  
      {
      id: "J",
      title: "Hoodie for Men",
      description:
        "Upgrade your casual look with our premium men's hoodie, designed for both comfort and style. Crafted from ultra-soft fleece, this hoodie offers unparalleled comfort that you'll want to live in.",
      image: "https://assets.ajio.com/medias/sys_master/root/20231005/tZy3/651ecd34ddf779151921b790/-473Wx593H-443018874-jetblack-MODEL.jpg",
      size: ["XS", "S", "L", "XL"],
      color: "black",
      keyFeatures: [
        "Ultra-soft fleece for unparalleled comfort",
        "Drawstring hood for adjustable warmth",
        "Kangaroo pocket for convenient storage",
        "Ribbed cuffs and hem for a clean, polished look",
        "Versatile design for layering or wearing on its own",
      ],
    },
    {
      id: "K",
      title: "Primer",
      description: "Create the perfect base for your makeup with our innovative primer. This lightweight formula smoothens skin texture, minimizes pores, and controls shine for a long-lasting, flawless finish.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1lfiDntyeMsHIeFpkKuov6nTuzToStk5YuPF9bX6MFYZQQMOppBdmEhFnwQzhFXiftoI&usqp=CAU",
      keyFeatures: [
        "Smooths skin texture for effortless makeup application.",
        "Minimizes pores for a refined appearance.",
        "Controls shine for a long-lasting matte finish.",
        "Creates a perfect canvas for flawless makeup."
      ]
    },
    {
      id: "L",
      title: "Kajal",
      description: "Elevate your eye look with the timeless allure of black kajal. This eyeliner pencil delivers intense color payoff in a single swipe, creating dramatic definition for a variety of eye looks.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2gN3N8rcFWD2C6m-tHxcoDz7Il4XWXWRCUPZFXzS8-ecgwjReSmauYzVAXfPEvcoYQv4&usqp=CAU",
      keyFeatures: [
        "Deep, rich black color for intense definition.",
        "Long-lasting formula for smudge-proof wear.",
        "Versatile application - tightlining, eyeliner flicks, or smoky eyes.",
        "Soft, easy-to-blend texture for comfortable wear."
      ]
    },
    {
      id: "M",
      title: "Eyeliner",
      description: "Achieve a variety of eye-defining looks with our long-lasting black eyeliner. This versatile eyeliner offers precise application and bold color payoff to create dramatic or everyday looks.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudJIZEatRaKUjyOjsswT5-6vl0duHco_zXXq931wAufew3Is418nZMLAHZlf-hhqqgDc&usqp=CAU",
      keyFeatures: [
        "Intense black color for striking definition.",
        "Precise application for eyeliner wings, cat eyes, or tightlining.",
        "Long-lasting formula for all-day wear.",
        "Pen fine tip liner for your desired look."
      ]
    },
    {
      id: "N",
      title: "Compact powder",
      description: "Achieve a natural, shine-free look with our compact powder formulated for Indian skin tones. This lightweight powder offers buildable coverage to even skin tone, control shine, and minimize the appearance of pores, all while complementing your warm undertones.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW2NwUKxSyt3NJyFx77IvOe1bwsEk7QaGk0ccYQ2pzAP0IVGk7tJIgFN-UoQi0NekHFYg&usqp=CAU",
      keyFeatures: [
        "Mattifying formula for shine control throughout the day.",
        "Buildable coverage for a flawless, natural look.",
        "Suitable for a variety of Indian skin tones (fair, wheatish, dusky) with warm undertones."
      ]
    },
    {
      id: "O",
      title: "Blush",
      description: "Indulge in a pop of color with our luxurious matte blush. This ultra-blendable formula delivers a natural flush that flatters all skin tones, leaving a soft, velvety finish that lasts all day.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqUBvZzB0Bv9P12LcBQBQQNl6vLSHhF7ZgjCH61h1IvyVb-gC9QCnqXXkyXQwbJkWwo1U&usqp=CAU",
      keyFeatures: [
        "Richly pigmented for a buildable, natural flush.",
        "Velvety-matte finish for a flawless, non-cakey look.",
        "Flattering for a variety of skin tones.",
        "Long-lasting formula that resists fading throughout the day."
      ]
    },
    {
      id: "P",
      title: "Lipstick",
      description: "Embrace a touch of timeless elegance with our pink rose lipstick. This universally flattering shade offers the perfect blend of pink and rose, adding a touch of delicate color to your lips.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTne82usmqxO0Xc13QkenadvZkXel3wQSUeLjvfFALPnKT1uehqeIGBO4w3xxx9WtLx4Es&usqp=CAU",
      keyFeatures: [
        "Pink rose shade that complements various skin tones.",
        "Matte formula for comfortable wear.",
        "Provides buildable color for a sheer look."
      ]
    },
    {
      id: "Q",
      title: "Highlighter",
      description: "Elevate your complexion with our versatile 3-shade highlighter palette. This all-in-one compact features a range of complementary shades to sculpt, define, and illuminate your features for a radiant, multi-dimensional glow.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3K5uGz5J2xaEc2I_InnK8Da0ZnRMRb1a6E6t6PrD6CYtabPQ03jfuf5yaAuKOBzO56Yo&usqp=CAU",
      keyFeatures: [
        "Three complementary shades: Highlight (lightest shade), Glow (medium shade), and Beam (deepest shade) - allows for customization and caters to various skin tones.",
        "Buildable formula for a natural or dramatic highlight.",
        "Silky smooth texture for seamless blending.",
        "Ultra-pigmented for a luminous, long-lasting glow."
      ]
    },
    {
      id: "R",
      title: "Mascara",
      description: "Flaunt your most dramatic lashes with our high-performance mascara. This lash-loving formula delivers everything you desire – dramatic volume, incredible length, or flawless definition – to create showstopping eyes.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMPGyqzOgqBeWO2CcMFM1SHsMG-c1Uof-lXS6hr87Eyf1E7ZvxeikWPvcAjDmOdnex2A&usqp=CAU",
      keyFeatures: [
        "Volumizing: Creates a full, feathery lash look for ultimate impact.",
        "Lengthening: Elongates and defines lashes for a wide-eyed, glamorous look.",
        "Defining: Separates and coats each lash for a natural, clump-free finish.",
        "Long-lasting: Smudge-proof and waterproof formula for all-day wear."
      ]
    },
    {
      id: "S",
      title: "Washing machine",
      description: "Upgrade your laundry routine with the sleek and efficient design of this fully automatic front load washing machine. This 8kg capacity machine is perfect for medium-sized households, offering ample space for your weekly laundry needs.",
      image: "https://m.economictimes.com/thumb/msid-103773463,width-1200,height-1200,resizemode-4,imgsize-135474/6-best-8-kg-fully-automatic-washing-machines.jpg",
      keyFeatures: [
        "8kg Capacity: Wash clothes for the whole family with ease.",
        "Front Load Design: Enjoy a space-saving design that fits seamlessly into your laundry area.",
        "Fully Automatic: Simply select a cycle and let the machine handle the rest, from washing to spinning.",
        "2 Year Comprehensive Warranty: Enjoy peace of mind with comprehensive coverage for the machine itself.",
        "10 Year Motor Warranty: Experience long-lasting performance with a decade of warranty on the motor."
      ],
      additionalPoints: [
        "Highly Rated Performance: This washing machine boasts a user rating of 4.1 stars, making it a customer favorite."
      ]
    },
    {
      id: "T",
      title: "Laptop",
      description: "Unleash your productivity and creativity with this feature-packed laptop. Combining a sleek metal design with powerful specs, this machine is built to handle your everyday tasks and keep you connected on the go.",
      image: "https://zebronics.com/cdn/shop/files/Laptop_Banner_800_X_1067_Mobile.jpg?v=1695446880&width=800",
      keyFeatures: [
        "Premium Metal Body: Experience a touch of sophistication with a durable and stylish metal chassis.",
        "15.6 Inch 1080p Vibrant IPS Display: Immerse yourself in stunning visuals with a bright and clear IPS display, perfect for watching movies, editing photos, or working on presentations.",
        "Fingerprint Sensor: Log in securely and conveniently with the integrated fingerprint sensor.",
        "65W Type-C Charger: Power up your laptop quickly and efficiently with the included 65W Type-C charger.",
        "Up to 10 Hours Battery Backup: Stay productive all day long with a long-lasting battery that lets you work unplugged for extended periods."
      ],
      additionalPoints: [
        "Ideal for Students, Professionals, and Content Creators.",
        "Processor: 11th Gen Intel Core i5 for a more technical audience.",
        "RAM and Storage: 16GB RAM, 512GB SSD to give users an idea of multitasking ability and storage space.",
        "Operating System: Windows 11 for compatibility purposes."
      ]
    },
    {
      id: "U",
      title: "Sneakers for women",
      description: "Move through your day in style and comfort with our collection of women's sneakers. Offering a perfect blend of fashion and function, these sneakers are ideal for everyday wear, workouts, or weekend adventures.",
      image: "https://assets.ajio.com/medias/sys_master/root/20230412/0vqB/6436552c711cf97ba71c218e/-473Wx593H-469477991-white-MODEL2.jpg",
      keyFeatures: [
        "Stylish designs to complement your everyday look",
        "Comfortable cushioning for all-day wear",
        "Supportive soles for stability"
      ]
    },
    {
      id: "V",
      title: "Sneakers for men",
      description: "Level up your footwear game with our collection of men's sneakers. Whether you're hitting the gym, running errands, or exploring the city, these sneakers offer the comfort, style, and versatility you need for everyday activities.",
      image: "data:image/jpeg;base64,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",
      keyFeatures: [
        "Durable materials for long-lasting wear",
        "Comfortable designs for all-day wear",
        "Stylish options to complement your casual look"
      ]
    },
    {
      id: "W",
      title: "Heels for women",
      description: "Step into sophistication with our collection of women's heels sandals. Perfect for adding a touch of glamour to any outfit.",
      image: "data:image/jpeg;base64,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",
      keyFeatures: [
        "Flattering heel heights for style and comfort",
        "Supportive footbeds for all-day wear",
        "Versatile styles for dressy or casual occasions"
      ]
    },
    {
      id: "X",
      title: "Sandals for men",
      description: "Hit the beach, conquer the city, or simply relax in style with our collection of men's sandals. Designed for comfort and versatility, these sandals are your perfect companions for warm weather adventures.",
      image: "https://images.jdmagicbox.com/quickquotes/images_main/adidas-mens-outdoor-hoist-sandals-mens-footwear-carbon-sock-slime-core-black-size-11-160093902-necwt.jpg",
      keyFeatures: [
        "Breathable and lightweight materials for maximum comfort",
        "Supportive soles with good traction for secure steps",
        "Adjustable straps for a personalized fit",
        "Durable construction for long-lasting wear"
      ]
    },
    {
      id: "Y",
      title: "Crocs for women",
      description: "Indulge in all-day comfort and casual style with our collection of women's Crocs. Known for their lightweight, comfortable, and versatile designs, Crocs are perfect for everyday wear, leisure activities, and even work environments with relaxed dress codes.",
      image: "https://m.media-amazon.com/images/I/713L2sNOMgL._AC_UY1000_.jpg",
      keyFeatures: [
        "Iconic clog design for unparalleled comfort",
        "Lightweight and breathable materials for all-day wear",
        "Easy to clean and maintain for effortless care",
        "Wide variety of styles and colors to match your personality"
      ]
    },
    {
      id: "Z",
      title: "Crocs for men",
      description: "Experience all-day comfort and casual style with our collection of men's Crocs. Known for their lightweight, comfortable, and versatile designs, Crocs are perfect for everyday wear, leisure activities, or even relaxed work environments.",
      image: "https://i.ebayimg.com/images/g/jp0AAOSwuGNkHUMp/s-l500.jpg",
      keyFeatures: [
        "Iconic clog design for unmatched comfort",
        "Lightweight and breathable materials for cool wear",
        "Easy to clean and low-maintenance for hassle-free wear",
        "Variety of styles and colors to suit your individual style"
      ]
    },
    {
      id: "AA",
      title: "Boat shoes for men",
      description: "Set sail for timeless style with our collection of men's boat shoes. These versatile shoes offer a perfect blend of sophistication and casual comfort, making them ideal for both dressy and relaxed occasions.",
      image: "https://fausto.in/cdn/shop/products/FST_3841_TAN_1-1_MOOD_400x.jpg?v=1679591136",
      keyFeatures: [
        "Durable leather or canvas construction for long-lasting wear",
        "Lace-up closure for a secure and adjustable fit",
        "Non-marking rubber soles for excellent traction on wet surfaces",
        "Classic loafer silhouette for versatile styling"
      ]
    },
    {
      id: "AB",
      title: "Slipper for women",
      description: "Slip into pure relaxation with our collection of women's slippers. These plush companions come in a variety of styles and materials to pamper your feet and keep you comfortable at home.",
      image: "https://static-01.daraz.com.np/p/072f583911eed05797c186b6e9f8f946.jpg_750x400.jpg_.webp",
      keyFeatures: [
        "Soft and cozy materials for ultimate comfort",
        "Supportive designs for all-day wear",
        "Warm options for cozy winters",
        "Stylish designs to suit your taste"
      ]
    },
    {
      id: "AC",
      title: "Slipper for men",
      description: "Unwind in ultimate comfort and warmth with our collection of men's slippers. These cozy companions come in various styles to suit your preference, offering relaxation and support after a long day.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwIEf-RcnoZa4Sl3O1PbMEqdYvfhVyvXzd4IXTfdr8c-ERXMhObkhbWoQ9KvzswdbSUq0&usqp=CAU",
      keyFeatures: [
        "Soft and comfortable materials for superior relaxation",
        "Supportive designs for all-day comfort",
        "Warm options for cozy winters",
        "Durable construction for long-lasting wear"
      ]
    },
    {
      id: "AD",
      title: "Flat sandals for women",
      description: "Step into summer style and everyday comfort with our collection of women's flat sandals. Offering a variety of designs, from strappy sandals to sleek slides, our flats are perfect for warm weather adventures and relaxed occasions.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiiJ9SuKh2WMwMg8dCf9O-7tM7QMaeccpPTHgxYyhh3n4pee3MbOxMdXldokZtvVwU6Q8&usqp=CAU",
      keyFeatures: [
        "Comfortable designs for all-day wear",
        "Stylish options to complement your look",
        "Versatile for dresses, skirts, jeans, and more"
      ]
    },
    {
      id: "AE",
      title: "Choco Chip cookies",
      description: "Indulge in timeless taste with our classic chocolate chip cookies. Freshly baked with love (and plenty of chocolate chips!), these cookies are guaranteed to satisfy your sweet tooth and awaken happy memories.",
      image: "http://cafeniloufer.com/cdn/shop/products/ChocoChip.jpg?v=1647518005",
      keyFeatures: [
        "Soft and chewy cookies",
        "Loaded with rich chocolate chips",
        "A delicious treat for any occasion",
        "Perfect for sharing (or keeping all to yourself!)"
      ]
    },
    {
      id: "AF",
      title: "Chickpeas",
      description: "Boost your culinary repertoire with the power of chickpeas! These little legumes, also known as garbanzo beans, are a nutritional powerhouse packed with protein, fiber, and essential vitamins. Enjoy them in various forms, from dips and salads to hearty stews and curries.",
      image: "https://m.media-amazon.com/images/I/511wtpCaekL._AC_UF1000,1000_QL80_.jpg",
      keyFeatures: [
        "Excellent source of plant-based protein and fiber",
        "Versatile ingredient for various cuisines",
        "Mild, nutty flavor that complements many dishes",
        "Shelf-stable and easy to store"
      ]
    },
    {
      id: "AG",
      title: "Groundnut oil",
      description: "Groundnut oil, also known as peanut oil, is a popular choice for kitchens around the world. This vegetable oil offers a neutral taste and high smoke point, making it suitable for various cooking methods.",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/1/JV/EN/VN/2074160/groundnut-oil.jpg",
      keyFeatures: [
        "Neutral flavor that complements various ingredients",
        "High smoke point ideal for frying, stir-frying, and searing",
        "Rich source of healthy fats",
        "Suitable for everyday cooking"
      ]
    },
    {
      id: "AH",
      title: "Sugar",
      description: "Indulge in the pure, sweet taste of our high-quality sugar. Perfect for baking, beverages, or simply sprinkling on your favorite treats, our sugar elevates the taste of everyday moments.",
      image: "https://img.etimg.com/thumb/msid-102671817,width-1200,height-900,imgsize-229212,resizemode-8,quality-100/markets/stocks/news/adding-sweetness-to-portfolio-5-stocks-from-sugar-industry-with-upside-potential-of-up-to-35.jpg",
      keyFeatures: [
        "Pure and delicious sweetness",
        "Versatile for baking, cooking, and beverages",
        "Dissolves quickly and evenly"
      ]
    },
    {
      id: "AI",
      title: "Rice",
      description: "A pantry staple for countless cultures, rice is a delicious and versatile whole grain that forms the base for countless meals.",
      image: "https://www.thedailymeal.com/img/gallery/5-rice-brands-to-buy-and-5-to-avoid/l-intro-1674263299.jpg",
      keyFeatures: [
        "Nutritious and filling whole grain",
        "Excellent base for countless meals and cuisines",
        "Cooks up easily for convenient meals"
      ]
    },
    {
      id: "AJ",
      title: "Coconut oil",
      description: "Experience the delicious taste and health benefits of our edible coconut oil. Extracted from the coconut fruit, this versatile oil adds a subtle sweetness and richness to various dishes.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ32uI_HJuIbVGqyNKmXn2hFkF3MFF43uvwejFoCrM8_Spg_1Mgo4NFENiRaVbjuVIcbhY&usqp=CAU",
      keyFeatures: [
        "Mild coconut flavor that complements sweet and savory dishes",
        "High smoke point, ideal for frying, sauteing, and baking",
        "Potential source of health benefits due to medium-chain triglycerides (MCTs) (consult a doctor before incorporating for health-related issues)"
      ]
    },
    {
      id: "AK",
      title: "Salt",
      description: "More than just seasoning, salt is a culinary cornerstone. Enhance the natural flavors of your food with our high-quality salt selection.",
      image: "https://st3.depositphotos.com/1585135/13580/i/450/depositphotos_135801094-stock-photo-salt-and-wooden-spoon.jpg",
      keyFeatures: [
        "Essential for drawing out and balancing flavors in food",
        "Pure and high-quality for a clean taste",
        "Essential for any well-stocked kitchen"
      ]
    },
    {
      id: "AL",
      title: "Turmeric",
      description: "Brighten up your meals with the vibrant color and earthy flavor of our turmeric powder. This versatile spice, derived from the turmeric root, adds a warm touch to curries, vegetables, and even beverages.",
      image: "https://i.etsystatic.com/17612060/r/il/498c76/4095783438/il_570xN.4095783438_ibim.jpg",
      keyFeatures: [
        "Rich, golden color that enhances dishes visually",
        "Warm, earthy flavor profile for a taste adventure",
        "Contains curcumin, a compound with potential anti-inflammatory properties (consult a doctor before incorporating for health reasons)",
        "Convenient pre-ground powder for ease of use in cooking"
      ]
    },
    {
      id: "AM",
      title: "Sketch pens",
      description: "Unleash your creativity with our exciting 20-shade sketch pen set! Featuring a vibrant range of colors, this set offers everything you need to bring your artistic vision to life. Plus, get a complimentary Glostix for adding a touch of shine to your artwork!",
      image: "https://5.imimg.com/data5/PE/PL/MY-3485190/1-500x500.jpg",
      keyFeatures: [
        "20 Unique Shades: Explore a diverse color palette to create stunning artwork.",
        "High-Quality Pigments: Experience rich color saturation and smooth laydown.",
        "Versatile Tips: Suitable for various techniques, from fine detailing to bold strokes.",
        "Free Glostix Included: Add a touch of shimmer and dimension to your art."
      ]
    },
    {
      id: "AN",
      title: "Blue Ball point pen",
      description: "Keep your thoughts flowing smoothly with our dependable blue ballpoint pen. This everyday essential delivers clean, consistent lines and comfortable writing, making it a perfect choice for note-taking, journaling, or everyday tasks.",
      image: "https://m.media-amazon.com/images/I/715a2fpeYbL.jpg",
      keyFeatures: [
        "Classic blue ink for clear and legible writing.",
        "Smooth-flowing ballpoint ink for effortless writing experience.",
        "Comfortable grip for extended use",
        "Reliable ink cartridge for consistent performance."
      ]
    },
    {
      id: "AO",
      title: "Black Ball point pen",
      description: "Never be caught without a writing tool! Our black ballpoint pen is your reliable companion for everyday tasks. This classic design delivers crisp, black lines and a smooth writing experience, making it perfect for anything from note-taking and signing documents to jotting down quick ideas.",
      image: "https://d3dxkzk9npnkec.cloudfront.net/uploads/images/202301/img_x500_63cf870bdda738-77873329-49884508.jpg",
      keyFeatures: [
        "Bold black ink for clear and professional writing",
        "Smooth-flowing ballpoint ink for effortless writing comfort",
        "Comfortable grip for extended use",
        "Dependable ink cartridge for consistent performance"
      ]
    },
    {
      id: "AP",
      title: "Highlighter pens",
      description: "Highlight your ideas with a touch of softness! This set of 6 pastel highlighters offers a beautiful range of gentle colors that won't overpower your notes. Perfect for studying, bullet journaling, or adding subtle emphasis, these highlighters will brighten your work in style.",
      image: "https://m.media-amazon.com/images/I/518H2nju+2L._AC_UF1000,1000_QL80_.jpg",
      keyFeatures: [
        "Set of 6 Pastel Shades: Explore a delightful range of soft colors for gentle highlighting.",
        "Clear Highlighting: Transparent ink allows you to see your text clearly beneath the highlight.",
        "Fast-Drying Formula: Avoid smudging and get back to writing quickly.",
        "Chisel Tip: Provides versatility for both broad highlighting and fine underlining."
      ]
    },
    {
      id: "AQ",
      title: "Notebooks",
      description: "Take your note-taking to the next level with our king-size notebook. Featuring 120 expansive pages, this notebook offers ample space for capturing your thoughts, ideas, and creative projects.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaIT1KFBr-BmFHLIQSRVOWyvFQM4NGMD4HHxfyibdZ-TCdTQXVxOS68PBR5Ir-Oe_I7zM&usqp=CAU",
      keyFeatures: [
        "King-Size Pages (24 cm x 18 cm): Enjoy a generous writing surface for detailed notes, diagrams, or mind maps.",
        "120 Pages: Provides ample space for all your notes and projects.",
        "High-Quality Paper: Smooth pages for a pleasurable writing experience."
      ]
    },
    {
      id: "AR",
      title: "Oil Pastel colours",
      description: "Elevate your artwork with the dazzling color power of our 24-shade vibrant oil pastels! This set bursts with a spectrum of rich, intensely pigmented colors, designed to ignite your artistic expression and bring your ideas to life with stunning vibrancy.",
      image: "https://www.sitaramstationers.com/wp-content/uploads/2023/04/MUNGYO-OIL-PASTEL-COLOUR-SET-OF-24A.jpg",
      keyFeatures: [
        "24 Vibrant Shades: Unleash your creativity with a vast palette of bold, eye-catching colors.",
        "Superior Pigmentation: Experience exceptional color saturation for artwork that pops.",
        "Smooth Blending: Create seamless color transitions and achieve stunning effects.",
        "Soft Texture: Glide effortlessly across the page for easy application and layering."
      ]
    },
    {
      id: "AS",
      title: "Pencil",
      description: "Sharpen your skills and erase your mistakes with this convenient all-in-one pencil kit! Perfect for students, artists, or anyone who loves the classic feel of a pencil, this kit has everything you need to get started.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yqZhTEe-qURCq_I-H95tDwEsd6_cYW6mMsIs4RQQnQ&s",
      keyFeatures: [
        "Pencil with Eraser: The convenient eraser at the back lets you fix mistakes quickly and easily.",
        "Bonus Sharpener: Keep your pencil sharp throughout its life with the included sharpener.",
        "Free Eraser: The extra eraser ensures you always have a clean writing experience."
      ]
    },
    {
      id: "AT",
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
      id: "AU",
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
      id: "AV",
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

  export default allProducts;

