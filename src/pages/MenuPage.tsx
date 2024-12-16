import React, { useState } from 'react';
import OrderModal from '../components/menu/OrderModal';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
}

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'starters', name: 'Starters' },
    { id: 'mains', name: 'Main Course' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'drinks', name: 'Drinks' },
  ];

  const menuItems: MenuItem[] = [
    {
      name: "Bruschetta",
      description: "Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and olive oil",
      price: "850",
      category: "starters",
      image: "/img/Bruschetta-with-Mozzarella-SQUARE3.jpg"
    },
    {
      name: "Caesar Salad",
      description: "Crisp romaine lettuce, parmesan cheese, croutons, and our homemade Caesar dressing",
      price: "950",
      category: "starters",
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon with herbs and lemon butter sauce, served with seasonal vegetables",
      price: "2800",
      category: "mains",
      image: "https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Filet Mignon",
      description: "Prime cut tenderloin with red wine reduction, served with roasted potatoes",
      price: "3400",
      category: "mains",
      image: "/img/FilletMignon.webp"
    },
    {
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
      price: "750",
      category: "desserts",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Craft Cocktails",
      description: "Selection of handcrafted cocktails made with premium spirits",
      price: "1200",
      category: "drinks",
      image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const handleOrderClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
              ${
                activeCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600'
              }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 flex"
          >
            {item.image && (
              <div className="w-1/3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1 p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-black">
                  {item.name}
                </h3>
                <span className="text-lg font-bold text-black">
                  KSh {item.price}
                </span>
              </div>
              <p className="text-black mb-4">{item.description}</p>
              <button 
                onClick={() => handleOrderClick(item)}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Modal */}
      {selectedItem && (
        <OrderModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          item={selectedItem}
        />
      )}
    </div>
  );
};

export default MenuPage;