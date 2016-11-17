import React from 'react';
import GonePatient from 'GonePatient';


class GonePatientList extends React.Component {
    render () {
    	if (this.props.notloaded) {
    		return (
    			<div>
    				Загрузка...
    			</div>
    		);
    	} else {
			var patientList = this.props.list.map( (o, i) => {
				var patientName = o.lastName + " " + o.firstName + " " + o.patrName;
				return (
					<GonePatient 
						key={i} 
						number={i} 
						historyNumber={o.historyNumber} 
						cause={o.cause} 
						name={patientName} 
						onClick={this.props.onClick} 
					/>
				);
			});
		}
		return (
			<table className="table table-striped">
				<thead>
					<tr>
						<td>№ ИБ</td>
						<td>ФИО</td>
						<td>ПРИЧИНА ВЫБЫТИЯ</td>
					</tr>
				</thead>
				<tbody>
					{patientList}
				</tbody>
			</table>
		);
    }
}
 
export default GonePatientList;



