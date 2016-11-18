import React from 'react';


class PresentPatient extends React.Component {
    render () {
    	var trclass = "";
    	if (this.props.selected) {
    		trclass = "selected";
    	}
		return (
			<tr onClick={() => this.props.onClick(this.props.number)} className={trclass}>
				<td>{this.props.historyNumber}</td>
				<td>{this.props.name}</td>
				<td>{this.props.bedNumber}</td>
			</tr>
		);
    }
}

export default PresentPatient;



