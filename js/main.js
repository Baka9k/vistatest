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
			/* Patient record format:
				"historyNumber": 230,
				"firstName": "jtrescgb",
				"lastName": "mgvnyjve",
				"patrName": "jfzirkwh",
				"birthDate": "1952-02-11",
				"diagnosis": "rpzcolmd",
				"bedNumber": 119
			*/
			var info = appState.getPatientInfo("presentPatientList", 8);
			ReactDOM.render(<PatientInfo name={info.name} age={info.age} diagnosis={info.diagnosis} />, document.getElementById('app-container'));
		});
	}
	
	getPatientInfo (list, number) {
		//list must be a strng with one of following values: "presentPatientList", "gonePatientList"
		if ( (list != "presentPatientList") || (list != "gonePatientList") ) {
			console.log("Error in getPatientInfo method: incorrect 'list' argument value");
		}
		if ( (number < 0) || (number >= this[list].length) ) {
			console.log("Error in getPatientInfo method: incorrect 'number' argument value");
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


var appState = new State();
appState.updatePatientLists();








