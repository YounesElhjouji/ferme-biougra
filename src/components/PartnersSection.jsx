import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

export default function PartnersSection() {
  const [partnersText, setPartnersText] = useState('')

  useEffect(() => {
    fetch('/texts/partners_fr.txt')
      .then((res) => res.text())
      .then(setPartnersText)
  }, [])

  return (
    <section className="py-20 px-4 bg-farm-yellow dark:bg-farm-brown">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          className="text-4xl font-bold text-farm-green dark:text-farm-yellow mb-12 text-center"
        >
          Nos Partenaires
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center"
              data-image-placeholder={`partner-${item}`}
            >
              <span className="text-gray-400">Logo Partenaire</span>
            </motion.div>
          ))}
        </div>
        
        <p className="text-center prose dark:prose-invert mx-auto">
          {partnersText}
        </p>
      </div>
    </section>
  )
}
