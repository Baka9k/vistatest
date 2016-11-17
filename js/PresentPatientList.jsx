import React from 'react';
import PresentPatient from 'PresentPatient';


class PresentPatientList extends React.Component {
    render () {
    	if (this.props.notloaded) {
    		var patientList = "Loading...";
    	} else {
			var patientList = this.props.list.map( (o, i) => {
				var patientName = o.lastName + " " + o.firstName + " " + o.patrName;
				return (
					<PresentPatient key={i} historyNumber={o.historyNumber} bedNumber={o.bedNumber} name={patientName}/>
				);
			});
		}
		return (
			<div>
				{patientList}
			</div>
		);
    }
}
 
export default PresentPatientList;



