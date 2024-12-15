import ReservationForm from '../components/reservation/ReservationForm';
import ReservationInfo from '../components/reservation/ReservationInfo';

export default function ReservationPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Make a Reservation</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Book your table online and join us for an unforgettable dining experience
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <ReservationForm />
          <ReservationInfo />
        </div>
      </div>
    </div>
  );
}