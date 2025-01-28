import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

export default function AwardsSection() {
  const [awardsText, setAwardsText] = useState('')

  useEffect(() => {
    fetch('/texts/awards_fr.txt')
      .then((res) => res.text())
      .then(setAwardsText)
  }, [])

  return (
    <section className="py-20 px-4 bg-farm-yellow dark:bg-farm-brown">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-farm-green dark:text-farm-yellow mb-12 text-center"
        >
          Récompenses et Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div 
                className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"
                data-image-placeholder={`award-${item}`}
              />
              <h3 className="text-xl font-bold text-farm-green dark:text-farm-yellow mb-2">
                Meilleure Génétique Holstein {item}
              </h3>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                202{index} - Catégorie d'excellence
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {awardsText.split('\\n')[index] || 'Description du prix...'}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
