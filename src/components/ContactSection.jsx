import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

export default function ContactSection() {
  const [contactText, setContactText] = useState('')

  useEffect(() => {
    fetch('/texts/contact_fr.txt')
      .then((res) => res.text())
      .then(setContactText)
  }, [])

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-farm-green dark:text-farm-yellow">
            Contactez-nous
          </h2>
          
          <div className="space-y-4 prose dark:prose-invert">
            <p>{contactText}</p>
            <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-xl" data-image-placeholder="map" />
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Nom complet"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
            />
          </div>
          <button className="px-6 py-3 bg-farm-green text-white rounded-lg hover:bg-green-700 transition-colors">
            Envoyer
          </button>
        </motion.form>
      </div>
    </section>
  )
}
