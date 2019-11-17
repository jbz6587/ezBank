import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/help.css';
import SearchIcon from '../images/search_icon.png';

export default class Help extends Component {
	
	toggleHelpDiv = (e) => {
		var targetDiv = e.currentTarget;
		targetDiv.classList.toggle("active");
		
		var targetPanel = targetDiv.nextElementSibling;
		if (targetPanel.style.display === "block") {
			targetPanel.style.display = "none";
		} else {
			targetPanel.style.display = "block";
		}
	}
	
	render() {
		return(
		<div className='Help'>
			<h3>Help Page</h3>
			<div id="searchDiv">
				<input id="searchBar" type="text" placeholder="Search for help topic..."/>
				<input id="searchIcon" type="image" src={SearchIcon}/>
			</div>
			<div id="helpTopicsDiv">
				<button className="accordion" onClick={this.toggleHelpDiv}>Help Topic One</button>
				<div className="panel">
					<p>Alpha</p>
				</div>

				<button className="accordion" onClick={this.toggleHelpDiv}>Help Topic Two</button>
				<div className="panel">
					<p>Beta</p>
				</div>

				<button className="accordion" onClick={this.toggleHelpDiv}>Help Topic Three</button>
				<div className="panel">
					<p>Delta</p>
				</div>
			</div>
		</div>
		)
	}
	
}