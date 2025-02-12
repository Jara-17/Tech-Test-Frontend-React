import { Outlet } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import { ToastContainer } from "react-toastify";

export default function AppLayout() {
  return (
    <>
      <div className="bg-slate-800 min-h-screen">
        <Navbar />
        <div className="w-full mx-auto p-4">
          <div className="py-8 px-4">
            <Outlet />
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" />
    </>
  );
}
