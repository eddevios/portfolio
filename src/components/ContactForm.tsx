// src/components/ContactForm.tsx
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Send } from 'lucide-react'

interface FormData {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,                                // enviamos el estado
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('sent')
        setFormData({ name: '', email: '', message: '' })  // resetea el formulario
      })
      .catch(err => {
        console.error('Error EmailJS:', err)
        setStatus('error')
      })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Campo Nombre */}
      <div>
        <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600"
          required
        />
      </div>

      {/* Campo Email */}
      <div>
        <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600"
          required
        />
      </div>

      {/* Campo Mensaje */}
      <div>
        <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600"
          required
        />
      </div>

      {/* Botón de envío */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg flex items-center justify-center"
      >
        <Send className="w-5 h-5 mr-2" />
        {status === 'sending' ? 'Enviando…' : 'Enviar Mensaje'}
      </button>

      {status === 'sent'  && <p className="text-green-500">¡Mensaje enviado correctamente!</p>}
      {status === 'error' && <p className="text-red-500">Error al enviar, inténtalo de nuevo.</p>}
    </form>
  )
}
