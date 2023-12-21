import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="w-full bg-[#0F172A] p-8">
			<div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
				<Typography variant="h4" className="text-white">
					Shovon Mahamud
				</Typography>
				<ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
					<li>
						<Typography
							color="white"
							className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
						>
							About Us
						</Typography>
					</li>
					<li>
						<Typography
							color="white"
							className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
						>
							License
						</Typography>
					</li>

					<li>
						<Typography
							color="white"
							className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
						>
							Contact Us
						</Typography>
					</li>
					<li>
						<Link to="/login">
							<Typography
								color="white"
								className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
							>
								Admin
							</Typography>
						</Link>
					</li>
				</ul>
			</div>
			<hr className="my-8 border-blue-gray-50" />
			<Typography color="white" className="text-center font-normal">
				&copy; 2023 Shovon Mahamud
			</Typography>
		</footer>
	);
};
export default Footer;
