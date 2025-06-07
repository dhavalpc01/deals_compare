import { Link } from "react-router-dom"

const platforms = [
  {
    id: "bus",
    name: "Bus Booking",
    icon: "🚌",
    color: "bg-red-100 text-red-600",
    link: "/bus-booking",
  },
  {
    id: "flight",
    name: "Flight",
    icon: "✈️",
    color: "bg-blue-100 text-blue-600",
    link: "/flight-booking",
  },
  {
    id: "hotel",
    name: "Hotel",
    icon: "🏨",
    color: "bg-green-100 text-green-600",
    link: "/hotel-booking",
  },
  {
    id: "movie",
    name: "Movie",
    icon: "🎬",
    color: "bg-purple-100 text-purple-600",
    link: "/movie-booking",
  },
  {
    id: "bills",
    name: "Bills",
    icon: "📄",
    color: "bg-yellow-100 text-yellow-600",
    link: "/bill-payment",
  },
  {
    id: "payment",
    name: "Payment",
    icon: "💳",
    color: "bg-pink-100 text-pink-600",
    link: "/payments",
  },
  {
    id: "food",
    name: "Food",
    icon: "🍽️",
    color: "bg-orange-100 text-orange-600",
    link: "/food-ordering",
  },
  {
    id: "shopping",
    name: "Shopping",
    icon: "🛍️",
    color: "bg-indigo-100 text-indigo-600",
    link: "/shopping",
  },
  {
    id: "more",
    name: "More",
    icon: "⋯",
    color: "bg-gray-100 text-gray-600",
    link: "/services",
  },
]

const PlatformSelector = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {platforms.map((platform) => (
        <Link
          to={platform.link}
          key={platform.id}
          className="flex flex-col items-center justify-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:-translate-y-1"
        >
          <div className={`w-12 h-12 rounded-full ${platform.color} flex items-center justify-center mb-3 text-2xl`}>
            {platform.icon}
          </div>
          <span className="text-sm font-medium">{platform.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default PlatformSelector
