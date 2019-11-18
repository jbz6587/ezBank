import React, { Component } from 'react';
import '../css/scheduler.css';

export default class Scheduler extends Component {
	
	handleWeekdayClick = (e) => {
		var btn = e.currentTarget;
		if(!btn.classList.contains("activeWeekdayBtn")){
			var btnList = document.getElementById("daysOfTheWeek");
			for(var i = 0; i < btnList.children.length; i++){
				var curBtn = btnList.children[i];
				curBtn.classList.remove("activeWeekdayBtn");
			}
			btn.classList.add("activeWeekdayBtn");
		}
		
		var schedule = document.getElementById("calendarSelect");
		schedule.value = "";
	}
	
	handleDateSelect = (e) => {
		var btnList = document.getElementById("daysOfTheWeek");
		for(var i = 0; i < btnList.children.length; i++){
			var curBtn = btnList.children[i];
			curBtn.classList.remove("activeWeekdayBtn");
		}
	}
	
	handleRepeatToggle = (e) => {
		console.log("repeat checkbox toggled");
		var checkbox = document.getElementById("repeatCheckbox");
		var span = document.getElementById("RepeatDaysSpan"); 
		if(checkbox.checked){
			span.style.display = "inline-block";
		}
		else {
			span.style.display = "none";
		}
	}
	
	render() {
		return(
		<div className='Scheduler'>
			<h3>Select days/times to transfer:</h3>
			<div id="daysOfTheWeek" className="schedulerComponent">
				<button className="dayBtn" onClick={this.handleWeekdayClick}>Su</button>
				<button className="dayBtn" onClick={this.handleWeekdayClick}>M</button>
				<button className="dayBtn" onClick={this.handleWeekdayClick}>Tu</button>
				<button className="dayBtn" onClick={this.handleWeekdayClick}>W</button>
				<button className="dayBtn" onClick={this.handleWeekdayClick}>Th</button>
				<button className="dayBtn" onClick={this.handleWeekdayClick}>F</button>
				<button className="dayBtn" onClick={this.handleWeekdayClick}>Sa</button>
			</div>
			<b>OR </b>
			<input id="calendarSelect" type="date" onChange={this.handleDateSelect}/>
			<br/>
			<br/>
			<div id="timeSelectDiv" className="schedulerComponent">
				<label>Time: </label>
				<input id="timeSelect" type="time"/>
			</div>
			<br/>
			<br/>
			<div id="repeatDiv" className="schedulerComponent">
				<b>Would you like this transfer to repeat?</b>
				<br/>
				<div id="repeatCheckboxDiv">
					<label>Yes: </label>
					<input id="repeatCheckbox" type="checkbox" value="repeat" onChange={this.handleRepeatToggle}/>
				</div>
				<br/>
				<span id="RepeatDaysSpan">Repeat every <input id="repeatDaysInput" type="number"/> days</span>
				<br/>
			</div>
			<br/>
			<button id="applyScheduleBtn">Apply Schedule</button>
		</div>
		)
	}
	
}