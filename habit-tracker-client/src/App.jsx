import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Habits from "./pages/Habits";
import Achievements from "./pages/Achievements"
import Reports from "./pages/Reports";
import Challenges from "./pages/Challenges";
import Profile from "./pages/Profile";

// Context Providers
import { AuthProvider } from "./context/AuthContext";
import { HabitProvider } from "./context/HabitContext";
import { ThemeProvider } from "./context/ThemeContext";

// Protected Route
import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <HabitProvider>
          <Router>
            <Routes>

              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Protected Routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/habits"
                element={
                  <ProtectedRoute>
                    <Habits />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/achievements"
                element={
                  <ProtectedRoute>
                    <Achievements />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/reports"
                element={
                  <ProtectedRoute>
                    <Reports />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/challenges"
                element={
                  <ProtectedRoute>
                    <Challenges />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

            </Routes>
          </Router>
        </HabitProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;