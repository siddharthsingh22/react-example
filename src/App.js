import "./App.css";
import { initiateLogin } from "wallet-connect-library";

function App() {
	console.log("=============", initiateLogin);
	return (
		<div className="App" style={{ marginTop: "20vh" }}>
			<div>Skywallet</div>
			<input placeholder="Enter URI"></input>
			<button>Submit</button>
		</div>
	);
}

export default App;
