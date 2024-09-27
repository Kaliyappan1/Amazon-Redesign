import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About LuxeMarket</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 hover:underline transition-all duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 hover:underline transition-all duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-orange-500 hover:underline transition-all duration-300">Press Releases</a></li>
              <li><a href="#" className="hover:text-orange-500 hover:underline transition-all duration-300">LuxeMarket Cares</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Make Money with Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 hover:underline transition-all duration-300">Sell on LuxeMarket</a></li>
              <li><a href="#" className="hover:text-orange-500 hover:underline transition-all duration-300">Become an Affiliate</a></li>
              <li><a href="#" className="hover:text-orange-500 hover:underline transition-all duration-300">Advertise Your Products</a></li>
              <li><a href="#" className="hover:text-orange-500 hover:underline transition-all duration-300">LuxeMarket Handmade</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">LuxeMarket Payment Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 hover:underline transition-all duration-300">LuxeMarket Rewards Visa</a></li>
              <li><a href="#" className="hover:text-orange-500 hover:underline transition-all duration-300">LuxeMarket.com Store Card</a></li>
              <li><a href="#" className="hover:text-orange-500 hover:underline transition-all duration-300">LuxeMarket Business Card</a></li>
              <li><a href="#" className="hover:text-orange-500 hover:underline transition-all duration-300">Shop with Points</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Let Us Help You</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 hover:underline transition-all duration-300">Your Account</a></li>
              <li><a href="#" className="hover:text-orange-500 hover:underline transition-all duration-300">Your Orders</a></li>
              <li><a href="#" className="hover:text-orange-500 hover:underline transition-all duration-300">Shipping Rates & Policies</a></li>
              <li><a href="#" className="hover:text-orange-500 hover:underline transition-all duration-300">Returns & Replacements</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="font-bold text-lg mb-2">Stay Connected</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-2 rounded-full bg-gray-600 hover:bg-gray-500"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="p-2 rounded-full bg-gray-600 hover:bg-gray-500"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="p-2 rounded-full bg-gray-600 hover:bg-gray-500"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="p-2 rounded-full bg-gray-600 hover:bg-gray-500"><Youtube className="h-5 w-5" /></a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Subscribe to Our Newsletter</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 rounded-l-md border border-gray-600 bg-gray-700 text-white focus:outline-none" 
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-r-md">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 LuxeMarket. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:underline">Privacy Notice</a> | 
            <a href="#" className="hover:underline ml-2">Terms of Use</a> | 
            <a href="#" className="hover:underline ml-2">Interest-Based Ads</a>
          </p>
          <div className="mt-4 text-right">
            <a href="https://github.com/your-github-repo" className="text-blue-400 hover:underline transition-all duration-300">View our GitHub Project</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
