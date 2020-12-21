import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
	return (
		<div className={styles.layout}>
			<Header />
			<Main />
		</div>
	);
}

export default App;
