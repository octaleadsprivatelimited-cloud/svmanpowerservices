import React from 'react'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const phoneNumber = '919441160049' // WhatsApp number without + sign
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="sr-only">WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton

