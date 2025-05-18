import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import 'react-day-picker/dist/style.css';

const SERVICES = [
  { id: 1, name: 'Classic Cut', duration: 30, price: 35 },
  { id: 2, name: 'Beard Trim', duration: 20, price: 25 },
  { id: 3, name: 'Hot Towel Shave', duration: 45, price: 40 },
  { id: 4, name: 'Hair + Beard Combo', duration: 45, price: 55 },
  { id: 5, name: 'Kids Cut', duration: 30, price: 25 },
  { id: 6, name: 'Senior Cut', duration: 30, price: 30 }
];

const TIME_SLOTS = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'
];

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show loading toast
    toast.loading('Processing your booking...');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show success toast
    toast.success('Booking confirmed! We\'ll see you soon.');
    
    // Reset form
    setSelectedService(null);
    setSelectedDate(undefined);
    setSelectedTime(null);
    setStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      notes: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Book Your Appointment
        </motion.h1>
        
        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((s) => (
              <motion.div 
                key={s}
                className={`w-1/3 text-center ${step === s ? 'text-black' : 'text-gray-400'}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: s * 0.1 }}
              >
                <div 
                  className={`w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center
                    ${step === s ? 'bg-black text-white' : 'bg-gray-200'}`}
                >
                  {s}
                </div>
                <span>
                  {s === 1 ? 'Service' : s === 2 ? 'Date' : 'Details'}
                </span>
              </motion.div>
            ))}
          </div>

          {step === 1 && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {SERVICES.map((service) => (
                <motion.div 
                  key={service.id}
                  className={`p-6 rounded-lg border cursor-pointer transition-all
                    ${selectedService === service.id 
                      ? 'border-black bg-black text-white' 
                      : 'border-gray-200 hover:border-black'}`}
                  onClick={() => {
                    setSelectedService(service.id);
                    setStep(2);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="mb-4">{service.duration} minutes</p>
                  <p className="text-2xl font-bold">${service.price}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">Select Date</h3>
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  fromDate={new Date()}
                  className="border rounded-lg p-4"
                />
              </div>
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h3 className="text-xl font-semibold mb-4">Select Time</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {TIME_SLOTS.map((time) => (
                      <motion.button
                        key={time}
                        className={`p-2 rounded text-sm
                          ${selectedTime === time 
                            ? 'bg-black text-white' 
                            : 'bg-gray-100 hover:bg-gray-200'}`}
                        onClick={() => {
                          setSelectedTime(time);
                          setStep(3);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {time}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {step === 3 && (
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">Your Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Notes</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    ></textarea>
                  </div>
                </div>
              </div>

              <motion.div 
                className="bg-gray-100 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="font-semibold mb-4">Booking Summary</h4>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Service:</span>{' '}
                    {SERVICES.find(s => s.id === selectedService)?.name}
                  </p>
                  <p>
                    <span className="font-medium">Date:</span>{' '}
                    {selectedDate && format(selectedDate, 'MMMM d, yyyy')}
                  </p>
                  <p>
                    <span className="font-medium">Time:</span>{' '}
                    {selectedTime}
                  </p>
                  <p>
                    <span className="font-medium">Price:</span>{' '}
                    ${SERVICES.find(s => s.id === selectedService)?.price}
                  </p>
                </div>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Confirm Booking
              </motion.button>
            </motion.form>
          )}

          {step > 1 && (
            <motion.button
              className="mt-8 text-gray-600 hover:text-black"
              onClick={() => setStep(step - 1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              &larr; Back
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}