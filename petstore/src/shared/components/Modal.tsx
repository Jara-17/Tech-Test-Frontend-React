import { UseMutateFunction } from "@tanstack/react-query";
import Button from "./Button";
import { Pet } from "../types";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  mutate: UseMutateFunction<Pet, Error, void, unknown>;
};

export default function Modal({ isOpen, onClose, mutate }: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        id="popup-modal"
        tabIndex={-1}
        className={`${
          isOpen ? "flex" : "hidden"
        } overflow-y-auto overflow-x-hidden bg-black opacity-95 fixed top-0 right-0 left-0 bottom-0 z-50 justify-center items-center w-full min-h-screen md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative z-50 opacity-none w-full max-w-md max-h-full m-4">
          <div className="relative p-6 bg-white rounded-lg shadow-sm dark:bg-gray-900">
            <Button
              type="button"
              variant="danger"
              data-modal-hide="popup-modal"
              onClick={onClose}
              className="rounded-full"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </Button>

            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4 text-red-400 w-12 h-12 dark:text-red-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Estas seguro/a de que quiere eliminar esta mascota de la tienda?
              </h3>

              <div className="flex justify-center items-center gap-8">
                <Button
                  data-modal-hide="popup-modal"
                  type="button"
                  variant="danger"
                  onClick={() => mutate()}
                >
                  Sí, Eliminar
                </Button>

                <Button
                  data-modal-hide="popup-modal"
                  type="button"
                  variant="primary"
                  onClick={onClose}
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
