import { useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { useNavigate, useParams } from "react-router-dom";
import InputField from "../components/InputField";
import { Lock } from "lucide-react";
import toast from "react-hot-toast";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { resetPassword, error, isLoading, message } = useAuthStore();

  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords Doesn't Match!");
      return;
    }
    try {
      await resetPassword(token, password);
      toast.success("Password Reset Successfully!");
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Error Resetting Password!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-violet-500 text-transparent bg-clip-text">
          Reset Password
        </h2>
        {error && (
          <p className="text-red-500 text-sm animate-pulse shadow-sm mb-2"></p>
        )}
        {message && <p className="text-blue-500 text-sm mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          <InputField
            icon={Lock}
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <InputField
            icon={Lock}
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {/* Password strength meter */}
          <PasswordStrengthMeter password={password} />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-violet-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-200 transition duration-200"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Resetting..." : "Set New Password"}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default ResetPasswordPage;
