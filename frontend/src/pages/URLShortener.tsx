import { useState } from 'react';
import { motion } from 'framer-motion';
import LogoutButton from '../components/LogoutButton';
import Result from '../components/Result';
import InfoSection from '../components/InfoSection';
import ShortnerButton from '../components/ShortnerButton';
import { createShortUrl } from '../service/urlService';
const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';
function URLShortener() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [copied, setCopied] = useState(false);
   
  const handleShorten = async() => {
    if (longUrl) {
      const result = await createShortUrl(longUrl);
      const newUrl = BASE_URL+'/url/'+result.shortUrl;
      console.log(newUrl);
      setShortUrl(newUrl);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setLongUrl('');
    setShortUrl('');
    setCopied(false);
  };
  


  return (
  <div className="flex items-center justify-center min-h-screen bg-black relative overflow-hidden">
    {/* Animated background orbs */}
    <motion.div
      className="absolute w-96 h-96 bg-white rounded-full filter blur-3xl opacity-5"
      animate={{
        x: [0, 100, 0],
        y: [0, -100, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ top: "10%", left: "10%" }}
    />
    <motion.div
      className="absolute w-96 h-96 bg-white rounded-full filter blur-3xl opacity-5"
      animate={{
        x: [0, -100, 0],
        y: [0, 100, 0],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ bottom: "10%", right: "10%" }}
    />

    {/* === Background Section (blurs when modal open) === */}
    <div
      className={`relative z-10 w-full max-w-2xl px-8 transition-all duration-300 ${
        shortUrl ? "blur-md" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-zinc-900 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-zinc-800"
      >
        {/* Logout Button */}
        <LogoutButton />

        {/* Title */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="text-center mb-8"
        >
          <div className="inline-block p-4 bg-white rounded-2xl mb-4 shadow-lg shadow-white/20">
            <svg
              className="w-12 h-12 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">URL Shortener</h1>
          <p className="text-gray-400">
            Make your links shorter and shareable
          </p>
        </motion.div>

        {/* Input Section */}
        {!shortUrl ? (
          <div className="space-y-6">
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Enter your long URL
            </label>
            <div className="relative">
              <motion.input
                type="url"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full px-4 py-4 bg-black border border-zinc-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all duration-300"
                placeholder="https://example.com/very/long/url"
                whileFocus={{ scale: 1.01 }}
              />
              {isFocused && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-white opacity-10 blur-xl -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </div>

            <ShortnerButton handleShorten={handleShorten} longUrl={longUrl} />
          </div>
        ) : null}

        <InfoSection />
      </motion.div>
    </div>

    {/* === Modal Section (stays clear) === */}
    {shortUrl && (
      <div className="absolute inset-0 z-20 flex w-full items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-zinc-900 border border-zinc-700 p-8 rounded-2xl shadow-2xl backdrop-blur-md w-full max-w-2xl"
        >
          <Result
            longUrl={longUrl}
            shortUrl={shortUrl}
            copied={copied}
            handleCopy={handleCopy}
            handleReset={handleReset}
          />
        </motion.div>
      </div>
    )}
  </div>
);

}

export default URLShortener;