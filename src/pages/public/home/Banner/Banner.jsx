import bannerImg from "../../../../assets/images/banner.jpg";

const Banner = () => {
	return (
		<div className="relative h-[600px]">
			<div
				className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-300 to-blue-500"
				style={{
					backgroundImage: `url(${bannerImg})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			></div>

			<div className="absolute flex w-full text-white text-center">
				<div className="w-1/2">
					<h1 className="text-4xl font-bold">Your Text Goes Here</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam modi, mollitia debitis in
						minus, error reprehenderit molestias ipsum totam natus libero nemo maxime ex exercitationem? Nam
						dolorum esse quo mollitia!
					</p>
				</div>
				<div className="w-1/2">
					<img src={bannerImg} className="w-44 h-44" />
				</div>
			</div>
		</div>
	);
};

export default Banner;
