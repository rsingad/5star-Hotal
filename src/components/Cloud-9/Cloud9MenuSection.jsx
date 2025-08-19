import React from 'react';

function Cloud9MenuSection() {
  const menuCategories = [
    {
      name: "Artisan Coffee",
      items: [
        { name: "Espresso", description: "Rich, concentrated coffee shot.", price: "₹200", imageUrl: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Cappuccino", description: "Espresso with steamed milk and a deep layer of foam.", price: "₹280", imageUrl: "https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Latte", description: "Espresso with steamed milk and a thin layer of foam.", price: "₹280", imageUrl: "https://images.pexels.com/photos/3124103/pexels-photo-3124103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Americano", description: "Espresso diluted with hot water.", price: "₹250", imageUrl: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      ]
    },
    {
      name: "Premium Teas",
      items: [
        { name: "Earl Grey", description: "Classic black tea with bergamot oil.", price: "₹220", imageUrl: "https://images.pexels.com/photos/1016629/pexels-photo-1016629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Green Tea Sencha", description: "Refreshing Japanese green tea.", price: "₹220", imageUrl: "https://images.pexels.com/photos/236173/pexels-photo-236173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Chamomile Infusion", description: "Soothing herbal tea, perfect for relaxation.", price: "₹200", imageUrl: "https://images.pexels.com/photos/1194031/pexels-photo-1194031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Masala Chai", description: "Traditional Indian spiced tea with milk.", price: "₹250", imageUrl: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      ]
    },
    {
      name: "Delectable Pastries",
      items: [
        { name: "Croissant", description: "Flaky, buttery pastry, perfect with coffee.", price: "₹180", imageUrl: "https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Blueberry Muffin", description: "Moist muffin bursting with fresh blueberries.", price: "₹220", imageUrl: "https://images.pexels.com/photos/1779414/pexels-photo-1779414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Chocolate Danish", description: "Sweet pastry with a rich chocolate filling.", price: "₹250", imageUrl: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Almond Biscotti", description: "Crispy Italian cookies, ideal for dipping.", price: "₹150", imageUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      ]
    },
    {
      name: "Savory Bites",
      items: [
        { name: "Vegetable Quiche", description: "Savory tart with seasonal vegetables and cheese.", price: "₹350", imageUrl: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Chicken Sandwich", description: "Grilled chicken with fresh lettuce and tomato on artisanal bread.", price: "₹420", imageUrl: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Mini Pizzas", description: "Assorted mini pizzas with fresh toppings.", price: "₹380", imageUrl: "https://images.pexels.com/photos/2147465/pexels-photo-2147465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "French Fries", description: "Crispy golden fries, served with a selection of dips.", price: "₹280", imageUrl: "https://images.pexels.com/photos/1153202/pexels-photo-1153202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      ]
    },
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-16">
          Our Cloud 9 Menu
        </h2>
        {menuCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-16">
            <div className="inline-block bg-blue-800 text-blue-200 px-8 py-4 rounded-full shadow-lg mb-10 transition-all duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-3xl sm:text-4xl font-bold">
                {category.name}
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white p-0 rounded-xl shadow-xl text-left transform hover:scale-102 transition duration-300 overflow-hidden">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-t-xl mb-4"
                    />
                  )}
                  <div className="p-8 pt-0">
                    <h4 className="text-2xl font-semibold text-blue-800 mb-3">{item.name}</h4>
                    <p className="text-gray-700 mb-3 leading-relaxed">{item.description}</p>
                    <p className="text-xl font-bold text-blue-600">{item.price}</p> {/* Blue price for Cloud 9 */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <p className="text-lg mt-12 text-gray-600">
          *Prices are subject to change. Please inform our staff of any allergies or dietary restrictions.
        </p>
      </div>
    </section>
  );
}

export default Cloud9MenuSection;
