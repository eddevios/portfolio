// src/components/ContactInfo.tsx
import { Mail, Phone, MapPin } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <Mail className="w-6 h-6 text-purple-400 mr-4" />
        <a href="mailto:info@eddevios.com" className="hover:underline">info@eddevios.com</a>
      </div>
      <div className="flex items-center">
        <Phone className="w-6 h-6 text-purple-400 mr-4" />
        <a href="tel:+34690136503" className="hover:underline">+34 690 136 503</a>
      </div>
      <div className="flex items-center">
        <MapPin className="w-6 h-6 text-purple-400 mr-4" />
        <span>Madrid, España</span>
      </div>
    </div>
  )
}
