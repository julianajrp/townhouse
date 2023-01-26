import { IIssues, IIssuesResponse } from "../../context/issuesContext";
import { api } from "../api";

export async function apiCreateIssues(
	issue: IIssues,
	token: string
): Promise<IIssuesResponse> {
	api.defaults.headers.authorization = `Bearer ${token}`;
	const { data } = await api.post<IIssuesResponse>("/issues", issue);

	return data;
}
