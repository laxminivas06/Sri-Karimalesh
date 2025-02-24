import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const menuCategories = [
  { name: "Sweets", icon: "https://i.ndtvimg.com/i/2017-09/south-indian-sweet_650x400_81505725448.jpg" },
  { name: "Fry Items", icon: "https://natashaskitchen.com/wp-content/uploads/2020/08/Vegetable-Stir-Fry-2.jpg" },
  { name: "Starters", icon: "https://media.vyaparify.com/vcards/blogs/86957/Veg-Starters.jpg" },
  { name: "Curries", icon: "https://shwetainthekitchen.com/wp-content/uploads/2023/03/mixed-vegetable-curry.jpg" },
  { name: "Hots", icon: "https://cookingfromheart.com/wp-content/uploads/2020/05/Mirapakaya-Bajji-2.jpg" },
  { name: "Rotis", icon: "https://homemadeindianfood.co.uk/wp-content/uploads/2021/12/Roti-12-1.jpg" },
  { name: "Liquids", icon: "https://traditionallymodernfood.com/wp-content/uploads/2023/09/murungakkai-sambar-drumstick-sambhar-55-scaled.jpeg" },
  { name: "Rice Items", icon: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/fried-rice.jpg" },
  { name: "Pickles", icon: "https://jyothigheestore.com/wp-content/uploads/2023/10/mixed-vegetable-pickle.jpg" },
  { name: "Snacks", icon: "https://c.ndtvimg.com/2021-09/b9vqech8_tandoori-platter_625x300_06_September_21.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350" },
  { name: "Drinks", icon: "https://www.beanilla.com/wp/wp-content/uploads/2022/06/RefreshingDrinks-1024x683.jpg" },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-900">
          Our Menu Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menuCategories.map((category, index) => (
            <Link key={index} to={`/category/${category.name}`} className="no-underline">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="relative h-48 w-full">
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-orange-900 text-center">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;