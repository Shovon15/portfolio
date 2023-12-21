import { useEffect } from "react";
import { get } from "../../../utils/fetchApi";
import { useState } from "react";
import { Typography } from "@material-tailwind/react";

const DashboardOverview = () => {
	const [admin, setAdmin] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await get("admin");
				setAdmin(res.data.payload.admin);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	return (
		<div>
			<p>DashboardOverview</p>
			<div>
				<p className="text-3xl font-bold text-green-500 text-center">admin</p>
				{admin &&
					admin.map((item) => (
						<div key={item._id} className="flex flex-col justify-center items-center p-10">
							<Typography variant="h3">{item.name}</Typography>
							<img src={item.avatar} alt="..." className="w-24 h-24" />
							{item.isAdmin ? <p>isAdmin: true </p> : <p>isAdmin: false </p>}
						</div>
					))}
			</div>
		</div>
	);
};

export default DashboardOverview;
