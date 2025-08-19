import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle, ChevronLeft, IndianRupee, Users } from 'lucide-react';
import { roomsData } from './roomsData';

/**
 * RoomDetail Component
 * Displays the details of a single room and handles the booking process.
 * This component is now optimized for mobile devices with a responsive layout
 * and touch-friendly elements. It uses the provided CSS variables for styling.
 */
function RoomDetail() {
  // Get the room name from the URL parameters
  const { roomName } = useParams();
  const navigate = useNavigate();

  // Find the corresponding room data from the imported array
  const room = roomsData.find(r => r.path === roomName);

  // State to manage the visibility of the booking modal
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  // State to manage the currently displayed main image. Defaults to the first image.
  const [mainImage, setMainImage] = useState(room?.imageUrl);
  // State to manage form data for the booking modal
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
  });
  // State to display a booking confirmation or error message
  const [bookingStatus, setBookingStatus] = useState('');
  // State for a loading indicator during the mock booking process
  const [isLoading, setIsLoading] = useState(false);

  // Update the main image state if the room changes (e.g., if navigating to a different room)
  useEffect(() => {
    if (room) {
      setMainImage(room.imageUrl);
    }
  }, [room]);


  // If no room is found based on the URL parameter, display an error message
  if (!room) {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-4"
        style={{ backgroundColor: 'var(--roomdetail-background-color)' }}
      >
        <h1
          className="text-3xl font-serif text-gray-700"
          style={{ color: 'var(--roomdetail-primary-text-color)' }}
        >
          Room not found.
        </h1>
      </div>
    );
  }

  // Handle changes to the input fields in the booking form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Simulate a booking submission with a delay and validation
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading animation
    setBookingStatus(''); // Clear any previous status messages

    // Basic date validation: check-out date must be after check-in date
    if (new Date(formData.checkOutDate) <= new Date(formData.checkInDate)) {
      setBookingStatus('Error: Check-out date must be after check-in date.');
      setIsLoading(false);
      return;
    }

    // Simulate a network request with a 2-second delay
    setTimeout(() => {
      console.log('Booking details:', {
        roomName: room.name,
        ...formData
      });
      setIsLoading(false); // Stop loading animation
      setBookingStatus('Booking successful! A confirmation email has been sent to your inbox.');
      setIsBookingModalOpen(false); // Close the modal
    }, 2000);
  };

  return (
    <div
      className="min-h-screen font-sans antialiased pt-24"
      style={{ backgroundColor: 'var(--roomdetail-background-color)' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* "Go Back" button to navigate to the previous page */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 md:mb-8 transition-colors duration-200 font-semibold"
          style={{ color: 'var(--roomdetail-secondary-text-color)' }}
        >
          <ChevronLeft size={24} className="mr-2" />
          Go Back
        </button>

        <div
          className="rounded-2xl shadow-xl overflow-hidden p-6 md:p-12"
          style={{ backgroundColor: 'var(--roomdetail-card-bg-color)' }}
        >
          {/* Main content layout with responsive stacking */}
          <div className="md:flex md:items-start md:space-x-12">
            {/* Image section */}
            <div className="md:w-1/2">
              {/* Main room image */}
              <img
                src={mainImage}
                alt={room.name}
                className="rounded-xl w-full h-64 md:h-96 object-cover mb-4 shadow-lg transition-transform duration-300 transform hover:scale-105"
              />
              {/* Image Gallery Thumbnails for horizontal scrolling on mobile */}
              <div className="flex space-x-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
                {/* Main image thumbnail */}
                <img
                  src={room.imageUrl}
                  alt={`${room.name} 1`}
                  onClick={() => setMainImage(room.imageUrl)}
                  className={`flex-shrink-0 w-24 h-16 object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-110 border-2 ${
                    mainImage === room.imageUrl ? 'border-indigo-500' : 'border-transparent'
                  }`}
                />
                {/* Secondary image thumbnails */}
                {room.secondaryImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${room.name} ${idx + 2}`}
                    onClick={() => setMainImage(img)}
                    className={`flex-shrink-0 w-24 h-16 object-cover rounded-lg cursor-pointer transition-transform duration-200 hover:scale-110 border-2 ${
                      mainImage === img ? 'border-indigo-500' : 'border-transparent'
                    }`}
                  />
                ))}
              </div>
            </div>
            {/* Room details section */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              {/* Room name and details */}
              <h1
                className="text-3xl md:text-4xl font-serif font-bold mb-2"
                style={{ color: 'var(--roomdetail-primary-text-color)' }}
              >
                {room.name}
              </h1>
              <div className="flex items-center space-x-4 md:space-x-6 mb-4 md:mb-6">
                <p className="text-xl md:text-2xl font-bold flex items-center" style={{ color: 'var(--roomdetail-accent-color)' }}>
                  <IndianRupee size={20} className="mr-1 md:mr-1" />
                  {room.price}
                </p>
                <p className="text-sm md:text-lg font-semibold flex items-center" style={{ color: 'var(--roomdetail-secondary-text-color)' }}>
                  <Users size={18} className="mr-1 md:mr-1" />
                  Max {room.maxOccupancy} Guests
                </p>
              </div>
              <p
                className="text-sm md:text-lg mb-6 leading-relaxed"
                style={{ color: 'var(--roomdetail-secondary-text-color)' }}
              >
                {room.description}
              </p>
              {/* Room features list */}
              <h3
                className="text-xl md:text-2xl font-semibold mb-3"
                style={{ color: 'var(--roomdetail-primary-text-color)' }}
              >
                Room Features
              </h3>
              <ul className="text-left space-y-2 mb-6 md:mb-8" style={{ color: 'var(--roomdetail-secondary-text-color)' }}>
                {room.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm md:text-base">
                    <CheckCircle
                      size={18}
                      className="mr-2 mt-1 flex-shrink-0"
                      style={{ color: 'var(--roomdetail-accent-color)' }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              {/* "Book Now" button */}
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="inline-block w-full md:w-auto px-10 py-3 md:py-4 rounded-full font-bold text-white transition-all duration-300 shadow-lg"
                style={{
                  backgroundColor: 'var(--roomdetail-booking-btn-bg-color)',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--roomdetail-booking-btn-hover-color)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--roomdetail-booking-btn-bg-color)'}
              >
                Book Now
              </button>
              {/* Booking status message (success or error) */}
              {bookingStatus && (
                <div
                  className={`mt-4 p-4 rounded-lg font-semibold text-sm md:text-base ${bookingStatus.includes('successful') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                  style={{
                    backgroundColor: bookingStatus.includes('successful') ? 'var(--roomdetail-success-bg-color)' : 'var(--roomdetail-error-bg-color)',
                    color: bookingStatus.includes('successful') ? 'var(--roomdetail-success-text-color)' : 'var(--roomdetail-error-text-color)'
                  }}
                >
                  {bookingStatus}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal (hidden by default) */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-70 p-4 transition-opacity duration-300">
          <div
            className="rounded-2xl shadow-2xl w-full max-w-lg p-6 md:p-8 transform scale-100 transition-transform duration-300"
            style={{ backgroundColor: 'var(--roomdetail-modal-bg-color)' }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2
                className="text-2xl md:text-3xl font-serif font-bold"
                style={{ color: 'var(--roomdetail-primary-text-color)' }}
              >
                Book {room.name}
              </h2>
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 rounded-full"
                aria-label="Close booking form"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleBookingSubmit}>
              {/* Form input fields */}
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--roomdetail-secondary-text-color)' }}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-sm md:text-base"
                  style={{
                    borderColor: 'var(--roomdetail-input-border-color)',
                    backgroundColor: 'var(--roomdetail-input-bg-color)',
                    color: 'var(--roomdetail-primary-text-color)',
                    '--tw-ring-color': 'var(--roomdetail-accent-color)'
                  }}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--roomdetail-secondary-text-color)' }}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-sm md:text-base"
                  style={{
                    borderColor: 'var(--roomdetail-input-border-color)',
                    backgroundColor: 'var(--roomdetail-input-bg-color)',
                    color: 'var(--roomdetail-primary-text-color)',
                    '--tw-ring-color': 'var(--roomdetail-accent-color)'
                  }}
                  required
                />
              </div>
              <div className="mb-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full md:w-1/2">
                  <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--roomdetail-secondary-text-color)' }}>Check-in Date</label>
                  <input
                    type="date"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-sm md:text-base"
                    style={{
                      borderColor: 'var(--roomdetail-input-border-color)',
                      backgroundColor: 'var(--roomdetail-input-bg-color)',
                      color: 'var(--roomdetail-primary-text-color)',
                      '--tw-ring-color': 'var(--roomdetail-accent-color)'
                    }}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--roomdetail-secondary-text-color)' }}>Check-out Date</label>
                  <input
                    type="date"
                    name="checkOutDate"
                    value={formData.checkOutDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-sm md:text-base"
                    style={{
                      borderColor: 'var(--roomdetail-input-border-color)',
                      backgroundColor: 'var(--roomdetail-input-bg-color)',
                      color: 'var(--roomdetail-primary-text-color)',
                      '--tw-ring-color': 'var(--roomdetail-accent-color)'
                    }}
                    required
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full text-white px-8 py-3 rounded-full font-bold shadow-md transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--roomdetail-booking-btn-bg-color)',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--roomdetail-booking-btn-hover-color)'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--roomdetail-booking-btn-bg-color)'}
                  disabled={isLoading}
                >
                  {isLoading ? 'Processing...' : 'Confirm Booking'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoomDetail;
