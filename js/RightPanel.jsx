import React from 'react';
import PresentPatientList from 'PresentPatientList';


class RightPanel extends React.Component {
    render () {
    	if (this.props.presentPatientList) {
    		var presentNumber = this.props.presentPatientList.length;
    		var goneNumber = this.props.gonePatientList.length;
    		var notLoaded = false;
    	} else {
    		var presentNumber = "Загрузка...";
    		var goneNumber = "Загрузка...";
    		var notLoaded = true;
    	}
    	if (this.props.currentTab == "presentPatientList") {
			return (
				<div className="col-xs-6 right-panel">
					<div className="panel panel-default">
						<div className="panel-heading">
							<div className="tab tab-active">ПРИСУТСТВУЮТ {presentNumber}</div>
							<div className="tab">ВЫБЫВШИЕ {goneNumber}</div>
						</div>
						<div className="panel-body">
							
							<PresentPatientList list={this.props.presentPatientList} notloaded={notLoaded} />
							
						</div>
					</div>
				</div>
			);
		} else if (this.state.currentTab == "gonePatientList") {
			return (
				<div className="col-xs-6 right-panel">
					<div className="panel panel-default">
						<div className="panel-heading">
							<div className="tab">ПРИСУТСТВУЮТ {presentNumber}</div>
							<div className="tab-active">ВЫБЫВШИЕ {goneNumber}</div>
						</div>
						<div className="panel-body">
							
							<GonePatientList list={this.props.gonePatientList} notloaded={notLoaded} />
							
						</div>
					</div>
				</div>
			);
		}
    }
}
 
export default RightPanel;



