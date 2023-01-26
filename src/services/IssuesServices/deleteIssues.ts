import { api } from "../api";

export async function apiDeleteIssues(
  id: number | undefined,
  token: string
): Promise<void> {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.delete<void>(`issues/${id}`);

  return data;
}
