import { Clock, MapPin, Phone } from 'lucide-react';

export default function ReservationInfo() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Restaurant Information</h2>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Opening Hours</h3>
            <ul className="space-y-1 text-gray-600">
              <li>Monday - Friday: 7:00 AM - 10:00 PM</li>
              <li>Saturday: 7:00 AM - 11:00 PM</li>
              <li>Sunday: 7:00 AM - 9:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">
              123 Culinary Street<br />
              Foodie City, FC 12345
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Phone className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
            <p className="text-gray-600">
              Phone: (555) 123-4567<br />
              Email: info@rozzamacafe.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}