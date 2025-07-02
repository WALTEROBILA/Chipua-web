'use client'

import { useState } from 'react'
import emailjs from 'emailjs-com'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('Sending...')

    try {
      await emailjs.sendForm(
        'service_bgadc1b',
        'template_b6kdtji',
        e.target as HTMLFormElement,
        'kYJ0wbr5G7mDXdHfJ'
      )
      
      setStatus('✅ Your message was sent successfully!')
      setFormData({
        user_name: '',
        user_email: '',
        user_phone: '',
        message: ''
      })
      
      setTimeout(() => {
        setStatus('')
      }, 5000)
    } catch (error) {
      setStatus('❌ Failed to send message. Please try again later.')
      console.error('EmailJS error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="user_name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
          Full Name*
        </label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-700 dark:text-white transition-colors"
        />
      </div>

      <div>
        <label htmlFor="user_email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
          Email Address*
        </label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-700 dark:text-white transition-colors"
        />
      </div>

      <div>
        <label htmlFor="user_phone" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="user_phone"
          name="user_phone"
          value={formData.user_phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-700 dark:text-white transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
          Your Message*
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-700 dark:text-white transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <div className="spinner mr-2"></div>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>

      {status && (
        <p className={`text-center font-medium ${
          status.includes('✅') ? 'text-green-600' : 'text-red-600'
        }`}>
          {status}
        </p>
      )}
    </form>
  )
}