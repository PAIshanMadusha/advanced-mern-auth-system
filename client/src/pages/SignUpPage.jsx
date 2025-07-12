import { motion } from "framer-motion";
import InputField from "../components/InputField";
import { Loader, Lock, LockKeyhole, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {signup, isLoading, error} = useAuthStore();
  const navigate = useNavigate();
  const [errorPassword, setError] = useState("");

  const handleSignUp = async(e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Password doesn't match");
      return;
    }
    setError("");

    try{
      await signup(name, email, password);
      navigate("/verify-email");
    }catch(e){
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-t from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Create Account
        </h2>

        <form onSubmit={handleSignUp}>
          <InputField
            icon={User}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField
            icon={LockKeyhole}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm animate-pulse shadow-sm">{error}</p>}
          {errorPassword && (
            <div className="text-red-500 text-sm animate-pulse shadow-sm">
              {errorPassword}
            </div>
          )}
          {/* Password strength meter */}
          <PasswordStrengthMeter password={password} />

          <motion.button
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-900 transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Loader className="w-6 h-6 animate-spin mx-auto"/> : "Sign Up"}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-3 bg-gray-900 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link to={"/signin"} className="text-green-400 hover:underline">
            SignIn
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpPage;
