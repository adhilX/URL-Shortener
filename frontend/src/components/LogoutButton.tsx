import { motion } from "framer-motion"
function LogoutButton() {
  return (
 <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-end mb-4"
          >
            <motion.button
              onClick={() => console.log('Logout clicked')}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-zinc-800 text-white rounded-lg border border-zinc-700 hover:bg-zinc-700 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </motion.button>
          </motion.div>  )
}

export default LogoutButton