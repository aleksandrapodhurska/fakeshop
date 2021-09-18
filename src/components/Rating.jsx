import React from 'react';
import ReactStars from 'react-rating-stars-component';
import {MdStar, MdStarBorder, MdStarHalf} from 'react-icons/md';

const Rating = ({rating}) => {

	const stars = {
		size: 25,
		count: 5,
		color: "gold",
		activeColor: "gold",
		value: rating.rate,
		a11y: true,
		isHalf: true,
		emptyIcon: <MdStarBorder/>,
		halfIcon: <MdStarHalf />,
		filledIcon: <MdStar/>,
		onChange: newValue => {
		  console.log(`Example 2: new value is ${newValue}`);
		}
	}
	return (
		<ReactStars {...stars}/>
	)
}

export default Rating
