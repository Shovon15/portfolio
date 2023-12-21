import React, { useEffect } from "react";
import { Navbar, Typography, IconButton, Collapse } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Nav = () => {
	const [openNav, setOpenNav] = React.useState(false);

	useEffect(() => {
		window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
		// window.addEventListener("scroll", () => setScrollPosition(Math.round(window.scrollY)));
		document.addEventListener("scroll", () => setOpenNav(false));

		// const handler = (e) => {
		// 	if (drawerRef.current && !drawerRef.current.contains(e.target)) {
		// 		setOpenNav(false);
		// 	}
		// };
		// document.addEventListener("mousedown", handler);

		return () => {
			window.removeEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
			// window.removeEventListener("scroll", () => setScrollPosition(Math.round(window.scrollY)));
			document.removeEventListener("scroll", () => setOpenNav(false));
			// document.removeEventListener("mousedown", handler);
		};
	}, []);
	const NAVLIST = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "Projects",
			link: "/projects",
		},
		{
			name: "home",
			link: "/",
		},
	];

	const navList = (
		<ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			{NAVLIST.map((item) => (
				<Link to={item.link} key={item.name}>
					<Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
						{item.name}
					</Typography>
				</Link>
			))}
		</ul>
	);

	return (
		<Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
			<div className="flex items-center justify-between text-blue-gray-900">
				<Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-bold">
					Shovon Mahamud
				</Typography>
				<div className="flex items-center gap-4">
					<div className="mr-4 hidden lg:block">{navList}</div>

					<IconButton
						variant="text"
						className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
						ripple={false}
						onClick={() => setOpenNav(!openNav)}
					>
						{openNav ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								className="h-6 w-6"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						)}
					</IconButton>
				</div>
			</div>
			<Collapse open={openNav}>{navList}</Collapse>
		</Navbar>
	);
};

export default Nav;
