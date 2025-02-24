import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const categoryItems = {
  Sweets: [
    { name: "Rava Kesari", singlePrice: 4.99, fullPrice: 8.99, img: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/kesari-recipe-1-500x500.jpg" },
    { name: "Gulab Jamun", singlePrice: 4.99, fullPrice: 8.99, img: "https://theartisticcook.com/wp-content/uploads/2024/10/Gulab-Jamun-with-Milk-Powder.jpg" },
    { name: "Carrot Halwa", singlePrice: 5.99, fullPrice: 10.99, img: "https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/01/Gajar-ka-Halwa-03.jpg" },
    { name: "Semiya Payasam", singlePrice: 6.49, fullPrice: 12.99, img: "https://www.ticklingpalates.com/wp-content/uploads/2022/04/semiya-payasam-recipe.jpg" },
    { name: "Chakra Pongali", singlePrice: 5.99, fullPrice: 11.99, img: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/anusha.pariti-gmail.com/Chakkra_Pongali_recipe_edited1.jpg" },
    { name: "Double Ka Meeta", singlePrice: 6.99, fullPrice: 13.99, img: "https://x9s2d6a3.delivery.rocketcdn.me/wp-content/uploads/2018/04/double-ka-meetha-25_1200x1200.jpg" },
    { name: "Bobbatlu", singlePrice: 7.49, fullPrice: 14.99, img: "https://www.madhuseverydayindian.com/wp-content/uploads/2021/08/bobbatlu.jpg" },
  ],
  "Fry Items": [
    { name: "Bendi Fry", singlePrice: 4.99, fullPrice: 9.99, img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/bhindi-fry-500x500.jpg" },
    { name: "Donda Fry", singlePrice: 4.49, fullPrice: 8.99, img: "https://img-global.cpcdn.com/recipes/59a5e5b6ad411ddb/680x482cq70/tindora-kaju-fry-dondakai-cashew-pakodi-koora-recipe-main-photo.jpg" },
    { name: "Potato Fry", singlePrice: 3.99, fullPrice: 7.99, img: "https://www.cookwithnabeela.com/wp-content/uploads/2024/05/AlooFry.webp" },
    { name: "Soya Fry", singlePrice: 5.49, fullPrice: 10.99, img: "https://i.ytimg.com/vi/2a4tlAUAGQI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD8rCaCp1vWprQ9__uxJrx68jGPPQ" },
    { name: "Egg Plant Fry", singlePrice: 4.99, fullPrice: 9.99, img: "https://i.ytimg.com/vi/a8WHXJrKOHI/maxresdefault.jpg" },
    { name: "Cabbage 65", singlePrice: 4.99, fullPrice: 9.99, img: "https://lh4.googleusercontent.com/S--PeValmjExVDYkf02IN3W1sN_pgJa0KHHwDM4BZhUkWm-B-lB9m05zAWCgsSOgffhCi9tIwyD1W1_LYc0nydGUFO3jN9qbtSS4B74Zup6vdm6HSu0178R9GIejyfVwgN72Y1g2" },
  ],
  Starters: [
    { name: "Veg Manchuria", singlePrice: 7.99, fullPrice: 15.99, img: "https://chefadora.b-cdn.net/Screenshot_2024_10_01_140619_572a1d5d13.jpg" },
    { name: "Baby Corn", singlePrice: 8.49, fullPrice: 16.99, img: "https://cdn2.foodviva.com/static-content/food-images/chinese-recipes/baby-corn-manchurian/baby-corn-manchurian.jpg" },
    { name: "Gobi", singlePrice: 7.49, fullPrice: 14.99, img: "https://i.ytimg.com/vi/AXEzrUVD_XI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDjQi3nUJLrYEvsF5aHsHy7FSl68Q" },
    { name: "Potato Bites", singlePrice: 6.99, fullPrice: 13.99, img: "https://i.ytimg.com/vi/W1ePQ6MWark/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAzrE1A8ut_d9Bdj-sR0zYIWjbaQw" },
    { name: "Crispy Corn", singlePrice: 8.99, fullPrice: 17.99, img: "https://rakskitchen.net/wp-content/uploads/2022/01/crisp-corn-500x375.jpg" },
    { name: "Paneer Bites", singlePrice: 9.49, fullPrice: 18.99, img: "https://i0.wp.com/mayuris-jikoni.com/wp-content/uploads/2018/04/b6e23-img_6654.jpg?ssl=1" },
  ],
Curries: [
    { name: "Palak Paneer",singlePrice: 7.99, fullPrice: 15.99, img: "https://healthynibblesandbits.com/wp-content/uploads/2020/01/Saag-Paneer-FF.jpg" },
    { name: "Paneer Butter Masala", singlePrice: 7.99, fullPrice: 15.99, img: "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2-500x500.jpg" },
    { name: "Mushroom Masala", singlePrice: 7.99, fullPrice: 15.99, img: "https://shwetainthekitchen.com/wp-content/uploads/2023/03/mutter-mushroom.jpg" },
    { name: "Potato Curry", singlePrice: 7.99, fullPrice: 15.99, img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/potato-curry-aloo-curry.jpg" },
    { name: "Chole Masala", singlePrice: 7.99, fullPrice: 15.99, img: "https://www.indianveggiedelight.com/wp-content/uploads/2019/05/chana-masala-recipe-featured.jpg" },
    { name: "Guthu Vankai", singlePrice: 7.99, fullPrice: 15.99, img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/10/gutti-vankaya-kura-recipe-15.webp" },
    { name: "Dal", singlePrice: 7.99, fullPrice: 15.99, img: "https://shwetainthekitchen.com/wp-content/uploads/2023/01/chana-dal.jpg" },
    { name: "Donda Curry", singlePrice: 7.99, fullPrice: 15.99, img: "https://i.ytimg.com/vi/xcA0VKu2pQo/maxresdefault.jpg" },
    { name: "Mix Veg Curry", singlePrice: 7.99, fullPrice: 15.99, img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/vegetable-curry-recipe.jpg" },
    { name: "Soya Curry", singlePrice: 7.99, fullPrice: 15.99, img: "https://d1mxd7n691o8sz.cloudfront.net/static/recipe/recipe/2023-06/Kholapuri-soya-curry-aa230a34658e44feb50e5f1cd79ed9e7.jpg" },
    { name: "Cabbage Curry", singlePrice: 7.99, fullPrice: 15.99, img: "https://theflavorbells.com/wp-content/uploads/2022/08/cabbage-curry-recipe.jpg" },
    { name: "Drumstick Curry", singlePrice: 7.99, fullPrice: 15.99, img: "https://tastedrecipes.com/wp-content/uploads/2022/03/Drumstick-Curry-04-848x424.jpg" },
    { name: "Tomato Curry", singlePrice: 7.99, fullPrice: 15.99, img: "https://images.immediate.co.uk/production/volatile/sites/30/2021/03/Tomato-and-coconut-curry-27a5cdc.jpg?quality=90&resize=556,505" },
  ],
  Rotis: [
    { name: "Chapati", singlePrice: 7.99, fullPrice: 15.99, img: "https://zestysouthindiankitchen.com/wp-content/uploads/2012/10/Instagram-Post-2.jpg" },
    { name: "Sorrakaya Roti", singlePrice: 7.99, fullPrice: 15.99, img: "https://sirisblog.com/wp-content/uploads/2020/08/20200804_145750-scaled.jpg" },
    { name: "Puri", singlePrice: 7.99, fullPrice: 15.99, img: "https://www.indianveggiedelight.com/wp-content/uploads/2020/10/poori-recipe-featured.jpg" },
  ],
  Liquids: [
    { name: "Sambar", singlePrice: 7.99, fullPrice: 15.99, img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/sambar.webp" },
    { name: "Tomato Rasam", singlePrice: 7.99, fullPrice: 15.99, img: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/10/tomato-rasam-recipe-1.jpg" },
    { name: "Special Rasam", singlePrice: 7.99, fullPrice: 15.99, img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/rasam.webp" },
    { name: "Pachi Pulusu", singlePrice: 7.99, fullPrice: 15.99, img: "https://www.myhealthybreakfast.in/images/drink01/pachi-pulusu.jpg" },
    { name: "Majjiga Pulusu", singlePrice: 7.99, fullPrice: 15.99, img: "https://www.cookshideout.com/wp-content/uploads/2007/04/Majjiga-Pulusu-with-Greens_FI.jpg" },
  ],
  "Rice Items": [
    { name: "Lemon Rice", singlePrice: 7.99, fullPrice: 15.99, img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/lemon-rice-recipe.jpg" },
    { name: "Temple Style Pulihora",singlePrice: 7.99, fullPrice: 15.99, img: "https://i.ytimg.com/vi/GLdLE_u13EY/maxresdefault.jpg" },
    { name: "Coriander Rice", singlePrice: 7.99, fullPrice: 15.99, img: "https://cookingfromheart.com/wp-content/uploads/2021/06/Coriander-Rice-5.jpg" },
    { name: "Tomato Rice", singlePrice: 7.99, fullPrice: 15.99, img: "https://aromaticessence.co/wp-content/uploads/2022/11/tomato_rice_featured_image.jpg" },
    { name: "Jeera Rice", singlePrice: 7.99, fullPrice: 15.99, img: "https://www.whiskaffair.com/wp-content/uploads/2021/06/Jeera-Rice-2-3-1.jpg" },
    { name: "Fried Rice", singlePrice: 7.99, fullPrice: 15.99, img: "https://www.onceuponachef.com/images/2023/12/Fried-Rice-Hero-12.jpg" },
    { name: "White Rice", singlePrice: 7.99, fullPrice: 15.99, img: "https://images.getrecipekit.com/20230113172320-whiterice.jpg?aspect_ratio=1:1&quality=90&" },
    { name: "Veg Dum Biryani", singlePrice: 7.99, fullPrice: 15.99, img: "https://kannanskitchen.com/wp-content/uploads/2021/04/DSC_1079_1.jpg" },
    { name: "Egg Dum Biryani", singlePrice: 7.99, fullPrice: 15.99, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvmlifRamUfBasSU7slQzpnKFCfyNhPuLGQ&s" },
    { name: "Traditional Curd Rice", singlePrice: 7.99, fullPrice: 15.99, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC3nDgYnZMgGklpIWA8AFCE4N01yDKjT0Ueg&s" },
    { name: "Palli Powder Rice", singlePrice: 7.99, fullPrice: 15.99, img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifdWKpdqD9enBn3hnaW0zXWXge_L9wOjpiejDSkJLOT0f6Fnc9SA5dEFaubXu1KfJ-yk-dw2NEwaPdNyMTI9jsneqhzM6HyKAJ0xusMCm4fp_4sZYvia3D_alyc1knvWLQ89Upc-HFkDc/s1600/IMG_0863.jpg" },
    { name: "Putnalu Powder Rice", singlePrice: 7.99, fullPrice: 15.99, img: "https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_uXDE5wMZcpbsp8jGUgnGlj4qy-ONowGBcXjpV-wUjMY6fbhgRHMtJzIzE27sQ5EVc0On-Ao5Pzgynzs6Nw3ba2cvhU3DXkMdAhpSZZVk-mYUiDU5VLwqynMyQTrPAkjuQYW7M=w1200-h630-p-k-no-nu" },
  ],
  Pickles: [
    { name: "Tomato Pickle", singlePrice: 7.99, fullPrice: 15.99, img: "https://www.archanaskitchen.com/images/archanaskitchen/Indian_Pickles/Spicy_Tomato_Pickle_Recipe_South_Indian_Thakkali_Thokku.jpg" },
    { name: "Palakura Pachadi",singlePrice: 7.99, fullPrice: 15.99, img: "https://vegetarianhomestylecooking2015.wordpress.com/wp-content/uploads/2016/05/img_0530-1.jpg" },
    { name: "Gongura Pickle", singlePrice: 7.99, fullPrice: 15.99, img: "https://aarogyamastu.in/wp-content/uploads/2022/06/gongura-pickle-e1671970585808.jpg" },
    { name: "Pudina Pachadi", singlePrice: 7.99, fullPrice: 15.99, img: "https://www.orderpickles.in/cdn/shop/files/Pudina_grande.jpg?v=1707462756" },
    { name: "Mango Pickle", singlePrice: 7.99, fullPrice: 15.99, img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/mango-pickle-recipe.jpg" },
    { name: "Coriander Pickle", singlePrice: 7.99, fullPrice: 15.99, img: "https://frombharat.com/storage/media/w9q2kaSCWCSxzOjOKJdFqITUxosLlc3pW8w9reAN.jpg" },
    { name: "Mango Roti Pachadi", singlePrice: 7.99, fullPrice: 15.99, img: "https://i.ytimg.com/vi/JGaxbauxrj4/maxresdefault.jpg" },
  ],
  Snacks: [
    { name: "Palak Pakodi", singlePrice: 7.99, fullPrice: 15.99, img: "https://yummyindiankitchen.com/wp-content/uploads/2016/07/palak-pakoda-recipe.jpg" },
    { name: "Onion Pakodi", singlePrice: 7.99, fullPrice: 15.99, img: "https://rakskitchen.net/wp-content/uploads/2010/06/Onion-pakoda.jpg" },
    { name: "Gobi",singlePrice: 7.99, fullPrice: 15.99, img: "https://evergreenrecipes.com/wp-content/uploads/2015/11/P1010701.jpg" },
  ],
  Hots: [
    { name: "Mirchi Bajji ", singlePrice: 7.99, fullPrice: 15.99, img: "https://binjalsvegkitchen.com/wp-content/uploads/2024/09/Mirchi-Bajji-H1.jpg" },
    { name: "Alu Bajji", singlePrice: 7.99, fullPrice: 15.99, img: "https://i.ytimg.com/vi/7KhTfQ2Kr8w/maxresdefault.jpg" },
    { name: "Onion Bajji", singlePrice: 7.99, fullPrice: 15.99, img: "https://www.kamalascorner.com/wp-content/uploads/2015/03/pakoda.jpg" },
    { name: "Panner Bajji", singlePrice: 7.99, fullPrice: 15.99, img: "https://pipingpotcurry.com/wp-content/uploads/2022/10/Paneer-Pakora-Recipe-Piping-Pot-Curry.jpg" },
    { name: "Bread Pakaoda",singlePrice: 7.99, fullPrice: 15.99, img: "https://static.toiimg.com/thumb/84629641.cms?imgsize=326457&width=800&height=800" },
  ],
  Drinks: [
    { name: "Mango Lassi", singlePrice: 7.99, fullPrice: 15.99, img: "https://www.yellowthyme.com/wp-content/uploads/2023/03/Mango-Lassi-08589.jpg" },
    { name: "Sweet Lassi", singlePrice: 7.99, fullPrice: 15.99, img: "https://www.indianveggiedelight.com/wp-content/uploads/2023/01/sweet-lassi-recipe-featured.jpg" },
    { name: "Salt Lassi", singlePrice: 7.99, fullPrice: 15.99, img: "https://indiaphile.info/wp-content/uploads/2023/03/stp-salt-lassi-0065.jpg" },
    { name: "Fruit Salad", singlePrice: 7.99, fullPrice: 15.99, img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/fruit-custard.jpg" },
  ],
  // Add other categories similarly...
};

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const items = categoryItems[categoryName as keyof typeof categoryItems] || [];

  const [cart, setCart] = useState<{ name: string; price: number; img: string; pack: string }[]>([]);

  // Load cart from localStorage when the page loads
  useEffect(() => {
    const savedCart = localStorage.getItem("shoppingCart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Add item to cart and save to localStorage
  const addToCart = (item: { name: string; singlePrice: number; fullPrice: number; img: string }, pack: string) => {
    const price = pack === "Single Pack" ? item.singlePrice : item.fullPrice;
    const updatedItem = {
      name: item.name,
      price,
      img: item.img,
      pack,
    };
    const updatedCart = [...cart, updatedItem];
    setCart(updatedCart);
    localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="pt-16 pb-1 text-3xl font-bold text-center text-orange-900 mb-16">{categoryName}</h2>
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition"
      >
        ← Back
      </button>
      {/* Product Grid */}
      {items.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const [selectedPack, setSelectedPack] = useState("Single Pack"); // Default pack selection
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
              >
                <img src={item.img} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-orange-900">{item.name}</h3>
                <p className="text-lg text-gray-700">
                  ${selectedPack === "Single Pack" ? item.singlePrice.toFixed(2) : item.fullPrice.toFixed(2)} AUD
                </p>

                {/* Pack Selection */}
                <div className="mt-4">
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name={`pack-${index}`}
                      value="Single Pack"
                      checked={selectedPack === "Single Pack"}
                      onChange={() => setSelectedPack("Single Pack")}
                      className="form-radio h-4 w-4 text-orange-600"
                    />
                    <span className="ml-2">Single Pack (${item.singlePrice.toFixed(2)})</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name={`pack-${index}`}
                      value="Full Pack"
                      checked={selectedPack === "Full Pack"}
                      onChange={() => setSelectedPack("Full Pack")}
                      className="form-radio h-4 w-4 text-orange-600"
                    />
                    <span className="ml-2">Full Pack (${item.fullPrice.toFixed(2)})</span>
                  </label>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(item, selectedPack)}
                  className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-600">No items available for this category.</p>
      )}

      {/* Buttons */}
      <div className="mt-8 flex justify-between">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition"
        >
          ← Back
        </button>
        {cart.length > 0 && (
          <button
            onClick={() => navigate("/cart")}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Go to Cart 🛒
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;