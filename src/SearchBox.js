import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div>
			<input 
			type='search' 
			placeholder='Arama' 
			onChange={searchChange}
			/>
		</div>
		);
}

export default SearchBox;