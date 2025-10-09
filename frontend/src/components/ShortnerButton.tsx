import { motion } from 'framer-motion';
function ShortnerButton({longUrl,handleShorten}:{longUrl:string,handleShorten:()=>void}) {
  return (
  <motion.button
                type="button"
                onClick={handleShorten}
                disabled={!longUrl}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: longUrl ? 1.02 : 1, boxShadow: longUrl ? "0 0 30px rgba(255, 255, 255, 0.3)" : "none" }}
                whileTap={{ scale: longUrl ? 0.98 : 1 }}
                className={`w-full py-4 font-semibold rounded-xl shadow-lg transition-all duration-300 ${
                  longUrl 
                    ? 'bg-white text-black shadow-white/20 hover:shadow-white/40 cursor-pointer' 
                    : 'bg-zinc-800 text-gray-500 cursor-not-allowed'
                }`}
              >
                Shorten URL
              </motion.button>  )
}

export default ShortnerButton