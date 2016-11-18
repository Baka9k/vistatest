import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Bootstrap from 'bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';

import PatientInfo from 'PatientInfo';
import RightPanel from 'RightPanel';


class PatientApp extends React.Component {
	
	constructor (props) {
		super(props);
		this.state = {
	  		presentPatientList: undefined,
		  	gonePatientList: undefined,
		  	currentTab: 'presentPatientList',
	  		selectedPatient: undefined
		}
	}
	
	updatePatientLists () {
		var getPresentPatientList = $.ajax({
			type: 'GET',
			url: 'ajax/presentList.json'
		});
		var getGonePatientList = $.ajax({
			type: 'GET',
			url: 'ajax/quittingList.json'
		});
		return Promise.all([getPresentPatientList, getGonePatientList]).then((values) => {
			this.setState({presentPatientList: values[0], gonePatientList: values[1]});
		});
	}
	
	getPatientInfo (list, number) {
		//list must be a strng with one of following values: 'presentPatientList', 'gonePatientList'
		if ( (list != 'presentPatientList') && (list != 'gonePatientList') ) {
			console.log('Error in getPatientInfo method: incorrect "list" argument value: ' + list);
			return;
		}
		if ( (number < 0) || (number >= this.state[list].length) ) {
			console.log('Error in getPatientInfo method: incorrect "number" argument value: ' + number);
			return;
		}
		var record = this.state[list][number];
		var name = record.lastName + ' ' + record.firstName + ' ' + record.patrName;
		var age = new Date().getYear() - new Date(record.birthDate).getYear();
		age = Math.ceil(age);
		var diagnosis = record.diagnosis;
		return {
			name: name,
			age: age,
			diagnosis: diagnosis
		};
 	}
	
	handlePatientClick (number) {
		this.setState({selectedPatient: number});
	}
	
	handleTabClick (tab) {
		this.setState({currentTab: tab});
	}
	
	render () {
		
		var patientInfoEmpty = false, info = {};
		
		if (typeof this.state.selectedPatient !== 'number') {
			patientInfoEmpty = true;
		} else {
			info = this.getPatientInfo(this.state.currentTab, this.state.selectedPatient);
		}
		
		return (
			<div className='container-fluid app'>
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
					onPatientClick={this.handlePatientClick.bind(this)}
					onTabClick={this.handleTabClick.bind(this)}
				/>
			</div>
		);
		
	}
	
}

let patientApp = ReactDOM.render(<PatientApp/>, document.getElementById('app-container'));

patientApp.updatePatientLists();




