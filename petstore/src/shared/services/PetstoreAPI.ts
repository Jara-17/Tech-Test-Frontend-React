import { QueryFunctionContext } from "@tanstack/react-query";
import api from "../../config/axios.config";
import { Pet, Status } from "../types";

export async function getPets({
  queryKey,
}: QueryFunctionContext<[string, Status?]>) {
  try {
    const [, status = "available"] = queryKey;

    const { data } = await api.get<Pet[]>(`/pet/findByStatus?status=${status}`);
    return data;
  } catch (error) {
    console.error("Error al obtener mascotas:", error);
    return [];
  }
}

export async function addPet(formData: Pet) {
  try {
    const { data } = await api.post<Pet>("/pet", formData);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPet(id: Pet["id"]): Promise<Pet> {
  try {
    const { data } = await api.get<Pet>(`/pet/${id}`);
    return data;
  } catch (error) {
    console.error("Error al obtener la mascota:", error);
    throw error;
  }
}

export async function updatePet(formData: Pet): Promise<Pet> {
  try {
    const { data } = await api.put<Pet>(`/pet`, formData);
    return data;
  } catch (error) {
    console.error("Error al obtener la mascota:", error);
    throw error;
  }
}

export async function deletePet(id: Pet["id"]) {
  try {
    const { data } = await api.delete<Pet>(`/pet/${id}`);
    return data;
  } catch (error) {
    console.error("Error al obtener la mascota:", error);
    throw error;
  }
}
