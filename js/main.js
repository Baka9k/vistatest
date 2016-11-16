import React from 'react';
import ReactDOM from 'react-dom';

import PatientInfo from 'PatientInfo';

import $ from "jquery";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Bootstrap from 'bootstrap';



class State {

	constructor () {
		this.presentPatientList = undefined;
		this.gonePatientList = undefined;
		this.currentTab = 0;
		this.selectedPatient = undefined;
		this.patientInfoLoaded = false;
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
		Promise.all([getPresentPatientList, getGonePatientList]).then(values => {
			this.presentPatientList = values[0];
			this.gonePatientList = values[1];
			//presentPatientList and gonePatientList are arrays of objects now
			console.log(this);
			//Update state
		});
	}
	
}


var appState = new State();
appState.updatePatientLists();


var handle = ReactDOM.render(<PatientInfo />, document.getElementById('app-container'));
