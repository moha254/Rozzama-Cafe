import { FC, useState, FormEvent } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim()) {
      Swal.fire({
        title: "Error",
        text: "Please enter your name",
        icon: "error"
      });
      return;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      Swal.fire({
        title: "Error",
        text: "Please enter a valid email address",
        icon: "error"
      });
      return;
    }

    if (!formData.message.trim()) {
      Swal.fire({
        title: "Error",
        text: "Please enter your message",
        icon: "error"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Show success message
      Swal.fire({
        title: "Message Sent!",
        text: "Thank you for contacting us. We'll get back to you soon!",
        icon: "success"
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Failed to send message. Please try again.",
        icon: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-lg p-8 rounded-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-black font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-black font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-black font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Your message"
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 text-black px-6 py-3 rounded-md hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white shadow-lg p-8 rounded-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Location</h3>
                  <p className="text-gray-600">
                    123 Culinary Street<br />
                    Foodie City, FC 12345
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg p-8 rounded-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Phone</h3>
                  <p className="text-gray-600">
                    (555) 123-4567<br />
                    Mon-Sun: 7:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg p-8 rounded-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Email</h3>
                  <p className="text-gray-600">
                    info@rozzamacafe.com<br />
                    support@rozzamacafe.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
