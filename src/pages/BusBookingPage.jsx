"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"

const vendors = [
  {
    id: "redbus",
    name: "RedBus",
    logo: "🚌",
    offers: [
      {
        id: "rb1",
        promoCode: "RBFIRST",
        minTx: 500,
        minDiscountRs: 50,
        maxDiscountRs: 150,
        discountPercentage: 10,
        typeOfOffer: "First Ride",
        cardType: "All",
        bankName: "Any",
        cardName: "Any",
        description: "Get 10% off on your first booking with RedBus. Maximum discount of ₹150.",
        validTill: "2023-12-31",
      },
      {
        id: "rb2",
        promoCode: "RBHDFC",
        minTx: 1000,
        minDiscountRs: 100,
        maxDiscountRs: 300,
        discountPercentage: 15,
        typeOfOffer: "Bank Offer",
        cardType: "Credit",
        bankName: "HDFC",
        cardName: "All HDFC Credit Cards",
        description: "Get 15% off up to ₹300 on bus bookings with HDFC Credit Cards.",
        validTill: "2023-10-31",
      },
    ],
  },
  {
    id: "abhibus",
    name: "AbhiBus",
    logo: "🚐",
    offers: [
      {
        id: "ab1",
        promoCode: "ABHIUPI",
        minTx: 300,
        minDiscountRs: 30,
        maxDiscountRs: 100,
        discountPercentage: 10,
        typeOfOffer: "UPI Offer",
        cardType: "UPI",
        bankName: "Any",
        cardName: "Any UPI",
        description: "Pay via UPI and get 10% off up to ₹100 on your bus booking.",
        validTill: "2023-11-15",
      },
    ],
  },
  {
    id: "makemytrip",
    name: "MakeMyTrip",
    logo: "🎫",
    offers: [
      {
        id: "mmt1",
        promoCode: "MMTSBI",
        minTx: 1500,
        minDiscountRs: 150,
        maxDiscountRs: 500,
        discountPercentage: 12,
        typeOfOffer: "Bank Offer",
        cardType: "Credit",
        bankName: "SBI",
        cardName: "SBI Credit Cards",
        description: "Get 12% instant discount up to ₹500 on SBI Credit Cards for bus bookings.",
        validTill: "2023-12-15",
      },
    ],
  },
]

const BusBookingPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [paymentFilter, setPaymentFilter] = useState("all")
  const [activeOffer, setActiveOffer] = useState({})

  const filteredVendors = vendors.filter((vendor) => {
    if (searchTerm && !vendor.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false
    }
    if (paymentFilter !== "all") {
      const hasMatchingOffer = vendor.offers.some(
        (offer) => offer.cardType.toLowerCase() === paymentFilter.toLowerCase(),
      )
      if (!hasMatchingOffer) return false
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
          <span className="font-semibold">Bus Booking Offers</span>
        </div>

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
              placeholder="Search vendors or offers..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVendors.map((vendor) => (
            <div key={vendor.id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{vendor.logo}</span>
                    <span className="font-semibold">{vendor.name}</span>
                  </div>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {vendor.offers.length} offers
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex border-b mb-4">
                  {vendor.offers.slice(0, 2).map((offer) => (
                    <button
                      key={offer.id}
                      className={`flex-1 py-2 px-3 text-sm font-medium border-b-2 transition-colors ${
                        activeOffer[vendor.id] === offer.id || (!activeOffer[vendor.id] && offer === vendor.offers[0])
                          ? "border-blue-500 text-blue-600"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => setActiveOffer({ ...activeOffer, [vendor.id]: offer.id })}
                    >
                      {offer.typeOfOffer}
                    </button>
                  ))}
                </div>

                {vendor.offers.map((offer) => (
                  <div
                    key={offer.id}
                    className={`space-y-4 ${
                      activeOffer[vendor.id] === offer.id || (!activeOffer[vendor.id] && offer === vendor.offers[0])
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

          {filteredVendors.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
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
        </div>
      </main>
    </div>
  )
}

export default BusBookingPage
