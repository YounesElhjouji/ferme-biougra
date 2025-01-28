import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

export default function TeamSection() {
  const [teamText, setTeamText] = useState('')

  useEffect(() => {
    fetch('/texts/team_fr.txt')
      .then((res) => res.text())
      .then(setTeamText)
  }, [])

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-farm-green dark:text-farm-yellow mb-12 text-center"
        >
          Notre Équipe
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl"
            >
              <div 
                className="aspect-square bg-gray-200 dark:bg-gray-600 rounded-lg mb-4"
                data-image-placeholder={`team-${item}`}
              />
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2" />
              <div className="h-3 bg-gray-200 dark:bg-gray-500 rounded w-1/2" />
            </motion.div>
          ))}
        </div>
        
        <p className="text-center prose dark:prose-invert mx-auto">
          {teamText}
        </p>
      </div>
    </section>
  )
}
