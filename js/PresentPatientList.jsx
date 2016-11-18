import React from 'react';
import PresentPatient from 'PresentPatient';


class PresentPatientList extends React.Component {
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
				var selected = false;
				if (i == this.props.selectedPatient) selected = true;
				return (
					<PresentPatient 
						key={i} 
						number={i} 
						historyNumber={o.historyNumber} 
						bedNumber={o.bedNumber} 
						name={patientName} 
						selected = {selected} 
						onClick={() => this.props.onClick(i)} 
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
						<td>ПАЛАТА</td>
					</tr>
				</thead>
				<tbody>
					{patientList}
				</tbody>
			</table>
		);
    }
}
 
export default PresentPatientList;



