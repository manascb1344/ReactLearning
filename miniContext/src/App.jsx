import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";

function App() {
	return (
		<UserContextProvider>
			<h1>Hi i am Manas</h1>
			<Login />
			<Profile />
		</UserContextProvider>
	);
}
 
export default App;
