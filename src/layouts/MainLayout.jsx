import { Outlet } from "react-router-dom";
import Nav from "../components/shared/navbar/Nav";
import Footer from "../components/shared/footer/Footer";

const MainLayout = () => {
	return (
		<div>
			<Nav />
			<div className="max-w-[1440px] mx-auto">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
