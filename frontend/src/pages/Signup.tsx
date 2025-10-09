import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { validationSchema } from "../validations/signupValidation";
import { userSignup } from "../service/authService";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

function Signup() {
  const navigation = useNavigate();
  const token = useSelector((state: RootState) => state.user.token);    
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async(values) => {
      try {

        await userSignup(values);
        toast.success("Signup successful! Please log in.");
        navigation("/login");
      } catch (error) {
        console.error("Error signing up:", error);
        toast.error((error as Error).message || "Signup failed. Please try again.");
      }
    },
  });

  useEffect(() => {
    if (token) {
      navigation("/");
    }
  }, [token]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black relative overflow-hidden">
      {/* background orbs */}
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md px-8 py-8"
      >
        <motion.div
          className="bg-zinc-900 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-zinc-800"
          whileHover={{ boxShadow: "0 0 40px rgba(255, 255, 255, 0.1)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Create Account
            </h1>
            <p className="text-gray-400">Sign up to get started</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 bg-black border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300
                  ${
                    errors.name && touched.name
                      ? "border-red-500 focus:border-red-500"
                      : "border-zinc-700 focus:border-white"
                  }`}
                placeholder="John Doe"
              />
              {errors.name && touched.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 bg-black border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300
                  ${
                    errors.email && touched.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-zinc-700 focus:border-white"
                  }`}
                placeholder="you@example.com"
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 bg-black border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300
                  ${
                    errors.password && touched.password
                      ? "border-red-500 focus:border-red-500"
                      : "border-zinc-700 focus:border-white"
                  }`}
                placeholder="••••••••"
              />
              {errors.password && touched.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 bg-black border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300
                  ${
                    errors.confirmPassword && touched.confirmPassword
                      ? "border-red-500 focus:border-red-500"
                      : "border-zinc-700 focus:border-white"
                  }`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Button */}
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-white text-black font-semibold rounded-xl shadow-lg shadow-white/20 hover:shadow-white/40 transition-all duration-300"
            >
              Create Account
            </motion.button>
          </form>

          {/* Sign in */}
          <p className="mt-6 text-center text-gray-400 text-sm">
            Already have an account?{" "}
            <span
              onClick={() => navigation("/login")}
              className="text-white hover:text-gray-300 font-medium cursor-pointer"
            >
              Sign in
            </span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Signup;
