import React from 'react';
import ReactDOM from 'react-dom';

import $ from "jquery";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Bootstrap from 'bootstrap';


import PatientInfo from 'PatientInfo';
import RightPanel from 'RightPanel';




class State {

	constructor () {
		this.presentPatientList = undefined;
		this.gonePatientList = undefined;
		this.currentTab = "presentPatientList";
		this.selectedPatient = 5;
	}
	
	updatePatientLists () {
		var getPresentPatientList = $.ajax({
			type: "GET",
			url: "ajax/presentList.json"
		});
		var getGonePatientList = $.ajax({
			type: "GET",
			url: "ajax/quittingList.json"
		});
		return Promise.all([getPresentPatientList, getGonePatientList]);
	}
	
	getPatientInfo (list, number) {
		//list must be a strng with one of following values: "presentPatientList", "gonePatientList"
		if ( (list != "presentPatientList") && (list != "gonePatientList") ) {
			console.log("Error in getPatientInfo method: incorrect 'list' argument value: " + list);
			return;
		}
		if ( (number < 0) || (number >= this[list].length) ) {
			console.log("Error in getPatientInfo method: incorrect 'number' argument value: " + number);
			return;
		}
		var record = this[list][number];
		var name = record.lastName + " " + record.firstName + " " + record.patrName;
		var age = new Date().getYear() - new Date(record.birthDate).getYear();
		age = Math.ceil(age);
		var diagnosis = record.diagnosis;
		return {
			name: name,
			age: age,
			diagnosis: diagnosis
		};
 	}
 	
	
}



class PatientApp extends React.Component {
	
	constructor (props) {
		super();
		this.state = {
			presentPatientList: undefined,
			gonePatientList: undefined,
			currentTab: "presentPatientList",
			selectedPatient: undefined
		}
	}
	
	handlePatientClick (number) {
		appState.selectedPatient = number;
		patientApp.setState(appState);
	}
	
	render () {
		var patientInfoEmpty = false, info = {};
		if (!this.state.selectedPatient) {
			patientInfoEmpty = true;
		} else {
			info = appState.getPatientInfo(this.state.currentTab, this.state.selectedPatient);
		}
		return (
			<div>
				<PatientInfo 
					empty={patientInfoEmpty} 
					name={info.name} 
					age={info.age} 
					diagnosis={info.diagnosis} 
				/>
				<RightPanel
					currentTab={this.state.currentTab} 
					presentPatientList={this.state.presentPatientList} 
					gonePatientList={this.state.gonePatientList} 
					selectedPatient={this.state.selectedPatient} 
					onPatientClick={this.handlePatientClick} 
				/>
			</div>
		);
	}
	
}
 
let appState = new State();
 
let patientApp = ReactDOM.render(<PatientApp/>, document.getElementById('app-container'));
 
appState.updatePatientLists().then((values) => {
	appState.presentPatientList = values[0];
	appState.gonePatientList = values[1];
	patientApp.setState(appState);
});






