import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "../Button";
import PetForm from "./PetForm";
import { addPet } from "../../services/PetstoreAPI";
import { Pet } from "../../types";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddPetForm() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const initialValues: Pet = {
    name: "",
    category: { id: 0, name: "" },
    tags: [
      {
        name: "",
        id: 0,
      },
    ],
    status: "available",
  };

  const {
    reset,
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Pet>({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: addPet,

    onError: (error) => {
      toast.error(error.message);
    },

    onSuccess: () => {
      toast.success("Se ha añadido una nueva mascota a la tienda");
      queryClient.invalidateQueries({ queryKey: ["pets", "available"] });
    },
  });

  const handleAddPet = (formData: Pet) => {
    formData.id = Date.now();
    mutate(formData);
    reset();
    navigate("/");
  };

  return (
    <form
      className="p-4 rounded-lg"
      onSubmit={handleSubmit(handleAddPet)}
      noValidate
    >
      <PetForm
        register={register}
        errors={errors}
        watch={watch}
        control={control}
      />

      <Button type="submit" variant="success">
        Añadir Mascota
      </Button>
    </form>
  );
}
