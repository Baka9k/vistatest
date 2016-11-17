import React from 'react';


class PatientInfo extends React.Component {
    render () {
    	return (
		     <div className="patient-info">
		        <div className="name">
		        	<div className="info-label">ФИО</div>
		        	<div className="info-data">{this.props.name}</div>
		        </div>
		         <div className="name">
		        	<div className="info-label">Возраст</div>
		        	<div className="info-data">{this.props.age}</div>
		        </div>
		         <div className="name">
		        	<div className="info-label">Диагноз</div>
		        	<div className="info-data">{this.props.diagnosis}</div>
		        </div>
		    </div>
		);
    }
}
 
export default PatientInfo;



