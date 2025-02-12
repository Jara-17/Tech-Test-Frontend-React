import AddPetForm from "../shared/components/pets/AddPetForm";

export default function AddPetView() {
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
        <h2 className="text-3xl font-bold dark:text-white">Añadir Mascota</h2>

        <AddPetForm />
      </div>
    </div>
  );
}
