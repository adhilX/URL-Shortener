import { motion } from "framer-motion"
function Result({longUrl,shortUrl,copied,handleCopy,handleReset}:{longUrl:string,shortUrl:string,copied:boolean,handleCopy:()=>void,handleReset:()=>void}) {
  return (
<motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 z-200"
            >
              {/* Original URL */}
              <div>
                <label className="block text-gray-400 text-xs font-medium mb-2">
                  ORIGINAL URL
                </label>
                <div className="p-4 bg-black border border-zinc-800 rounded-xl text-gray-500 text-sm break-all">
                  {longUrl}
                </div>
              </div>

              {/* Shortened URL */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Shortened URL
                </label>
                <motion.div
                  className="relative p-4 bg-black border-2 border-white rounded-xl flex items-center justify-between"
                  animate={{ 
                    boxShadow: ["0 0 20px rgba(255, 255, 255, 0.2)", "0 0 30px rgba(255, 255, 255, 0.3)", "0 0 20px rgba(255, 255, 255, 0.2)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-white font-mono text-lg">{shortUrl}</span>
                  <motion.button
                    onClick={handleCopy}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="ml-4 p-2 bg-white rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    {copied ? (
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </motion.button>
                </motion.div>
                {copied && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-400 text-sm mt-2 text-center"
                  >
                    Copied to clipboard!
                  </motion.p>
                )}
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  onClick={handleReset}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="py-3 bg-zinc-800 text-white font-semibold rounded-xl border border-zinc-700 hover:bg-zinc-700 transition-all duration-300"
                >
                  Shorten Another
                </motion.button>
                <motion.button
                  onClick={() => window.open(`${shortUrl}`, )}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="py-3 bg-white text-black font-semibold rounded-xl shadow-lg shadow-white/20 hover:shadow-white/40 transition-all duration-300"
                >
                  Visit Link
                </motion.button>
              </div>
            </motion.div>  )
}

export default Result