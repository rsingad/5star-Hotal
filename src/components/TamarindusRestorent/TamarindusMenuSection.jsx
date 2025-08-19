import React from 'react';

function TamarindusMenuSection() {
  const menuCategories = [
    {
      name: "Starters",
      items: [
        { name: "Paneer Tikka", description: "Cottage cheese marinated in aromatic spices and grilled to perfection.", price: "₹450", imageUrl: "https://images.pexels.com/photos/3928854/pexels-photo-3928854.png" },
        { name: "Crispy Corn", description: "Golden fried corn kernels tossed with a blend of exotic spices and herbs.", price: "₹380", imageUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Chicken Satay", description: "Succulent grilled chicken skewers served with a rich, creamy peanut sauce.", price: "₹550", imageUrl: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Vegetable Spring Rolls", description: "Crispy rolls filled with fresh vegetables, served with sweet chili dip.", price: "₹320", imageUrl: "https://images.pexels.com/photos/15801053/pexels-photo-15801053.jpeg" },
      ]
    },
    {
      name: "Main Course (Indian Delicacies)",
      items: [
        { name: "Butter Chicken", description: "Tender chicken pieces simmered in a rich, creamy tomato and butter gravy.", price: "₹750", imageUrl: "https://images.pexels.com/photos/9609844/pexels-photo-9609844.jpeg" },
        { name: "Dal Makhani", description: "Slow-cooked black lentils, delicately flavored with butter, cream, and spices.", price: "₹620", imageUrl: "https://images.pexels.com/photos/12737918/pexels-photo-12737918.jpeg" },
        { name: "Paneer Butter Masala", description: "Cubes of fresh cottage cheese in a luscious, mildly spiced tomato and cashew gravy.", price: "₹680", imageUrl: "https://images.pexels.com/photos/29850004/pexels-photo-29850004.jpeg" },
        { name: "Mutton Rogan Josh", description: "A classic Kashmiri lamb curry, slow-cooked to tender perfection with aromatic spices.", price: "₹850", imageUrl: "https://images.pexels.com/photos/6646034/pexels-photo-6646034.jpeg" },
      ]
    },
    {
      name: "Main Course (Global Flavors)",
      items: [
        { name: "Pesto Pasta", description: "Al dente pasta tossed in homemade basil pesto, sun-dried tomatoes, and parmesan.", price: "₹600", imageUrl: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Thai Green Curry", description: "Authentic Thai green curry with coconut milk, fresh vegetables, and your choice of chicken or tofu.", price: "₹700", imageUrl: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Grilled Salmon", description: "Perfectly pan-seared salmon fillet, served with a delicate lemon-butter sauce and seasonal vegetables.", price: "₹950", imageUrl: "https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Mushroom Risotto", description: "Creamy Arborio rice cooked with wild mushrooms, white wine, and parmesan cheese.", price: "₹720", imageUrl: "https://images.pexels.com/photos/31819805/pexels-photo-31819805.jpeg" },
      ]
    },
    {
      name: "Desserts (Sweet Endings)",
      items: [
        { name: "Gulab Jamun", description: "Soft, deep-fried milk solids dumplings, soaked in warm rose-flavored sugar syrup.", price: "₹250", imageUrl: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Tiramisu", description: "A classic Italian dessert with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa.", price: "₹350", imageUrl: "https://images.pexels.com/photos/1400057/pexels-photo-1400057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Chocolate Lava Cake", description: "Warm, decadent chocolate cake with a molten chocolate center, served with vanilla ice cream.", price: "₹400", imageUrl: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Cheesecake", description: "Creamy New York-style cheesecake with a berry compote.", price: "₹380", imageUrl: "https://images.pexels.com/photos/3185509/pexels-photo-3185509.png" },
      ]
    },
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 text-[#1A2C42]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#1A2C42] mb-16">Our Exquisite Menu</h2>
        {menuCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-16">
            {/* Enhanced Category Heading */}
            <div className="inline-block bg-[#0A2E50] text-[#DAA520] px-8 py-4 rounded-full shadow-lg mb-10 transition-all duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-3xl sm:text-4xl font-serif font-bold">
                {category.name}
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white p-0 rounded-xl shadow-xl text-left transform hover:scale-102 transition duration-300 overflow-hidden"> {/* Removed padding here, added overflow-hidden */}
                  {item.imageUrl && ( // Conditionally render image if URL exists
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-t-xl mb-4" // Fixed height, cover, top rounded corners
                    />
                  )}
                  <div className="p-8 pt-0"> {/* Added padding back to content div, removed top padding */}
                    <h4 className="text-2xl font-semibold text-[#0A2E50] mb-3">{item.name}</h4>
                    <p className="text-gray-700 mb-3 leading-relaxed">{item.description}</p>
                    <p className="text-xl font-bold text-[#DAA520]">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <p className="text-lg mt-12 text-gray-600">
          *Please inform your server of any allergies or dietary restrictions. Prices are subject to change.
        </p>
      </div>
    </section>
  );
}

export default TamarindusMenuSection;
