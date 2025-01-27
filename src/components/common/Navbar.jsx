/** @format */

import React, { useState } from "react";
import menuData from "../../data/nav_Link";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";


const Navbar = () => {
	const [isopen, setIsOpen] = useState(false);
	const renderMenuLinks = () =>
		menuData.map((item, index) => (
			<li
				key={index}
				className="hover:decoration-[#E27D73] hover:underline hover:text-[#E27D73] transition-all duration-200"
				onClick={() => setIsOpen(false)}>
				<Link className="text-[16px]" to={item.link}>
					{item.name}
				</Link>
			</li>
		));

	return (
		<div className="bg-[#121212] h-14 pt-3 border-b-1 border-b-amber-50 ">
			<div className="w-11/12 mx-auto flex flex-row justify-between items-center relative text-white">
				<div className="lg:flex hidden flex-row">
					<ul className="flex gap-10">{renderMenuLinks()}</ul>
				</div>

				<div
					onClick={() => setIsOpen(!isopen)}
					className="lg:hidden flex items-start cursor-pointer"
					aria-label="Toggle menu">
					<MenuIcon />
				</div>

				{isopen && (
					<div className="absolute left-0 top-14 bg-[#660837] py-3 px-4 rounded-lg w-11/12 text-center z-50">
						<ul>{renderMenuLinks()}</ul>
					</div>
				)}

				<div className="flex gap-5 text-white">
					<Link to="/cart">
						<FavoriteBorderIcon />
					</Link>
					<Link to="/shopping">
						<ShoppingBagIcon />
					</Link>
					<Link to="/profile">
						<PersonIcon />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
