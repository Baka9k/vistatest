import React from 'react';


class PresentPatient extends React.Component {
    render () {
		return (
			<div>
				{this.props.historyNumber}
				{this.props.name}
				{this.props.bedNumber}
			</div>
		);
    }
}
 
export default PresentPatient;



