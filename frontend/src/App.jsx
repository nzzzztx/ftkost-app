import { Routes, Route } from "react-router-dom";

import UserLayout from "./layouts/UserLayout";
import LandingPage from "./pages/LandingPage";
import RentalRequestPage from "./pages/RentalRequestPage";

export default function App() {
  return (
    <Routes>
      <Route element={<UserLayout />}>

        <Route path="/kos/:slug" element={<LandingPage />} />
        <Route path="/sewa/:roomId" element={<RentalRequestPage />} />

      </Route>
    </Routes>
  );
}
