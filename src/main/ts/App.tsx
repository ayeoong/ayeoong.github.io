import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { CookiesProvider } from "react-cookie";

import "../style/App.css";
import Router from "./Router";

// React Query 설정
const queryClient = new QueryClient();

const App = () => {

return (
		<QueryClientProvider client={queryClient}>
		<CookiesProvider>
			<BrowserRouter>
				<Fragment>
					{/* <div className="App">
					<p>{message}</p>
					</div> */}
					<Router />
				</Fragment>
			</BrowserRouter>
		</CookiesProvider>
		<ReactQueryDevtools initialIsOpen={true} />
		</QueryClientProvider>
	);
};

export default React.memo(App);
