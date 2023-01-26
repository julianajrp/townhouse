import React from "react";

import IssuesOutlet from "../../components/Issues/issues";
import { IssuesProvider } from "../issuesContext";

export const IssuesProviderComponent = () => {
	return (
		<IssuesProvider>
			<IssuesOutlet />
		</IssuesProvider>
	);
};
