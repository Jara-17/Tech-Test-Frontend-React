import {
  Control,
  FieldErrors,
  useFieldArray,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { Pet } from "../../types";
import ErrorMessage from "../ErrorMessage";
import Button from "../Button";

type PetFormProps = {
  register: UseFormRegister<Pet>;
  errors: FieldErrors<Pet>;
  watch: UseFormWatch<Pet>;
  control: Control<Pet>;
  pet?: Pet;
};

export default function PetForm({
  register,
  errors,
  control,
  pet,
}: PetFormProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags",
  });

  return (
    <>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Pet Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="doggie"
            className="border border-blue-500 outline-blue-500 text-gray-900 text-sm rounded-lg p-2 block w-full dark:bg-gray-900 dark:text-white"
            {...register("name", { required: "El nombre es obligatorio" })}
            defaultValue={pet?.name}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </div>

        <div>
          <label
            htmlFor="categoryName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category Name
          </label>
          <input
            type="text"
            id="categoryName"
            placeholder="Dog"
            className="border border-blue-500 outline-blue-500 text-gray-900 text-sm rounded-lg p-2 block w-full dark:bg-gray-900 dark:text-white"
            {...register("category.name", {
              required: "La categoría es obligatoria",
            })}
            defaultValue={pet?.category?.name}
          />
          {errors.category?.name && (
            <ErrorMessage>{errors.category.name.message}</ErrorMessage>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Tags
        </label>
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center gap-2">
            <input
              type="text"
              className="border border-blue-500 outline-blue-500 text-gray-900 mb-2 text-sm rounded-lg p-2 block w-full dark:bg-gray-900 dark:text-white"
              placeholder="Friendly"
              {...register(`tags.${index}.name`, {
                required: "El tag es obligatorio",
              })}
              defaultValue={pet?.tags?.[index]?.name}
            />
            <Button
              type="button"
              variant="danger"
              onClick={() => remove(index)}
            >
              ✕
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="success"
          onClick={() => append({ id: Date.now(), name: "" })}
        >
          + Add Tag
        </Button>
      </div>

      <div className="mb-6">
        <label
          htmlFor="status"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Status
        </label>
        <select
          id="status"
          className="border border-blue-500 outline-blue-500 text-gray-900 text-sm rounded-lg p-2 block w-full dark:bg-gray-900 dark:text-white"
          {...register("status", { required: "El estado es obligatorio" })}
          defaultValue={pet?.status}
        >
          <option value="available">Available</option>
          <option value="pending">Pending</option>
          <option value="sold">Sold</option>
        </select>
        {errors.status && <ErrorMessage>{errors.status.message}</ErrorMessage>}
      </div>
    </>
  );
}
