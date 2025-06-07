import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import PlatformSelector from "../components/PlatformSelector"


const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* <HeroSection /> */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                All Your Services in One Place
              </h2>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                Book tickets, pay bills, order food, and more - all from a single platform. Discover amazing deals and
                offers across multiple services.
              </p>
            </div>
            {/* <PlatformSelector /> */}
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose TravelEase?</h2>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                We bring together the best offers from top service providers, making it easy for you to find the best
                deals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Best Offers</h3>
                <p className="text-gray-600">
                  Exclusive deals and discounts from top service providers across various categories.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
                <p className="text-gray-600">
                  Multiple payment options with bank-grade security for all your transactions.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.944l7.071 7.071-7.071 7.071-7.071-7.071 7.071-7.071z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Our customer support team is available round the clock to assist you with any issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our services and platform.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <details className="group border border-gray-200 rounded-lg">
                  <summary className="flex justify-between items-center cursor-pointer p-4 font-medium">
                    How do I book a bus ticket?
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    To book a bus ticket, simply click on the Bus Booking icon on our platform, select your source and
                    destination, choose your travel date, and browse through available options. You can filter by price,
                    timing, and bus type before making your selection.
                  </div>
                </details>
                <details className="group border border-gray-200 rounded-lg">
                  <summary className="flex justify-between items-center cursor-pointer p-4 font-medium">
                    What payment methods are accepted?
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    We accept various payment methods including credit cards, debit cards, net banking, UPI, and digital
                    wallets like Paytm, PhonePe, and Google Pay. You can choose your preferred payment method at
                    checkout.
                  </div>
                </details>
                <details className="group border border-gray-200 rounded-lg">
                  <summary className="flex justify-between items-center cursor-pointer p-4 font-medium">
                    How do I apply a promo code?
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    You can apply a promo code during the checkout process. Look for the "Apply Promo Code" field, enter
                    your code, and click "Apply". The discount will be automatically applied to your total if the code
                    is valid and meets all requirements.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default HomePage
