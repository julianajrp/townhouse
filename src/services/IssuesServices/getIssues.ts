import { IIssuesResponse } from "../../context/issuesContext";
import { api } from "../api";

export async function apiGetIssues(
	token: string | null
): Promise<IIssuesResponse[]> {
	api.defaults.headers.authorization = `Bearer ${token}`;
	const { data } = await api.get<IIssuesResponse[]>("/issues");

	return data;
}
