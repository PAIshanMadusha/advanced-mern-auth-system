import FloatingShape from "./components/FloatingShape";
import { Routes, Route, Navigate } from "react-router-dom";
import SignINPage from "./pages/SignINPage";
import SignUpPage from "./pages/SignUpPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import LoadingSpinner from "./components/LoadingSpinner";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

//Protect routes
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }
  if (!user.isVerified) {
    return <Navigate to="verify-email" replace />;
  }
  return children;
};

//Redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-violet-900 flex items-center justify-center relative overflow-hidden">
      <FloatingShape
        color="bg-blue-200"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />

      <FloatingShape
        color="bg-sky-200"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />

      <FloatingShape
        color="bg-blue-100"
        size="w-32 h-32"
        top="40%"
        left="-10%"
        delay={2}
      />

      <FloatingShape
        color="bg-cyan-100"
        size="w-40 h-40"
        top="10%"
        left="75%"
        delay={3}
      />

      <FloatingShape
        color="bg-blue-300"
        size="w-56 h-56"
        top="85%"
        left="20%"
        delay={6}
      />

      <FloatingShape
        color="bg-sky-100"
        size="w-36 h-36"
        top="25%"
        left="50%"
        delay={1}
      />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <SignUpPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/signin"
          element={
            <RedirectAuthenticatedUser>
              <SignINPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route
          path="/forgot-password"
          element={
            <RedirectAuthenticatedUser>
              <ForgotPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <RedirectAuthenticatedUser>
              <ResetPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
