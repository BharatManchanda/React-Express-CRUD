import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router";
import { Route } from "react-router";
import appRoutes from './Routes';

function App() {
  return (
	<BrowserRouter>
		<Routes>
			{appRoutes.map((value, _) => {
				const {path, element} = value;
				return <Route key={_} path={path} element={element} />
			})}
		</Routes>
	</BrowserRouter>
  );
}

export default App;
