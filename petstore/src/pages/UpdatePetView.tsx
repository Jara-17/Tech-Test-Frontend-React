import { Link, useParams } from "react-router-dom";
import UpdatePetForm from "../shared/components/pets/UpdatePetForm";
import { useQueryClient } from "@tanstack/react-query";
import { Pet } from "../shared/types";

export default function UpdatePetView() {
  const { id } = useParams();
  const petId = Number(id);
  const queryClient = useQueryClient();

  const petData = queryClient.getQueryData<Pet>(["pet", petId])!;

  return (
    <div className="w-full mx-auto">
      <div
        className="
            p-8 
            bg-white border 
            border-gray-200 
            rounded-lg shadow-sm 
            dark:bg-gray-900 
            dark:border-gray-700
          "
      >
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold dark:text-white">
            Actualizar Mascota
          </h2>

          <Link
            className="
              text-white 
              bg-blue-700 
              hover:bg-blue-800 
              focus:ring-blue-300 
              dark:bg-blue-600 
              dark:hover:bg-blue-700 
              dark:focus:ring-blue-800
              cursor-pointer 
              font-medium 
              rounded-lg 
              text-sm 
              px-4 
              py-2 
              text-center 
              inline-flex 
              items-center 
              focus:outline-none 
              focus:ring-4 
              "
            to={`/${id}`}
          >
            Volver
          </Link>
        </div>

        <UpdatePetForm pet={petData} />
      </div>
    </div>
  );
}
