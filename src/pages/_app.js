import "../styles/globals.css";
import { ThemeProvider } from "@/contexts/theme-context";

const App = ({ Component, pageProps }) => {
	return (
		<>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default App;
