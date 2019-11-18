import React, { Component } from 'react';
import '../css/deposit.css';
import {Link} from 'react-router-dom';
import SiteNavbar from '../views/sitenavbar.js';
import ImageUploader from 'react-images-upload';

export default class Deposit extends Component {

	constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

	handleDepositFormSubmit = (e) => {
		e.preventDefault();
		var form = document.getElementById("depositForm");
		var errorMessage = "";
		
		if(form[3].files.length !== 1){
			errorMessage += "Error: An image of the front of the check to be deposited was not uploaded. \n ";
		}
		
		if(form[5].files.length !== 1){
			errorMessage += "Error: An image of the back of the check to be deposited was not uploaded.\n ";
		}
		
		if(errorMessage !== ""){
			var errorDiv = document.getElementById("DepositErrorDiv");
			errorDiv.innerText = errorMessage;
			errorDiv.style.color = "red";
		}
		else {
			window.location.href = "./deposit-complete";
		}
	}

	render(){
		return(
			<div>
				<div id="navBar">
					<SiteNavbar/>
				</div>
				<div id="depositContainer">
					<div>
						<h2>Electronic Check Deposit</h2>
					</div>
					<div id="DepositErrorDiv">
					</div>
					<form id="depositForm" onSubmit={this.handleDepositFormSubmit}>
						<div>
							<b><u>Select an account to deposit to:</u></b>
							<br/>
							<select id="DepositAccountSelect" className="DepositInputElement">
	  							<option value="ac1">Account1: $100</option>
	 							<option value="ac2">Account2: $1000</option>
	 							<option value="ac3">Account3: $5690</option>
							</select>
						</div>
						<div>
							<br/>
							<b><u>Enter amount to be deposited:</u></b><br/>
							<input id="DepositAmountInput" className="DepositInputElement" type="number" step=".01" min=".01" max="3000.00" required/>
							<label id="depositItemNote">*limit $3000*</label>
						</div>
						<div>
							<br/>
							<b>Upload Images</b>
							<br/>
							<div>
								<span id="uploaderL">
									<label>Front:</label><br/>
									<ImageUploader
										className="imageUploader"
										label="Max file size: 10mb, accepted: jpg, png"
						                withIcon={true}
						                buttonText='Choose image'
						                onChange={this.onDrop}
						                imgExtension={['.jpg', '.png']}
						                withPreview={true}
						                singleImage={true}
						                maxFileSize={10485760}
						            />
					            </span>
						            <span id="uploaderR">
						            <label>Back:</label><br/>
						            <ImageUploader
						            	className="imageUploader"
										label="Max file size: 10mb, accepted: jpg, png"
						                withIcon={true}
						                buttonText='Choose image'
						                onChange={this.onDrop}
						                imgExtension={['.jpg', '.png']}
						                withPreview={true}
						                singleImage={true}
						                maxFileSize={10485760}
						            />
					            </span>
				            </div>
							
						</div>
						<div>
							<br/><br/><br/><br/><br/><br/>
							<button>Submit</button>
							<Link to="./home"><button type="button">Cancel</button></Link>
						</div>
					</form>
				</div>
			</div>

			)

	}

}