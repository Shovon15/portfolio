import { Outlet } from "react-router-dom";
import Nav from "../components/shared/navbar/Nav";
import Footer from "../components/shared/footer/Footer";

const MainLayout = () => {
	return (
		<div>
			<Nav />
			<Outlet />
			<Footer />
		</div>
	);
};

export default MainLayout;
