import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Pet } from "../shared/types";
import { deletePet, getPet } from "../shared/services/PetstoreAPI";
import Badge from "../shared/components/Badge";
import { isValidImageUrl } from "../shared/utils";
import Button from "../shared/components/Button";
import Modal from "../shared/components/Modal";
import { useState } from "react";
import { toast } from "react-toastify";

export default function PetDetailView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const petId = Number(id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const {
    data: pet,
    isLoading,
    error,
  } = useQuery<Pet>({
    queryKey: ["pet", petId],
    queryFn: () => getPet(petId),
    enabled: Boolean(petId),
  });

  const { mutate } = useMutation({
    mutationFn: () => deletePet(petId),

    onError: (error) => toast.error(error.message),

    onSuccess: () => {
      toast.success("Mascota Eliminada Correctamente");
      setIsModalOpen(false);
      queryClient.invalidateQueries({ queryKey: ["pets", "available"] });
      navigate("/");
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading pet details</p>;
  if (pet) {
    const imageUrl =
      pet.photoUrls && pet.photoUrls.length > 0 ? pet.photoUrls[0] : null;

    return (
      <div className="w-full mx-auto p-4">
        <div
          className="
          p-8 
          bg-white 
          border 
          border-gray-200 
          rounded-lg 
          shadow-sm 
          dark:bg-gray-900 
          dark:border-gray-700
          space-y-8
        "
        >
          {imageUrl && isValidImageUrl(imageUrl) && (
            <img
              src={imageUrl}
              alt={`Imagen de ${pet.name}`}
              className="w-20 h-20 object-cover rounded-full border-2 border-white"
            />
          )}

          <div className="flex justify-between items-center ">
            <h2 className="text-4xl font-bold dark:text-white">{pet.name}</h2>
            <Badge variant="green">{pet.status}</Badge>
          </div>

          <p className="text-gray-700 dark:text-gray-300">
            <span className="text-lg">Categoria: </span>
            {pet.category ? pet.category.name : "No tiene"}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex flex-wrap gap-2 mt-2">
              {pet.tags && pet.tags.length > 0 ? (
                pet.tags.map((tag) => (
                  <Badge key={tag.id} variant="default">
                    {tag.name}
                  </Badge>
                ))
              ) : (
                <p className="text-gray-700 dark:text-gray-300">
                  No tiene etiquetas
                </p>
              )}
            </div>

            <div className="flex justify-center gap-2 items-center">
              <Button
                variant="warning"
                onClick={() => navigate(`/${pet.id}/update`)}
              >
                Editar
              </Button>
              <Button variant="danger" onClick={() => setIsModalOpen(true)}>
                Eliminar
              </Button>
            </div>
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          mutate={mutate}
        />
      </div>
    );
  }
}
