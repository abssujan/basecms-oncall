'use client'

import { motion } from 'framer-motion'
import { Wrench } from 'lucide-react'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center text-white"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
        className="flex items-center justify-center w-16 h-16 border-4 border-t-[#facc15] border-gray-700 rounded-full"
      >
        <Wrench className="w-6 h-6 text-[#facc15]" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="mt-3 text-base font-medium text-gray-200"
      >
        Loading...
      </motion.p>
    </motion.div>
  )
}
