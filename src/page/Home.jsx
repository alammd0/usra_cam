/** @format */

import React, { useState } from "react";

const images = [
	"https://dukaan.b-cdn.net/1440x1440/webp/upload_file_service/1c5e01ac-a76a-4b2c-85f8-fdf930554cc3/image.png",
	"https://dukaan.b-cdn.net/1440x1440/webp/upload_file_service/10575674-a63c-44ea-8284-95be68c17e7c/image.png",
	"https://dukaan.b-cdn.net/1440x1440/webp/upload_file_service/0a928140-917a-4b4f-b675-cd17d966c76b/image.png",
	"https://dukaan.b-cdn.net/1440x1440/webp/upload_file_service/10575674-a63c-44ea-8284-95be68c17e7c/image.png",
];

const Home = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleNext = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const handlePrev = () => {
		setActiveIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	return (
		<div>
			{/* section : -01 */}
			<section>
				<div id="custom-controls-gallery" className="relative w-full">
					{/* Carousel Wrapper */}
					<div className="relative h-screen overflow-hidden">
						{images.map((src, index) => (
							<div
								key={index}
								className={`absolute w-full transition-opacity duration-700 ease-in-out ${
									index === activeIndex ? "opacity-100" : "opacity-0"
								}`}>
								<img
									src={src}
                                    height={300}
									className="block w-full object-cover"
									alt={`Slide ${index + 1}`}
								/>
							</div>
						))}
					</div>

					{/* Navigation Buttons */}
					<div className="flex justify-center items-center pt-4">
						<button
							type="button"
							className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none"
							onClick={handlePrev}>
							<span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
								<svg
									className="rtl:rotate-180 w-5 h-5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 10">
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M13 5H1m0 0 4 4M1 5l4-4"
									/>
								</svg>
								<span className="sr-only">Previous</span>
							</span>
						</button>

						<button
							type="button"
							className="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
							onClick={handleNext}>
							<span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
								<svg
									className="rtl:rotate-180 w-5 h-5"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 10">
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M1 5h12m0 0L9 1m4 4L9 9"
									/>
								</svg>
								<span className="sr-only">Next</span>
							</span>
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
