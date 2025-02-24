import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const MealBox = () => {
  const baseMealBoxPrice = 14.99; // Base price for a single meal box
  const [addOns, setAddOns] = useState({
    extraFruit: 0,
    extraSweet: 0,
    extraCurry: 0,
    extraRice: 0,
    extraFriedItem: 0,
    extraSambar: 0,
    extraRoti: 0,
    extraPapad: 0,
  });
  const [mealBoxCount, setMealBoxCount] = useState(1); // State for number of meal boxes

  const addOnList = [
    {
      key: "extraFruit",
      name: "Extra Fruit",
      description: "🐉 Dragon Fruit, 🥝 Kiwi, 🍉 Watermelon, 🍇 Grapes, 🍏 Green Grapes",
      price: 3,
      img: "https://www.californiastrawberries.com/wp-content/uploads/2021/05/Rainbow-Fruit-Salad-1024.jpg"
    },
    { key: "extraSweet", name: "Extra Sweet", price: 2, img: "https://www.sriannapurna.in/blog/wp-content/uploads/2023/01/blog-iamges-01.jpg" },
    { key: "extraCurry", name: "Extra Curry", price: 4, img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Courgette-curry-c295fa0.jpg?resize=768,574" },
    { key: "extraRice", name: "Extra Rice", price: 2, img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/basmati-rice-recipe.jpg" },
    { key: "extraFriedItem", name: "Extra Fried Item", price: 3, img: "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg" },
    { key: "extraSambar", name: "Extra Sambar", price: 2, img: "https://i0.wp.com/indischwindisch.com/wp-content/uploads/2020/09/img-6174.jpg?resize=1000%2C667&ssl=1" },
    { key: "extraRoti", name: "Extra Roti", price: 2, img: "https://cdn.mos.cms.futurecdn.net/z9yrzoMFd7hcFnvjzNjv5P-1280-80.jpg" },
    { key: "extraPapad", name: "Extra Papad", price: 1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkrFXWquq_PzjM4djbYQxmg4DtJy-zwnlFA&s" },
  ];

  const handleAddOnChange = (key, operation) => {
    setAddOns((prev) => ({
      ...prev,
      [key]: operation === "add" ? prev[key] + 1 : Math.max(0, prev[key] - 1),
    }));
  };

  const handleMealBoxCountChange = (operation) => {
    setMealBoxCount((prev) => (operation === "add" ? prev + 1 : Math.max(1, prev - 1)));
  };

  // Calculate the total cost of customized meal boxes
  const calculateCustomizedMealBoxPrice = () => {
    let totalAddOnsCost = 0;
    addOnList.forEach(({ key, price }) => {
      totalAddOnsCost += addOns[key] * price;
    });
    return (baseMealBoxPrice + totalAddOnsCost) * mealBoxCount;
  };

  const generateOrderMessage = () => {
    const selectedAddOns = addOnList
      .filter(({ key }) => addOns[key] > 0)
      .map(({ key, name, price }) => `${addOns[key]}x ${name} (+$${addOns[key] * price}AUD)`);

    return `Hi! I'd like to order ${mealBoxCount} Customized Meal Box(es).\n\n` +
      `Included items:\n- Rice\n- Fry Item\n- Curry\n- Sambar\n- Sweet\n- Roti\n- Papad\n\n` +
      (selectedAddOns.length > 0 ? `Add-ons:\n${selectedAddOns.map((addon) => `- ${addon}`).join("\n")}\n\n` : "") +
      `Total: A$${calculateCustomizedMealBoxPrice().toFixed(2)}`;
  };

  return (
    <section id="mealbox" className="py-20 px-4 bg-orange-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-900">Daily Meal Box</h2>
        <div 
          className="max-w-7xl mx-auto rounded-2xl shadow-xl overflow-hidden p-12 bg-cover bg-center" 
          style={{ backgroundImage: "url('')" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-14">
            {/* Standard Meal Section */}
            <div className="flex-1">
              <h3 className="text-3xl font-semibold mb-6">Standard Meal Box - ${baseMealBoxPrice}AUD</h3>
              <ul className="space-y-6">
                {[
                  { name: "Rice", img: addOnList[3].img },
                  { name: "Fry Item", img: addOnList[4].img },
                  { name: "Curry", img: addOnList[2].img },
                  { name: "Sambar", img: addOnList[5].img },
                  { name: "Sweet", img: addOnList[1].img },
                  { name: "Roti", img: addOnList[6].img },
                  { name: "Papad", img: addOnList[7].img },
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <img src={item.img} alt={item.name} className="w-28 h-28 mr-6 rounded-lg" />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Add-ons Section */}
            <div className="w-full md:w-auto">
              <div className="bg-orange-100 p-8 rounded-xl">
                <h4 className="text-2xl font-semibold mb-6">Add-ons</h4>
                <ul className="space-y-6">
                  {addOnList.map(({ key, name, price, img }) => (
                    <li key={key} className="flex items-center justify-between text-lg">
                      <label className="flex items-center gap-4">
                        <img src={img} alt={name} className="w-20 h-20 rounded-lg" />
                        <span>{name} (${price}AUD)</span>
                      </label>
                      <div className="flex items-center space-x-3">
                        <button
                          className="p-2 bg-red-500 text-white rounded-full"
                          onClick={() => handleAddOnChange(key, "remove")}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center">{addOns[key]}</span>
                        <button
                          className="p-2 bg-green-500 text-white rounded-full"
                          onClick={() => handleAddOnChange(key, "add")}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Total Cost Display */}
          <div className="text-center mt-8">
            <h3 className="text-2xl font-semibold text-orange-900">Total: ${calculateCustomizedMealBoxPrice().toFixed(2)}AUD</h3>
          </div>

          
           

          {/* WhatsApp Order Button for Standard Meal Box */}
          <div className="mt-8 text-center">
            <WhatsAppButton
              number="+61450056387"
              message={`Hi! I'd like to order 1 Standard Daily Meal Box.\n\n` +
                `Included items:\n- Rice\n- Fry Item\n- Curry\n- Sambar\n- Sweet\n- Roti\n- Papad\n\n` +
                `Total: A$${baseMealBoxPrice.toFixed(2)}`}
              label="Chat for Standard Meal Box"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealBox;