import { ReactNode } from "react";

export default function ErrorMessage({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm my-4 py-2 px-4 bg-red-500 text-white font-bold uppercase rounded-lg shadow-md">
      {children}
    </p>
  );
}
