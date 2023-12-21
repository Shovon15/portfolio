import { Helmet } from "react-helmet-async";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Shovon | Home</title>
				<meta name="description" content="Shovon Mahamud portfolio home page" />
				<link rel="canonical" href="/" />
			</Helmet>
			<div className="min-h-screen">
				<p>Home page</p>
			</div>
		</>
	);
};

export default Home;
