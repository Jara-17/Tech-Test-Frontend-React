// src/views/DashboardView.jsx
import { useQuery } from "@tanstack/react-query";
import Card from "../shared/components/Card";
import { getPets } from "../shared/services/PetstoreAPI";
import Button from "../shared/components/Button";
import { useNavigate } from "react-router-dom";

export default function DashboardView() {
  const navigate = useNavigate();
  const {
    data: pets = [],
    isLoading,
    isError,
  } = useQuery({
    queryFn: getPets,
    queryKey: ["pets", "available"],
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const uniquePets = pets.filter(
    (pet, index, self) => index === self.findIndex((p) => p.id === pet.id)
  );

  if (isLoading)
    return <p className="text-center text-gray-600">Cargando mascotas...</p>;
  if (isError)
    return (
      <p className="text-center text-red-500">Error al cargar las mascotas.</p>
    );

  return (
    <div className="w-full mx-auto">
      <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold dark:text-white">
            Dashboard de Mascotas
          </h2>

          <Button variant="success" onClick={() => navigate("/add")}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14m-7 7V5"
              />
            </svg>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {uniquePets.length > 0 ? (
            uniquePets.map((pet) => <Card key={pet.id} pet={pet} />)
          ) : (
            <p className="text-center text-gray-500">
              No hay mascotas disponibles.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
