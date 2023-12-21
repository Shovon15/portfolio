import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Shovon | Home</title>
				<meta name="description" content="Shovon Mahamud portfolio home page" />
				<link rel="canonical" href="/" />
			</Helmet>
			<div className="">
				<Banner />
			</div>
		</>
	);
};

export default Home;
