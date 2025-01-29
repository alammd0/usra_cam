/** @format */

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import DSLRCollection from "../components/core/home/DSLRCollection";

const images = [
	"https://dukaan.b-cdn.net/1440x1440/webp/upload_file_service/1c5e01ac-a76a-4b2c-85f8-fdf930554cc3/image.png",
	"https://dukaan.b-cdn.net/1440x1440/webp/upload_file_service/10575674-a63c-44ea-8284-95be68c17e7c/image.png",
	"https://dukaan.b-cdn.net/1440x1440/webp/upload_file_service/0a928140-917a-4b4f-b675-cd17d966c76b/image.png",
];

const bestLinks = [
	{
		id: "01",
		title: "“Game changer is here!”",
		url: "https://dukaan.b-cdn.net/800x800/webp/upload_file_service/eea3a5db-a406-49c3-b10c-cf2d5dc11582/image.png",
	},
	{
		id: "02",
		title: "“Built for the best”",
		url: "https://dukaan.b-cdn.net/800x800/webp/upload_file_service/73581c25-8f23-4485-a8d6-8f286a106f6d/image.png",
	},
	{
		id: "03",
		title: "“Stay amazed”",
		url: "https://dukaan.b-cdn.net/800x800/webp/upload_file_service/d0b2d143-7968-42fc-876b-85e64ea620ea/image.png",
	},
];

const Home = () => {
	return (
		<div>
			{/* section : -01 */}
			<section>
				<div>
					<Splide
						options={{
							rewind: true,
							autoplay: true,
							interval: 3000,
							pauseOnHover: true,
							pauseOnFocus: true,
							gap: "1rem",
						}}
						aria-label="My Favorite Images">
						{images.map((image, index) => (
							<SplideSlide key={index}>
								<img
									src={image}
									className=" w-full"
									alt={`Slide ${index + 1}`}
								/>
							</SplideSlide>
						))}
					</Splide>
				</div>
			</section>

			{/* Section : 02 */}
			<section className="bg-[#121212] py-[70px]">
				<div className="w-11/16 mx-auto flex flex-row items-center justify-between">
					{bestLinks.map((item) => (
						<div
							key={item.id}
							className="flex items-center justify-center flex-col gap-4">
							<img className="h-[30px]" src={item.url} alt={item.title} />
							<p className=" text-white text-xl font-semibold">{item.title}</p>
						</div>
					))}
				</div>
			</section>

			{/* section : 03 */}
			<section>
				<div>
					<DSLRCollection
						position={"lg:flex-row"}
						url="https://dukaan.b-cdn.net/1440x1440/webp/upload_file_service/320d402d-239b-4f9d-93f8-b9325e2b23d5/image.png"
						intro="INTRODUCING"
						heading="BuzzBee DSLR Collection"
						desc="The all-new BuzzBee DSLR Collection is Your World. With A Frame Around It. Get it now from our exclusive online store. Aimed at both beginners and advanced photographers"
					/>
					<DSLRCollection
						position={"lg:flex-row-reverse"}
						url="https://dukaan.b-cdn.net/1440x1440/webp/upload_file_service/f83eac56-a037-4fdb-a96a-8f171287c749/image.png"
						intro="Imagination in motion"
						heading="Shutter speed more than anything."
						desc="Impressive speed, Instinctive controls & Innovative technologies. A full-frame mirrorless camera that can shoot at 1/64,000th of a second with its electronic shutter and in manual or shutter priority mod
Explore Similar"
					/>
					<DSLRCollection
						position={"lg:flex-row"}
						url="https://dukaan.b-cdn.net/1440x1440/webp/upload_file_service/a420d0a7-447e-4488-91fa-cb6e491a6537/image.png"
						intro="BEST IN PHOTOGRAPHY"
						heading="Limited Stocks, order now!"
						desc="Find incredible deals on Digital Cameras & camera bundles complete with a comprehensive warranty. Don't miss out grab it now !!!!"
					/>

				</div>
			</section>
		</div>
	);
};

export default Home;
