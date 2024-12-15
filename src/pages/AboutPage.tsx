import { Award, Clock, Users, Utensils } from 'lucide-react';

export default function AboutPage() {
  const features = [
    {
      icon: <Utensils className="w-6 h-6 text-primary-600" />,
      title: "Culinary Excellence",
      description: "Our expert chefs create exceptional dishes using the finest ingredients and innovative techniques."
    },
    {
      icon: <Users className="w-6 h-6 text-primary-600" />,
      title: "Dedicated Service",
      description: "Our professional staff ensures every guest receives personalized, attentive service."
    },
    {
      icon: <Award className="w-6 h-6 text-primary-600" />,
      title: "Award Winning",
      description: "Recognized for our outstanding cuisine and service with multiple culinary awards."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-600" />,
      title: "Rich Heritage",
      description: "Over 20 years of delivering unforgettable dining experiences to our valued guests."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary-600">Story</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A journey of passion, dedication, and culinary excellence that began over two decades ago.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Crafting <span className="text-primary-600">Memorable</span> Dining Experiences
            </h2>
            <p className="text-gray-600 mb-6">
              Since our establishment in 2000, we have been dedicated to providing an exceptional
              dining experience that combines innovative cuisine with warm hospitality. Our
              restaurant has grown from a small family-owned establishment to one of the most
              respected culinary destinations in the city.
            </p>
            <p className="text-gray-600">
              Every dish we serve is crafted with passion, using only the finest locally-sourced
              ingredients. Our menu is a reflection of our commitment to culinary excellence,
              blending traditional techniques with contemporary creativity.
            </p>
          </div>
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt="Restaurant interior"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-primary-600">Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our talented team of culinary professionals is dedicated to creating
              exceptional dining experiences for every guest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Chef Michael Roberts",
                role: "Executive Chef",
                image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Sarah Chen",
                role: "Pastry Chef",
                image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "David Wilson",
                role: "Restaurant Manager",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-600 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
