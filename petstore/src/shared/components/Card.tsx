// src/components/Card.tsx
import { Pet } from "../types";
import { Link } from "react-router-dom";
import Badge from "./Badge";

type CardProps = {
  pet: Pet;
  className?: string;
};

export default function Card({ pet, className = "" }: CardProps) {
  return (
    <div
      className={`space-y-4 w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700 ${className}`}
    >
      <div className="flex justify-between items-center">
        <Link to={`/pets/${pet.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {pet.name && pet.name.length < 50 ? pet.name : "Sin nombre"}
          </h5>
        </Link>

        <Badge variant="green" className="font-bold">
          {pet.status}
        </Badge>
      </div>

      <div className="space-y-4 ">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Categoria: {pet.category?.name ? pet.category?.name : "No tiene"}
        </p>
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
      </div>

      <Link
        to={`/${pet.id}`}
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Ver más
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  );
}
