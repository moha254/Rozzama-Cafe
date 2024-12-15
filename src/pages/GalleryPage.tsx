import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  featured?: boolean;
  description: string;
  tags?: string[];
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [loaded, setLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const categories = [
    { id: 'all', name: 'All', icon: '🍽️' },
    { id: 'food', name: 'Food', icon: '🍝' },
    { id: 'interior', name: 'Interior', icon: '🏰' },
    { id: 'events', name: 'Events', icon: '🎉' },
    { id: 'drinks', name: 'Drinks', icon: '🍷' }
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/img/Bruschetta-with-Mozzarella-SQUARE3.jpg",
      alt: "Bruschetta with Mozzarella",
      category: "food",
      featured: true,
      description: "Fresh tomatoes, mozzarella, and basil on toasted bread, drizzled with balsamic glaze. A perfect start to your dining experience.",
      tags: ['appetizer', 'vegetarian', 'italian']
    },
    {
      id: 2,
      src: "/img/FilletMignon.webp",
      alt: "Fillet Mignon",
      category: "food",
      featured: true,
      description: "Premium cut beef tenderloin, perfectly grilled to your preference. Served with seasonal vegetables and red wine reduction.",
      tags: ['main course', 'beef', 'grill']
    },
    {
      id: 3,
      src: "/img/tenderloin-1.jpg",
      alt: "Beef Tenderloin",
      category: "food",
      description: "Expertly prepared beef tenderloin with a rich wine reduction sauce.",
      tags: ['main course', 'beef', 'signature']
    },
    {
      id: 4,
      src: "/img/Buttered-Tomatoes.webp",
      alt: "Buttered Tomatoes",
      category: "food",
      description: "Garden-fresh tomatoes sautéed in herb butter, a perfect side dish.",
      tags: ['side dish', 'vegetarian', 'fresh']
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1560963689-b5682b6440f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      alt: "Premium Wine Selection",
      category: "drinks",
      featured: true,
      description: "Curated selection of fine wines from around the world.",
      tags: ['wine', 'drinks', 'alcohol']
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-1.2.1&auto=format&fit=crop&w=1586&q=80",
      alt: "Signature Cocktails",
      category: "drinks",
      description: "Handcrafted cocktails made with premium spirits and fresh ingredients.",
      tags: ['cocktails', 'drinks', 'alcohol']
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      alt: "Artisan Coffee",
      category: "drinks",
      description: "Specialty coffee drinks prepared by our expert baristas.",
      tags: ['coffee', 'drinks', 'hot beverages']
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      alt: "Main Dining Room",
      category: "interior",
      featured: true,
      description: "Elegant main dining space with modern decor and ambient lighting.",
      tags: ['interior', 'dining room', 'ambiance']
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      alt: "Private Dining Suite",
      category: "interior",
      description: "Intimate private dining room perfect for special occasions and gatherings.",
      tags: ['interior', 'private dining', 'events']
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      alt: "Restaurant Bar",
      category: "interior",
      description: "Sophisticated bar area featuring premium spirits and comfortable seating.",
      tags: ['interior', 'bar', 'drinks']
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      alt: "Private Event",
      category: "events",
      featured: true,
      description: "Elegant private event setup with custom decorations and fine dining service.",
      tags: ['events', 'private', 'celebration']
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      alt: "Wedding Reception",
      category: "events",
      featured: true,
      description: "Elegant wedding reception venue with crystal chandeliers, fine table settings, and romantic ambiance.",
      tags: ['events', 'wedding', 'celebration', 'luxury']
    }
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleImageClick = (image: GalleryImage) => {
    Swal.fire({
      imageUrl: image.src,
      imageAlt: image.alt,
      title: image.alt,
      html: `
        <div class="text-left">
          <p class="text-gray-300 mb-4">${image.description}</p>
          ${image.tags ? `
            <div class="flex flex-wrap gap-2 mt-3">
              ${image.tags.map(tag => `
                <span class="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300">#${tag}</span>
              `).join('')}
            </div>
          ` : ''}
          ${image.featured ? '<span class="text-yellow-400 mt-4 block">⭐ Featured Item</span>' : ''}
        </div>
      `,
      showCloseButton: true,
      showConfirmButton: false,
      width: '800px',
      background: '#1a1a1a',
      color: '#ffffff',
      imageWidth: '100%',
      imageHeight: 'auto',
      customClass: {
        popup: 'gallery-modal rounded-lg overflow-hidden',
        image: 'rounded-lg shadow-xl',
        title: 'font-semibold text-xl mb-3',
        htmlContainer: 'text-sm'
      }
    });
  };

  const filteredImages = galleryImages
    .filter(img => activeCategory === 'all' || img.category === activeCategory)
    .filter(img => {
      if (!searchTerm) return true;
      const searchLower = searchTerm.toLowerCase();
      return (
        img.alt.toLowerCase().includes(searchLower) ||
        img.description.toLowerCase().includes(searchLower) ||
        img.tags?.some(tag => tag.toLowerCase().includes(searchLower))
      );
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 transform transition-all duration-500 hover:scale-105">
            Our <span className="text-primary-600">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our culinary artistry, elegant spaces, and memorable moments
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search by name, description, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            />
            <button
              onClick={() => setSearchTerm('')}
              className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-opacity duration-300 ${
                searchTerm ? 'opacity-100' : 'opacity-0'
              }`}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 flex items-center gap-2 transform hover:scale-105
                ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 shadow-md'
                }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className={`relative group cursor-pointer overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105
                ${image.featured ? 'ring-2 ring-primary-500 ring-offset-2' : ''}`}
              onClick={() => handleImageClick(image)}
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">
                      {image.alt}
                      {image.featured && <span className="ml-2 text-yellow-400">⭐</span>}
                    </h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-500 mb-4">
              {searchTerm
                ? `No images found for "${searchTerm}"`
                : 'No images found in this category'}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchTerm('');
              }}
              className="text-primary-600 hover:text-primary-700 font-medium text-lg"
            >
              View all images
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
