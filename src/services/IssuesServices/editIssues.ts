import { api } from "../api";
import { IIssuesResponse } from "../../context/issuesContext";

export async function apiEditIssues(
  newText: string | object,
  id: number | undefined,
  token: string
): Promise<IIssuesResponse> {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.patch(`/issues/${id}`, newText);

  return data;
}
