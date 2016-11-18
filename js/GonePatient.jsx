import React from 'react';


class GonePatient extends React.Component {
    render () {
    	var trclass = "";
    	if (this.props.selected) {
    		trclass = "selected";
    	}
		return (
			<tr onClick={() => this.props.onClick(this.props.number)} className={trclass}>
				<td>{this.props.historyNumber}</td>
				<td>{this.props.name}</td>
				<td>{this.props.cause}</td>
			</tr>
		);
    }
}

export default GonePatient;



