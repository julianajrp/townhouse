import { api } from "../api";

export async function apiDeleteUser(
  userId: number | undefined,
  token: string | null
): Promise<void> {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.delete<void>(`/users/${userId}`);

  return data;
}
