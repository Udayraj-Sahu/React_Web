import "./App.css";
import "./index.css";
import {
	Footer,
	Blog,
	Possibility,
	Features,
	Whatgpt3,
	Header,
} from "./containers";
import { Cta, Navbar, Brand } from "./components";
function App() {
	return (
		<>
		<div className="App">
			<div className="gradient_bg">
				<Navbar />
				<Header />
			</div>

			<Brand />
			<Whatgpt3 />
			<Features />
			<Possibility />
			<Cta />
			<Blog />
			<Footer />
		</div>
		</>
	);
}

export default App;
