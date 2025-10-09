import { motion } from "framer-motion"

function InfoSection() {
  return (
   <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 pt-6 border-t border-zinc-800"
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-white">1M+</p>
                <p className="text-xs text-gray-400 mt-1">Links Shortened</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Fast</p>
                <p className="text-xs text-gray-400 mt-1">Instant Results</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Free</p>
                <p className="text-xs text-gray-400 mt-1">Always</p>
              </div>
            </div>
          </motion.div>  )
}

export default InfoSection