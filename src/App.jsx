import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import AppLayout from "./components/layout/AppLayout"
import MobileShell from "./components/layout/MobileShell"
import AssetDetailScreen from "./screens/AssetDetailScreen"
import AssetsScreen from "./screens/AssetsScreen"
import DashboardScreen from "./screens/DashboardScreen"
import CreateAccountScreen from "./screens/CreateAccountScreen"
import LoginScreen from "./screens/LoginScreen"
import NotificationsScreen from "./screens/NotificationsScreen"
import ProfileScreen from "./screens/ProfileScreen"
import SettingsScreen from "./screens/SettingsScreen"
import SplashScreen from "./screens/SplashScreen"
import TasksScreen from "./screens/TasksScreen"
import TicketDetailScreen from "./screens/TicketDetailScreen"
import TicketsScreen from "./screens/TicketsScreen"
import WelcomeScreen from "./screens/WelcomeScreen"

export default function App() {
  return (
    <BrowserRouter>
      <MobileShell>
        <div className="flex h-full min-h-0 flex-1 flex-col">
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/create-account" element={<CreateAccountScreen />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<DashboardScreen />} />
            <Route path="tickets" element={<TicketsScreen />} />
            <Route path="tickets/:id" element={<TicketDetailScreen />} />
            <Route path="tasks" element={<TasksScreen />} />
            <Route path="assets" element={<AssetsScreen />} />
            <Route path="assets/:id" element={<AssetDetailScreen />} />
            <Route path="notifications" element={<NotificationsScreen />} />
            <Route path="profile" element={<ProfileScreen />} />
            <Route path="settings" element={<SettingsScreen />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </div>
      </MobileShell>
    </BrowserRouter>
  )
}
