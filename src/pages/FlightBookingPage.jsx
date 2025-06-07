"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"

const flightPlatforms = [
  {
    id: "makemytrip",
    name: "MakeMyTrip",
    logo: "✈️",
    offers: [
      {
        id: "mmt1",
        promoCode: "MMTFIRST",
        minTx: 3000,
        minDiscountRs: 300,
        maxDiscountRs: 1200,
        discountPercentage: 10,
        typeOfOffer: "First Flight",
        cardType: "All",
        bankName: "Any",
        cardName: "Any",
        description: "Get 10% off on your first flight booking with MakeMyTrip. Maximum discount of ₹1200.",
        validTill: "2023-12-31",
        popularRoutes: ["Delhi-Mumbai", "Bangalore-Delhi", "Chennai-Kolkata"],
      },
      {
        id: "mmt2",
        promoCode: "MMTHDFC",
        minTx: 5000,
        minDiscountRs: 750,
        maxDiscountRs: 2000,
        discountPercentage: 15,
        typeOfOffer: "Bank Offer",
        cardType: "Credit",
        bankName: "HDFC",
        cardName: "All HDFC Credit Cards",
        description: "Get 15% off up to ₹2000 on flight bookings with HDFC Credit Cards.",
        validTill: "2023-10-31",
        popularRoutes: ["International Flights", "Business Class"],
      },
    ],
  },
  {
    id: "cleartrip",
    name: "Cleartrip",
    logo: "🛫",
    offers: [
      {
        id: "ct1",
        promoCode: "CTAXIS",
        minTx: 4000,
        minDiscountRs: 400,
        maxDiscountRs: 1500,
        discountPercentage: 10,
        typeOfOffer: "Bank Offer",
        cardType: "Credit",
        bankName: "Axis",
        cardName: "Axis Credit Cards",
        description: "Get 10% instant discount up to ₹1500 on Axis Bank Credit Cards for flight bookings.",
        validTill: "2023-11-30",
        popularRoutes: ["Mumbai-Goa", "Delhi-Jaipur", "Bangalore-Hyderabad"],
      },
    ],
  },
  {
    id: "goibibo",
    name: "Goibibo",
    logo: "🎫",
    offers: [
      {
        id: "go1",
        promoCode: "GOUPI",
        minTx: 2500,
        minDiscountRs: 250,
        maxDiscountRs: 1000,
        discountPercentage: 10,
        typeOfOffer: "UPI Offer",
        cardType: "UPI",
        bankName: "Any",
        cardName: "Any UPI",
        description: "Pay via UPI and get 10% off up to ₹1000 on your flight booking.",
        validTill: "2023-12-15",
        popularRoutes: ["Delhi-Bangalore", "Mumbai-Delhi", "Chennai-Mumbai"],
      },
    ],
  },
]

const getAllOffers = () => {
  const allOffers = []
  flightPlatforms.forEach((platform) => {
    platform.offers.forEach((offer) => {
      allOffers.push({
        ...offer,
        platformName: platform.name,
        platformLogo: platform.logo,
      })
    })
  })
  return allOffers
}

const FlightBookingPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [paymentFilter, setPaymentFilter] = useState("all")
  const [viewMode, setViewMode] = useState("card")
  const [activeOffer, setActiveOffer] = useState({})

  const filteredPlatforms = flightPlatforms.filter((platform) => {
    if (searchTerm && !platform.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      const hasMatchingOffer = platform.offers.some(
        (offer) =>
          offer.promoCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
          offer.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      if (!hasMatchingOffer) return false
    }

    if (paymentFilter !== "all") {
      const hasMatchingOffer = platform.offers.some(
        (offer) => offer.cardType.toLowerCase() === paymentFilter.toLowerCase(),
      )
      if (!hasMatchingOffer) return false
    }

    return true
  })

  const allOffers = getAllOffers().filter((offer) => {
    if (
      searchTerm &&
      !offer.platformName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !offer.promoCode.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !offer.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false
    }

    if (paymentFilter !== "all" && offer.cardType.toLowerCase() !== paymentFilter.toLowerCase()) {
      return false
    }

    return true
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 mb-6">
          <Link to="/" className="p-2 hover:bg-gray-100 rounded-md">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <span className="font-semibold">Flight Booking Offers</span>
        </div>

        {/* Flight Search Form */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium">From</label>
              <div className="flex items-center border rounded-md bg-white px-3 py-2">
                <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <input className="w-full border-0 outline-none" placeholder="Delhi" />
              </div>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium">To</label>
              <div className="flex items-center border rounded-md bg-white px-3 py-2">
                <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <input className="w-full border-0 outline-none" placeholder="Mumbai" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Date</label>
              <div className="flex items-center border rounded-md bg-white px-3 py-2">
                <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <input className="w-full border-0 outline-none" placeholder="Select date" />
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Search Flights
            </button>
          </div>
        </div>

        {/* Filters and View Toggle */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search platforms or offers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={paymentFilter}
              onChange={(e) => setPaymentFilter(e.target.value)}
            >
              <option value="all">All Payment Methods</option>
              <option value="credit">Credit Card</option>
              <option value="debit">Debit Card</option>
              <option value="upi">UPI</option>
              <option value="wallet">Wallet</option>
            </select>

            <div className="flex border rounded-md overflow-hidden">
              <button
                className={`px-3 py-2 ${viewMode === "card" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
                onClick={() => setViewMode("card")}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>
              <button
                className={`px-3 py-2 ${viewMode === "table" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
                onClick={() => setViewMode("table")}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Card View */}
        {viewMode === "card" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlatforms.map((platform) => (
              <div key={platform.id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{platform.logo}</span>
                      <span className="font-semibold">{platform.name}</span>
                    </div>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {platform.offers.length} offers
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex border-b mb-4">
                    {platform.offers.slice(0, 2).map((offer) => (
                      <button
                        key={offer.id}
                        className={`flex-1 py-2 px-3 text-sm font-medium border-b-2 transition-colors ${
                          activeOffer[platform.id] === offer.id ||
                          (!activeOffer[platform.id] && offer === platform.offers[0])
                            ? "border-blue-500 text-blue-600"
                            : "border-transparent text-gray-500 hover:text-gray-700"
                        }`}
                        onClick={() => setActiveOffer({ ...activeOffer, [platform.id]: offer.id })}
                      >
                        {offer.typeOfOffer}
                      </button>
                    ))}
                  </div>

                  {platform.offers.map((offer) => (
                    <div
                      key={offer.id}
                      className={`space-y-4 ${
                        activeOffer[platform.id] === offer.id ||
                        (!activeOffer[platform.id] && offer === platform.offers[0])
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="font-medium text-lg">{offer.promoCode}</div>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {offer.cardType}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{offer.description}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-gray-500">Min Transaction</p>
                          <p className="font-medium">₹{offer.minTx}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Discount</p>
                          <p className="font-medium">
                            {offer.discountPercentage}% up to ₹{offer.maxDiscountRs}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">Valid Till</p>
                          <p className="font-medium">{new Date(offer.validTill).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Payment</p>
                          <p className="font-medium">{offer.cardName}</p>
                        </div>
                      </div>

                      {offer.popularRoutes && (
                        <div className="pt-2">
                          <p className="text-xs text-gray-500 mb-1">Popular Routes:</p>
                          <div className="flex flex-wrap gap-1">
                            {offer.popularRoutes.map((route, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                {route}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t">
                  <button className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Apply Offer
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Table View */}
        {viewMode === "table" && (
          <div className="bg-white rounded-lg border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Platform
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Promo Code
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Offer Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Discount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Min Transaction
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment Method
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Valid Till
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {allOffers.map((offer) => (
                    <tr key={offer.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{offer.platformLogo}</span>
                          <span className="font-medium">{offer.platformName}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium">{offer.promoCode}</div>
                        <div className="text-xs text-gray-500">{offer.description.substring(0, 30)}...</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                          {offer.typeOfOffer}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {offer.discountPercentage}% up to ₹{offer.maxDiscountRs}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹{offer.minTx}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {offer.cardType}
                        </span>
                        <div className="text-xs mt-1">{offer.cardName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(offer.validTill).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
                          Apply
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {(viewMode === "card" ? filteredPlatforms : allOffers).length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-gray-100 p-4 mb-4">
              <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium">No offers found</h3>
            <p className="text-gray-500 mt-1">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default FlightBookingPage
