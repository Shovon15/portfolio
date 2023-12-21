import { Helmet } from "react-helmet-async";

const Projects = () => {
	return (
		<>
			<Helmet>
				<title>Shovon | Projects</title>
				<meta name="description" content="Shovon Mahamud portfolio project page" />
				<link rel="canonical" href="/projects" />
			</Helmet>
			<div className="min-h-screen">
				<p>Projects page</p>
			</div>
		</>
	);
};

export default Projects;
