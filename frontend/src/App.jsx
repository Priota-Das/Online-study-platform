import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage"
import { SignupPage } from "./pages/SignupPage"
import { SettingsPage } from "./pages/SettingsPage"
import { ProfilePage } from "./pages/ProfilePage"
import { authStore } from "./store/useAuthStore"
import { useEffect } from "react"

const App = () => {
  const { checkAuth } = authStore()
  
  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } />
          <Route path="/settings" element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App