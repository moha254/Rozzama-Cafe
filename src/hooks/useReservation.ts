import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';

interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
}

export function useReservation() {
  const submitReservation = async (data: ReservationData) => {
    try {
      // In a real application, this would make an API call
      console.log('Submitting reservation:', data);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Show success message
      Swal.fire({
        title: "Reservation Confirmed!",
        text: "Your table has been successfully reserved.",
        icon: "success"
      });

      return true;
    } catch (error) {
      console.error('Error submitting reservation:', error);
      
      Swal.fire({
        title: "Error",
        text: "Failed to make reservation. Please try again.",
        icon: "error"
      });

      return false;
    }
  };

  return { submitReservation };
}