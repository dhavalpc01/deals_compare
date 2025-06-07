"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Bus, Plane, Hotel, Film, Receipt, CreditCard, Utensils, ShoppingBag, MoreHorizontal } from "lucide-react"

const platforms = [
  {
    id: "bus",
    name: "Bus Booking",
    icon: <Bus className="h-6 w-6" />,
    color: "bg-red-100 text-red-600",
    link: "/bus-booking",
  },
  {
    id: "flight",
    name: "Flight",
    icon: <Plane className="h-6 w-6" />,
    color: "bg-blue-100 text-blue-600",
    link: "/flight-booking",
  },
  {
    id: "hotel",
    name: "Hotel",
    icon: <Hotel className="h-6 w-6" />,
    color: "bg-green-100 text-green-600",
    link: "/hotel-booking",
  },
  {
    id: "movie",
    name: "Movie",
    icon: <Film className="h-6 w-6" />,
    color: "bg-purple-100 text-purple-600",
    link: "/movie-booking",
  },
  {
    id: "bills",
    name: "Bills",
    icon: <Receipt className="h-6 w-6" />,
    color: "bg-yellow-100 text-yellow-600",
    link: "/bill-payment",
  },
  {
    id: "payment",
    name: "Payment",
    icon: <CreditCard className="h-6 w-6" />,
    color: "bg-pink-100 text-pink-600",
    link: "/payments",
  },
  {
    id: "food",
    name: "Food",
    icon: <Utensils className="h-6 w-6" />,
    color: "bg-orange-100 text-orange-600",
    link: "/food-ordering",
  },
  {
    id: "shopping",
    name: "Shopping",
    icon: <ShoppingBag className="h-6 w-6" />,
    color: "bg-indigo-100 text-indigo-600",
    link: "/shopping",
  },
  {
    id: "more",
    name: "More",
    icon: <MoreHorizontal className="h-6 w-6" />,
    color: "bg-gray-100 text-gray-600",
    link: "/services",
  },
]

export default function PlatformSelector() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {platforms.map((platform) => (
        <Link href={platform.link} key={platform.id}>
          <motion.div
            className="flex flex-col items-center justify-center p-6 rounded-lg bg-background shadow-sm hover:shadow-md transition-all cursor-pointer"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`w-12 h-12 rounded-full ${platform.color} flex items-center justify-center mb-3`}>
              {platform.icon}
            </div>
            <span className="text-sm font-medium">{platform.name}</span>
          </motion.div>
        </Link>
      ))}
    </div>
  )
}
