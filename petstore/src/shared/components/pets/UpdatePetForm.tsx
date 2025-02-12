import { useNavigate, useParams } from "react-router-dom";
import PetForm from "./PetForm";
import { Pet } from "../../types";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePet } from "../../services/PetstoreAPI";
import { toast } from "react-toastify";

type UpdatePetFormProps = {
  pet: Pet;
};

export default function UpdatePetForm({ pet }: UpdatePetFormProps) {
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();

  const {
    reset,
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Pet>();

  useEffect(() => {
    if (pet) {
      reset(pet);
    }
  }, [pet, reset]);

  const { mutate } = useMutation({
    mutationFn: updatePet,

    onError: (error) => toast.error(error.message),

    onSuccess: () => {
      toast.success("Mascota Actualizada Correctamente");
      queryClient.invalidateQueries({ queryKey: ["pet", 1739350259930] });
      queryClient.invalidateQueries({ queryKey: ["pets", "available"] });
      navigate(`/${id}`);
    },
  });

  const handleUpdatePet = (formData: Pet) => {
    mutate(formData);
    reset();
  };

  return (
    <form
      className="p-4 rounded-lg"
      onSubmit={handleSubmit(handleUpdatePet)}
      noValidate
    >
      <PetForm
        register={register}
        errors={errors}
        watch={watch}
        control={control}
        pet={pet}
      />

      <Button type="submit" variant="success">
        Actualizar Mascota
      </Button>
    </form>
  );
}
