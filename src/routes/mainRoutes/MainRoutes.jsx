import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../../pages/public/home/Home";
import MainLayout from "../../layouts/MainLayout";
import Projects from "../../pages/public/projects/Projects";
import Login from "../../pages/admin/adminAuth/Login";
import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardOverview from "../../pages/admin/dashboard/DashboardOverview";

const MainRoutes = () => {
	return (
		<BrowserRouter>
			{/* <ScrollToTop /> */}
			<Routes>
				{/* ---------------------------public route--------------------- */}
				<Route path="/login" element={<Login />} />

				<Route element={<MainLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/login" element={<Login />} />
				</Route>

				{/* ---------------------------private route--------------------- */}
				<Route element={<DashboardLayout />}>
					<Route path="/dashboard" element={<DashboardOverview />} />
				</Route>

				<Route
					path="*"
					element={
						<div className="flex flex-col gap-5 justify-center items-center min-h-screen">
							<p className="text-center text-textPrimary font-bold text-3xl">Page not found</p>
							<Link to="/">
								<button className="bg-gradient-to-r from-cyan-500 to-blue-700 px-8 py-2 rounded-lg text-white dark:text-white ">
									home
								</button>
							</Link>
						</div>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default MainRoutes;
