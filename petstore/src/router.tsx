import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import "flowbite";
import DashboardVew from "./pages/DashboardVew";
import AddPetView from "./pages/AddPetView";
import PetDetailView from "./pages/PetDetailView";
import UpdatePetView from "./pages/UpdatePetView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardVew />} />
          <Route path="/add" element={<AddPetView />} />
          <Route path="/:id" element={<PetDetailView />} />
          <Route path="/:id/update" element={<UpdatePetView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
