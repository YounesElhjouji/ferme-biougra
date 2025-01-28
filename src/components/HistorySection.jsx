import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function HistorySection() {
  const [text, setText] = useState('')

  useEffect(() => {
    fetch('/texts/history_fr.txt')
      .then((res) => res.text())
      .then(setText)
  }, [])

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="prose dark:prose-invert text-lg"
        >
          <h2 className="text-4xl font-bold text-farm-green dark:text-farm-yellow mb-6">
            Notre Histoire
          </h2>
          <p>{text}</p>
        </motion.div>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl"
              data-image-placeholder={`history-${item}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
