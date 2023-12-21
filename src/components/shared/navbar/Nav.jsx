/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { IconButton, Navbar, Typography } from "@material-tailwind/react";
import { FaBars, FaXmark } from "react-icons/fa6";
import ThemeButton from "../../buttons/ThemeButton";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const navLinks = [
	{
		title: "Home",
		link: "/",
	},
	{
		title: "Projects",
		link: "/projects",
	},
	{
		title: "About",
		link: "/about",
	},
	{
		title: "Contact",
		link: "/contact",
	},
];
const Nav = () => {
	const [openNav, setOpenNav] = useState(false);
	const [scrollPosition, setScrollPosition] = useState("");
	const navRef = useRef();
	useEffect(() => {
		window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
		window.addEventListener("scroll", () => setScrollPosition(Math.round(window.scrollY)));
		document.addEventListener("scroll", () => setOpenNav(false));

		const handler = (e) => {
			if (navRef.current && !navRef.current.contains(e.target)) {
				setOpenNav(false);
			}
		};
		document.addEventListener("mousedown", handler);

		return () => {
			window.removeEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
			window.removeEventListener("scroll", () => setScrollPosition(Math.round(window.scrollY)));
			document.removeEventListener("scroll", () => setOpenNav(false));
			document.removeEventListener("mousedown", handler);
		};
	}, []);

	const menuVars = {
		initial: {
			scaleY: 0,
		},
		animate: {
			scaleY: 1,
			transition: {
				duration: 0.5,
				ease: [0.12, 0, 0.39, 0],
			},
		},
		exit: {
			scaleY: 0,
			transition: {
				delay: 0.5,
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};
	const containerVars = {
		initial: {
			transition: {
				staggerChildren: 0.09,
				staggerDirection: -1,
			},
		},
		open: {
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.09,
				staggerDirection: 1,
			},
		},
	};

	const activeClass = "!text-blue-500";
	const normalClass = "text-blue-gray-800 hover:text-blue-500";

	return (
		<Navbar
			className={`sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-white border-none
			 ${scrollPosition > 0 ? "shadow-xl" : "shadow-none"}`}
		>
			<div className="flex justify-between items-center">
				<div className="flex items-center ">
					<Typography variant="h4" className="text-gray-700 py-1">
						Shovon Mahamud
					</Typography>
				</div>
				{/* ------------navlist lg----------- */}
				<div className="hidden lg:flex gap-5">
					{navLinks.map(({ title, link }) => (
						<ul key={title} className="flex p-2 flex-row gap-2 items-center">
							<NavLink
								to={link}
								className={({ isActive }) => (isActive ? `${activeClass} ` : `${normalClass}`)}
							>
								<Typography variant="small" className="font-semibold">
									{title}
								</Typography>
							</NavLink>
						</ul>
					))}
				</div>
				{/* ----------toggle button lg---------- */}
				<div>
					{!openNav && (
						<IconButton
							variant="text"
							className="lg:hidden h-10 text-gray-700 rounded-full"
							ripple={false}
							onClick={() => setOpenNav(!openNav)}
						>
							<FaBars className="w-5 h-5" />
						</IconButton>
					)}
					<div className="hidden lg:flex gap-3">
						<IconButton variant="text" className="">
							<FaGithub className="w-6 h-6 text-blue-500" />
						</IconButton>
						<IconButton variant="text">
							<FaLinkedin className="w-6 h-6 text-blue-500" />
						</IconButton>
						<ThemeButton />
					</div>
				</div>
			</div>
			{/* -----------mobile nav --------- */}
			<AnimatePresence>
				{openNav && (
					<motion.div
						ref={navRef}
						variants={menuVars}
						initial="initial"
						animate="animate"
						exit="exit"
						className="fixed left-0 top-0 w-full h-[35rem] origin-top bg-white text-black p-5 shadow-xl"
					>
						<div className="flex h-full flex-col">
							<div className="flex justify-between">
								<Typography variant="h4" className="text-gray-700">
									Shovon Mahamud
								</Typography>
								<IconButton
									variant="text"
									className=" text-gray-700 rounded-full"
									ripple={false}
									onClick={() => setOpenNav(false)}
								>
									<FaXmark className="w-5 h-5" />
								</IconButton>
							</div>
							<motion.div
								variants={containerVars}
								initial="initial"
								animate="open"
								exit="initial"
								className="flex flex-col h-full justify-center items-center gap-3"
							>
								{navLinks.map(({ link, title }) => {
									return (
										<div key={title} className="overflow-hidden w-full">
											<NavLink
												to={link}
												className={({ isActive }) =>
													isActive ? `${activeClass} ` : `${normalClass}`
												}
												onClick={() => setOpenNav(false)}
											>
												<MobileNavLink title={title} />
											</NavLink>
										</div>
									);
								})}
								<div className="overflow-hidden">
									<MobileSocialIcon />
								</div>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</Navbar>
	);
};

export default Nav;
const mobileLinkVars = {
	initial: {
		y: "30vh",
		transition: {
			duration: 0.5,
			ease: [0.37, 0, 0.63, 1],
		},
	},
	open: {
		y: 0,
		transition: {
			ease: [0, 0.55, 0.45, 1],
			duration: 0.7,
		},
	},
};
const MobileNavLink = ({ title }) => {
	return (
		<motion.div variants={mobileLinkVars} className="flex justify-center py-2 border-b border-gray-500">
			<Typography variant="h5" className="">
				{title}
			</Typography>
		</motion.div>
	);
};
const mobileSocialLinkVars = {
	initial: {
		y: "10vh",
		transition: {
			duration: 0.5,
			ease: [0.37, 0, 0.63, 1],
		},
	},
	open: {
		y: 0,
		transition: {
			ease: [0, 0.55, 0.45, 1],
			duration: 0.7,
		},
	},
};

const MobileSocialIcon = () => {
	return (
		<motion.div variants={mobileSocialLinkVars} className="flex gap-5 mt-5">
			<IconButton variant="text" className="">
				<FaGithub className="w-6 h-6 text-blue-500" />
			</IconButton>
			<IconButton variant="text">
				<FaLinkedin className="w-6 h-6 text-blue-500" />
			</IconButton>
			<div>
				<ThemeButton />
			</div>
		</motion.div>
	);
};
