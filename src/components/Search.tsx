import React from "react";

const Search: React.FC<any> = ({ inpHandle, setInpHandle, searchFunction }) => {
	return (
		<section className="search_section">
			<div className="searchBox">
				<input
					className="searchInput"
					type="text"
					placeholder="Search"
					value={inpHandle}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setInpHandle(e.target.value)
					}
				/>
				<button
					onClick={() => searchFunction(inpHandle)}
					className="searchButton"
				>
					<i className="material-icons">search</i>
				</button>
			</div>
		</section>
	);
};

export default Search;
