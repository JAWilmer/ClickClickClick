import React, { Component } from "react";
import CameraCard from "../CameraCard";
import images from "../../images.json";
import "./Container.css";

class Container extends Component {
	state = {
		images,
		message: "Click an image to begin!",
		score: 0,
		topScore: 0
	};


	handleClick = (id, clicked) => {
		const imageOrder = this.state.images;
		// if image has been clicked already, return message of incorrect guess, reset game score
		if (clicked) {
			imageOrder.forEach((image, index) => {
				imageOrder[index].clicked = false;
			});
			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "Sorry, that was not correct.  Please play again!",
				score: 0
			});
		} else {
			// set image that was clicked as "true"
			imageOrder.forEach((image, index) => {
				if (id === image.id) {
					imageOrder[index].clicked = true;
				}
			});

			const { topScore, score } = this.state;
			const newScore = score + 1;
			const newTopScore = newScore > topScore ? newScore : topScore;

			return this.setState({
				// shuffle cards
				image: imageOrder.sort(() => Math.random() - 0.5),
				// return message of correct guess
				message: "Correct Guess!",
				// update scores
				score: newScore,
				topScore: newTopScore
			});
		}
	};

	render() {
		return (
			<div className="container-fluid mainContainer">
				<div className="instructions">
					<p className="lead">
						Click on any image to earn points. Be careful not to click on an
						image more than once!
			<br /><br />
						Message:  {this.state.message}
						<br />
						Current Score:  {this.state.score}  |  Top Score: {this.state.topScore}
					</p>
				</div>
				{/* Populate container with images from .json/  label with "key," "id," and "clicked state" */}
				<div className="container">
					<div className="row">
						{this.state.images.map(image => (
							<CameraCard
								key={image.id}
								id={image.id}
								clicked={image.clicked}
								image={image.image}
								handleClick={this.handleClick}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Container;
