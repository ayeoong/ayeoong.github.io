import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import PortFolio from "./component/PortFolio";

const Router = () => {

	return (
		<Suspense>
			<Routes>
				<Route path={`/*`} element={<PortFolio />} />
			</Routes>
		</Suspense>
	)
}

export default React.memo(Router);