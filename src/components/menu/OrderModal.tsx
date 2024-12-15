import { X } from 'lucide-react';
import { useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    name: string;
    price: string;
    image?: string;
  };
}

export default function OrderModal({ isOpen, onClose, item }: OrderModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Show success message
    Swal.fire({
      title: "Order Placed!",
      text: "Your order has been successfully placed.",
      icon: "success"
    });
    
    // Reset form
    setQuantity(1);
    setSpecialInstructions('');
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Order Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-4">
          <div className="flex items-center gap-4 mb-6">
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
            )}
            <div>
              <h3 className="text-lg font-semibold text-green-600">{item.name}</h3>
              <p className="text-gray-600">KSh {item.price}</p>
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="bg-gray-100 text-gray-600 px-3 py-2 rounded-md hover:bg-gray-200 transition"
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 text-center border border-gray-300 rounded-md px-3 py-2"
                min="1"
              />
              <button
                type="button"
                onClick={() => setQuantity(q => q + 1)}
                className="bg-gray-100 text-gray-600 px-3 py-2 rounded-md hover:bg-gray-200 transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Special Instructions */}
          <div className="mb-6">
            <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-2">
              Special Instructions
            </label>
            <textarea
              id="instructions"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 h-24 resize-none"
              placeholder="Any special requests?"
            />
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-600">Total:</span>
            <span className="text-xl font-bold text-gray-900">
              KSh {(parseFloat(item.price) * quantity).toLocaleString()}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition disabled:opacity-50"
          >
            {isSubmitting ? 'Placing Order...' : 'Place Order'}
          </button>
        </form>
      </div>
    </div>
  );
}
