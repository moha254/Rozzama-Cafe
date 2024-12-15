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
  lowQuality?: string;
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [loaded, setLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const categories = [
    { id: 'all', name: 'All', icon: '🍽️' },
    { id: 'food', name: 'Food', icon: '🍝' },
    { id: 'interior', name: 'Interior', icon: '🏰' },
    { id: 'events', name: 'Events', icon: '🎉' },
    { id: 'drinks', name: 'Beverages', icon: '☕' }
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/img/Bruschetta-with-Mozzarella-SQUARE3.jpg",
      alt: "Bruschetta with Mozzarella",
      category: "food",
      featured: true,
      description: "Fresh tomatoes, mozzarella, and basil on toasted bread, drizzled with balsamic glaze. A perfect start to your dining experience.",
      tags: ['appetizer', 'vegetarian', 'italian'],
      lowQuality: "/img/Bruschetta-with-Mozzarella-SQUARE3.jpg?w=20&q=10"
    },
    {
      id: 2,
      src: "/img/FilletMignon.webp",
      alt: "Fillet Mignon",
      category: "food",
      featured: true,
      description: "Premium cut beef tenderloin, perfectly grilled to your preference. Served with seasonal vegetables and red wine reduction.",
      tags: ['main course', 'beef', 'grill'],
      lowQuality: "/img/FilletMignon.webp?w=20&q=10"
    },
    {
      id: 3,
      src: "/img/tenderloin-1.jpg",
      alt: "Beef Tenderloin",
      category: "food",
      description: "Expertly prepared beef tenderloin with a rich wine reduction sauce.",
      tags: ['main course', 'beef', 'signature'],
      lowQuality: "/img/tenderloin-1.jpg?w=20&q=10"
    },
    {
      id: 4,
      src: "/img/Buttered-Tomatoes.webp",
      alt: "Buttered Tomatoes",
      category: "food",
      description: "Garden-fresh tomatoes sautéed in herb butter, a perfect side dish.",
      tags: ['side dish', 'vegetarian', 'fresh'],
      lowQuality: "/img/Buttered-Tomatoes.webp?w=20&q=10"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      alt: "Fresh Fruit Smoothies",
      category: "drinks",
      featured: true,
      description: "Refreshing smoothies made with fresh seasonal fruits and natural ingredients.",
      tags: ['beverages', 'healthy', 'fresh'],
      lowQuality: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-1.2.1&auto=format&fit=crop&w=20&q=10"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      alt: "Artisan Mocktails",
      category: "drinks",
      description: "Creative non-alcoholic cocktails crafted with fresh juices and premium ingredients.",
      tags: ['beverages', 'mocktails', 'refreshing'],
      lowQuality: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=20&q=10"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      alt: "Artisan Coffee",
      category: "drinks",
      description: "Specialty coffee drinks prepared by our expert baristas.",
      tags: ['coffee', 'beverages', 'hot drinks'],
      lowQuality: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=20&q=10"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      alt: "Main Dining Room",
      category: "interior",
      featured: true,
      description: "Elegant main dining space with modern decor and ambient lighting.",
      tags: ['interior', 'dining room', 'ambiance'],
      lowQuality: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=20&q=10"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      alt: "Private Dining Suite",
      category: "interior",
      description: "Intimate private dining room perfect for special occasions and gatherings.",
      tags: ['interior', 'private dining', 'events'],
      lowQuality: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=20&q=10"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      alt: "Outdoor Terrace",
      category: "interior",
      description: "Beautiful outdoor dining area surrounded by lush greenery.",
      tags: ['interior', 'outdoor', 'dining'],
      lowQuality: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=20&q=10"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      alt: "Private Event",
      category: "events",
      featured: true,
      description: "Elegant private event setup with custom decorations and fine dining service.",
      tags: ['events', 'private', 'celebration'],
      lowQuality: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=20&q=10"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      alt: "Wedding Reception",
      category: "events",
      featured: true,
      description: "Elegant wedding reception venue with crystal chandeliers, fine table settings, and romantic ambiance.",
      tags: ['events', 'wedding', 'celebration', 'luxury'],
      lowQuality: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=20&q=10"
    }
  ];

  // Preload images
  useEffect(() => {
    const preloadImage = (src: string) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, src]));
      };
      img.src = src;
    };

    galleryImages.forEach(image => {
      if (image.featured) {
        preloadImage(image.src);
      }
    });
  }, []);

  const handleImageClick = (image: GalleryImage) => {
    Swal.fire({
      title: image.alt,
      imageUrl: image.src,
      imageAlt: image.alt,
      html: `
        <div class="text-left">
          <p class="text-gray-700 mb-4">${image.description}</p>
          ${image.tags ? `
          <div class="flex flex-wrap gap-2">
            ${image.tags.map(tag => `
              <span class="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600">#${tag}</span>
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
                {/* Low quality placeholder */}
                {image.lowQuality && (
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      loadedImages.has(image.src) ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{
                      backgroundImage: `url(${image.lowQuality})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'blur(10px)',
                      transform: 'scale(1.1)'
                    }}
                  />
                )}
                
                {/* High quality image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    loadedImages.has(image.src) 
                      ? 'opacity-100 group-hover:scale-110' 
                      : 'opacity-0'
                  }`}
                  loading="lazy"
                  decoding="async"
                  fetchPriority={image.featured ? "high" : "low"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onLoad={() => setLoadedImages(prev => new Set([...prev, image.src]))}
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
