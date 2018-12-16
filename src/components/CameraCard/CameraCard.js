import React from 'react';
import "./CameraCard.css";

const CameraCard = props => (
	<div 
	className="allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3" 
	key={props.id}
	onClick={() => props.handleClick(props.id, props.clicked)}
	>
		<img 
		id={props.id}
		src={props.image}
		alt={props.id}
		/>
	</div>
);

export default CameraCard;