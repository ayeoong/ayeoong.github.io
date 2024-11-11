import React, { Fragment, useCallback, useEffect, useState } from "react";
import "../style/App.css";

const App: React.FC = () => {
const [message, setMessage] = useState<string>("Hello, I'm Ayeong!");

const changeMessage = useCallback(() => {
	setMessage("Welcome to my Portfolio!");
}, []);

useEffect(() => {
	const timer = setTimeout(() => {
	changeMessage();
	}, 3000);
	return () => clearTimeout(timer);
}, [changeMessage]);

return (
	<Fragment>
		<div className="App">
			<p>{message}</p>
		</div>
	</Fragment>
)};

export default React.memo(App);
