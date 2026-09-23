import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center text-xl">
                  F
                </div>
                <span className="ml-3 text-2xl font-bold">Form Builder</span>
              </div>
              <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 text-white">FB</a>
                <a href="#" className="text-gray-400 text-white">TW</a>
                <a href="#" className="text-gray-400 text-white">IG</a>
                <a href="#" className="text-gray-400 text-white">IN</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            {/* services */}
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Form Building</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Validation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Templates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Supports</a></li>
              </ul>
            </div>
            <div>
  <h3 className="font-bold text-lg mb-4">Contact us</h3>
  <ul className="space-y-2 text-gray-400">
    <li>📧 Contact@formbuilder.com</li>
    <li>📞 +91 9876543210</li>
    <li>📍 123 street, city</li>
  </ul>
</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
