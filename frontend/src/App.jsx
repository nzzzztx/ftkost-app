import "./App.css";

import UserLayout from "./layouts/UserLayout";
import LandingPage from "./pages/LandingPage";

/**
 * Root App Component
 * Layout: UserLayout
 * Page  : LandingPage
 */
export default function App() {
  return (
    <UserLayout>
      <LandingPage />
    </UserLayout>
  );
}
