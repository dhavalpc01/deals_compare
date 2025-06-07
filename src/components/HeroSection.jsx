import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center min-h-[80vh] py-16">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-in">
                Your Ultimate Travel Companion
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-[600px] mx-auto lg:mx-0 animate-fade-in-delay">
                Book tickets, find the best deals, and explore amazing
                destinations all in one place. Start your journey with
                TravelEase today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay-2">
              <Link
                to="/bus-booking"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore Services
              </Link>
              <button className="px-6 py-3 border border-gray-300 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center animate-scale-in">
            <div className="relative w-full max-w-[500px] aspect-square">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <svg
                    className="w-32 h-32 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                  </svg>
                  <h3 className="text-2xl font-bold">Travel Anywhere</h3>
                  <p className="text-blue-100">Discover amazing destinations</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 w-40">
                <div className="text-sm font-medium">Popular Destinations</div>
                <div className="text-xs text-gray-600 mt-1">
                  Explore 1000+ destinations
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-lg p-4 w-40">
                <div className="text-sm font-medium">Best Offers</div>
                <div className="text-xs text-gray-600 mt-1">
                  Save up to 40% on bookings
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
