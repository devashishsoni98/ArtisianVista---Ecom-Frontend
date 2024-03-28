const clothingData = [
    {
      id: "A",
      title: "Women's Lowers",
      description:
        "Enhance your comfort and style with our versatile women's lowers. Crafted from cotton blend, these lowers offer a soft, breathable feel that moves effortlessly with you. They provide a functional and flattering fit. Perfect for lounging, yoga, workouts, or everyday wear, these lowers are a must-have for your wardrobe.",
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
        "Elevate your comfort and mobility with our men's lowers. Made from cotton blend, these lowers provide a comfortable, breathable feel that moves with you. They offer both functionality and a flattering fit. Ideal for lounging, workouts, or everyday wear, these lowers are a wardrobe essential.",
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
  ];
  
  export default clothingData;
  