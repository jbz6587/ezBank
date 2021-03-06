import React, { Component } from 'react';
import '../css/help.css';
import SiteNavbar from '../views/sitenavbar.js';
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
	
	handleEnterKeyPress = (e) => {
		if(e.keyCode === 13){
			this.searchHelpTopics();
		}
	}
	
	searchHelpTopics = () => {
		var txt = document.getElementById("searchBar").value.toLowerCase();
		var helpTopics = document.getElementById("helpTopicsDiv");
		
		var i;
		var btn;
		var panel;
		if(txt !== ""){
			for( i = 0; i < (helpTopics.children.length/2); i++){
				btn = helpTopics.children[i*2];
				panel = helpTopics.children[(i*2) + 1];
				if(btn.innerText.toLowerCase().includes(txt) || panel.innerText.toLowerCase().includes(txt)){
					btn.style.display = "";
				}
				else {
					btn.style.display = "none";
				}
				panel.style.display = "none";
			}	
		}
		else {
			for( i = 0; i < (helpTopics.children.length/2); i++){
				btn = helpTopics.children[i*2];
				panel = helpTopics.children[(i*2) + 1];
				btn.style.display = "";
				panel.style.display = "none";
			}
		}
		
	}
	
	render() {
		return(
		<div className='Help'>
			<SiteNavbar/>
			<h3>Help Page</h3>
			<div id="searchDiv">
				<input id="searchBar" type="text" placeholder="Search for help topic..." onKeyUp={this.handleEnterKeyPress}/>
				<input id="searchIcon" type="image" alt="searchBtn" src={SearchIcon} onClick={this.searchHelpTopics}/>
			</div>
			<div id="helpTopicsDiv">
				<button className="accordion" onClick={this.toggleHelpDiv}>Help Topic One</button>
				<div className="panel">
					<p>Lorem ipsum dolor sit amet</p>
				</div>

				<button className="accordion" onClick={this.toggleHelpDiv}>Help Topic Two</button>
				<div className="panel">
					<p>consectetur adipiscing elit</p>
				</div>

				<button className="accordion" onClick={this.toggleHelpDiv}>Help Topic Three</button>
				<div className="panel">
					<p>sed do eiusmod tempor incididunt</p>
				</div>
			</div>
		</div>
		)
	}
	
}