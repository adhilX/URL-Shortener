import { useState } from 'react';
import { motion } from 'framer-motion';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState({ email: false, password: false });



  const handleSubmit = () => {
    console.log('Login submitted:', { email, password });
    
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
          ease: "easeInOut"
        }}
        style={{ top: '10%', left: '10%' }}
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
          ease: "easeInOut"
        }}
        style={{ bottom: '10%', right: '10%' }}
      />

      {/* Login card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md px-8"
      >
        <motion.div
          className="bg-zinc-900 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-zinc-800"
          whileHover={{ boxShadow: "0 0 40px rgba(255, 255, 255, 0.1)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Logo/Title */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-center mb-8"
          >
            <div className="inline-block p-4 bg-white rounded-2xl mb-4 shadow-lg shadow-white/20">
              <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-400">Sign in to continue</p>
          </motion.div>

          {/* Form */}
          <div className="space-y-6">
            {/* Email input */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused({ ...isFocused, email: true })}
                  onBlur={() => setIsFocused({ ...isFocused, email: false })}
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all duration-300"
                  placeholder="you@example.com"
                  whileFocus={{ scale: 1.02 }}
                />
                {isFocused.email && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-white opacity-10 blur-xl -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </div>
            </motion.div>

            {/* Password input */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <motion.input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setIsFocused({ ...isFocused, password: true })}
                  onBlur={() => setIsFocused({ ...isFocused, password: false })}
                  className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all duration-300"
                  placeholder="••••••••"
                  whileFocus={{ scale: 1.02 }}
                />
                {isFocused.password && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-white opacity-10 blur-xl -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </div>
            </motion.div>

            {/* Submit button */}
            <motion.button
              type="button"
              onClick={handleSubmit}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-white text-black font-semibold rounded-xl shadow-lg shadow-white/20 hover:shadow-white/40 transition-all duration-300"
            >
              Sign In
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Login;