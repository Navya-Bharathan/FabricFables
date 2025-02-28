const products=[
  
    {
      "id": 1,
      "title": "Floral Maxi Dress",
      "description": "A beautiful floral maxi dress perfect for spring and summer outings.",
      "category": "woman",
      "new": true,
      "popular": true,
      "keywords": ["floral", "dress", "summer", "maxi", "elegant"],
      "image": require("../assets/Products/floral-maxi-dress-woman.jpg")
    },
    {
      "id": 2,
      "title": "Slim Fit Jeans",
      "description": "Comfortable slim-fit jeans with a modern, sleek look.",
      "category": "woman",
      "new": false,
      "popular": true,
      "keywords": ["jeans", "slim fit", "denim", "casual"],
      "image": require("../assets/Products/productImg1.jpg")
    },
    {
      "id": 3,
      "title": "Striped T-Shirt",
      "description": "Classic striped t-shirt for a casual and laid-back style.",
      "category": "man",
      "new": true,
      "popular": false,
      "keywords": ["striped", "t-shirt", "casual", "comfortable"],
      "image": require("../assets/Products/woman-blue-winter-jacket.jpg"),
    },
    {
      "id": 4,
      "title": "Leather Jacket",
      "description": "A stylish leather jacket to elevate your evening look.",
      "category": "boy",
      "new": false,
      "popular": true,
      "keywords": ["leather", "jacket", "fashion", "evening"],
      "image": require("../assets/Products/productImg1.jpg")
    },
    {
      "id": 5,
      "title": "High-Waisted Skirt",
      "description": "A chic high-waisted skirt that pairs well with blouses or t-shirts.",
      "category": "woman",
      "new": true,
      "popular": false,
      "keywords": ["high-waisted", "skirt", "chic", "casual"],
      "image": require("../assets/Products/green-woman-jacket.jpg")
    },
    {
      "id": 6,
      "title": "Graphic Hoodie",
      "description": "Comfortable hoodie with a fun graphic print.",
      "category": "girl",
      "new": false,
      "popular": true,
      "keywords": ["hoodie", "graphic", "comfortable", "cute"],
      "image": require("../assets/Products/green-woman-jacket.jpg")
    },
    {
      "id": 7,
      "title": "Denim Jacket",
      "description": "A timeless denim jacket for layering in any season.",
      "category": "boy",
      "new": true,
      "popular": false,
      "keywords": ["denim", "jacket", "classic", "casual"],
      "image": require("../assets/Products/productImg1.jpg")
    },
    {
      "id": 8,
      "title": "Fleece Sweatshirt",
      "description": "A soft fleece sweatshirt for keeping warm and cozy.",
      "category": "boy",
      "new": true,
      "popular": true,
      "keywords": ["fleece", "sweatshirt", "cozy", "warm"],
      "image": require("../assets/Products/white-woman-tshirt.jpg")
    },
    {
      "id": 9,
      "title": "Plaid Skirt",
      "description": "A stylish plaid skirt that adds a trendy touch to any outfit.",
      "category": "girl",
      "new": false,
      "popular": false,
      "keywords": ["plaid", "skirt", "cute", "trendy"],
      "image": require("../assets/Products/woman-blue-winter-jacket.jpg")
    },
    {
      "id": 10,
      "title": "Rainbow Tutu Dress",
      "description": "A colorful rainbow tutu dress for little girls who love to dance.",
      "category": "girl",
      "new": true,
      "popular": false,
      "keywords": ["rainbow", "tutu", "dress", "cute", "dance"],
      "image": require("../assets/Products/green-woman-jacket.jpg")
    },
    {
      "id": 11,
      "title": "Boys' Cargo Shorts",
      "description": "Comfortable cargo shorts with plenty of pockets for adventure.",
      "category": "boy",
      "new": false,
      "popular": true,
      "keywords": ["cargo", "shorts", "adventure", "pockets"],
      "image": require("../assets/Products/woman-blue-winter-jacket.jpg"),
      
    },
    {
      "id": 12,
      "title": "Athletic Joggers",
      "description": "Perfect for sports or casual wear, these joggers are comfy and stylish.",
      "category": "boy",
      "new": true,
      "popular": false,
      "keywords": ["athletic", "joggers", "comfortable", "sports"],
      "image": require("../assets/Products/green-woman-jacket.jpg")
    },
    {
      "id": 13,
      "title": "Tennis Shoes",
      "description": "Durable and supportive tennis shoes for outdoor activities.",
      "category": "boy",
      "new": true,
      "popular": true,
      "keywords": ["tennis", "shoes", "outdoor", "sports"],
      "image": require("../assets/Products/woman-blue-winter-jacket.jpg")
    },
    {
      "id": 14,
      "title": "Graphic Tee",
      "description": "A fun graphic tee with a bold design.",
      "category": "man",
      "new": false,
      "popular": true,
      "keywords": ["graphic", "tee", "casual", "cool"],
      "image": require("../assets/Products/white-woman-tshirt.jpg")
    },
    {
      "id": 15,
      "title": "Sweatpants",
      "description": "Soft and cozy sweatpants for ultimate comfort.",
      "category": "man",
      "new": false,
      "popular": true,
      "keywords": ["sweatpants", "comfortable", "casual"],
      "image": require("../assets/Products/green-woman-jacket.jpg")
    },
    {
      "id": 16,
      "title": "Puffer Jacket",
      "description": "A warm puffer jacket for cold weather.",
      "category": "woman",
      "new": true,
      "popular": true,
      "keywords": ["puffer", "jacket", "warm", "cold weather"],
      "image": require("../assets/Products/productImg1.jpg"),
      
    },
    {
      "id": 17,
      "title": "Vintage Denim Jeans",
      "description": "Classic, vintage-style denim jeans that never go out of style.",
      "category": "woman",
      "new": false,
      "popular": false,
      "keywords": ["vintage", "denim", "jeans", "classic"],
      "image": require("../assets/Products/white-woman-tshirt.jpg")
    },
    {
      "id": 18,
      "title": "Satin Blouse",
      "description": "A luxurious satin blouse for an elegant evening look.",
      "category": "woman",
      "new": true,
      "popular": false,
      "keywords": ["satin", "blouse", "elegant", "evening"],
      "image": require("../assets/Products/green-woman-jacket.jpg")
    },
    {
      "id": 19,
      "title": "Tartan Plaid Dress",
      "description": "A classic tartan plaid dress for special occasions or casual wear.",
      "category": "girl",
      "new": true,
      "popular": false,
      "keywords": ["tartan", "plaid", "dress", "classic"],
      "image": require("../assets/Products/green-woman-jacket.jpg")
    },
    {
      "id": 20,
      "title": "Boys' Sweater Vest",
      "description": "A stylish sweater vest for layering over shirts or tees.",
      "category": "boy",
      "new": false,
      "popular": true,
      "keywords": ["sweater", "vest", "layering", "casual"],
      "image": require("../assets/Products/white-woman-tshirt.jpg")
    },
    {
      "id": 21,
      "title": "V-neck Tee",
      "description": "A comfortable V-neck t-shirt for everyday wear.",
      "category": "woman",
      "new": true,
      "popular": true,
      "keywords": ["v-neck", "tee", "comfortable", "casual"],
      "image": require("../assets/Products/green-woman-jacket.jpg")
    },
    {
      "id": 22,
      "title": "Boys' Zip Hoodie",
      "description": "A casual zip-up hoodie perfect for layering during colder days.",
      "category": "boy",
      "new": true,
      "popular": false,
      "keywords": ["zip", "hoodie", "casual", "layering"],
      "image": require("../assets/Products/productImg1.jpg")
    },
    {
      "id": 23,
      "title": "Flared Jeans",
      "description": "Stylish flared jeans with a retro touch.",
      "category": "woman",
      "new": false,
      "popular": false,
      "keywords": ["flared", "jeans", "retro", "fashion"],
      "image": require("../assets/Products/green-woman-jacket.jpg")
    },
    {
      "id": 24,
      "title": "Boys' Winter Coat",
      "description": "A warm and insulated winter coat for harsh weather.",
      "category": "boy",
      "new": false,
      "popular": true,
      "keywords": ["winter", "coat", "warm", "insulated"],
      "image": require("../assets/Products/woman-blue-winter-jacket.jpg")
    },
    {
      "id": 25,
      "title": "Embroidered Dress",
      "description": "An elegant embroidered dress perfect for family gatherings.",
      "category": "girl",
      "new": true,
      "popular": false,
      "keywords": ["embroidered", "dress", "elegant", "gathering"],
      "image": require("../assets/Products/white-woman-tshirt.jpg")
    }
  ];
export default products;
