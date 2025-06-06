"use server";
import { EditUserType } from "@/schemas/userFormSchema";
import { serverFetch } from "./serverFetch";

type UserType = {
  email: string;
  name: string;
  roleId?: number;
  departmentId: number;
  type: string;
  password?: string;
};

export async function getAllUsers(searchParams:Promise<Record<string, string>>
) {

  const {limit , page} = await searchParams;

    const perPage= limit || 10;
    const pageNo = page || 1;
  
  const response = await serverFetch(`api/users?page=${pageNo}&limit=${perPage}`);
  

  return response;
}
export async function createUser(data: UserType) {
  const response = await serverFetch("api/users", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return response;
}

export async function updateUser(id: number, data: EditUserType) {
  const response = await serverFetch(`api/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

  return response;
}

export async function deleteUser(id: number) {
  const response = await serverFetch(`api/users/${id}`, {
    method: "DELETE",
  });

  return response;
}
