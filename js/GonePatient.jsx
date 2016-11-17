import React from 'react';


class GonePatient extends React.Component {
    render () {
		return (
			<tr onClick={() => this.props.onClick(this.props.number)}>
				<td>{this.props.historyNumber}</td>
				<td>{this.props.name}</td>
				<td>{this.props.cause}</td>
			</tr>
		);
    }
}

export default GonePatient;



