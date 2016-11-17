import React from 'react';


class PatientInfo extends React.Component {
    render () {
    	if (this.props.empty) {
    		return (
    			 <div className="col-xs-6 left-panel">
				   <div className="com-xs-12 col-sm-12 col-md-6 col-lg-6">
					 <div className="row patient-info">
						<div className="panel panel-default">
							<div className="panel-heading">Информация о пациенте</div>
							<div className="panel-body">
								Выберите пациента из списка
							</div>
						</div>
					</div>
				  </div>
				</div>
    		);
    	}
    	return (
    	 <div className="col-xs-6 left-panel">
    	   <div className="com-xs-12 col-sm-12 col-md-6 col-lg-6">
			 <div className="row patient-info">
				<div className="panel panel-default">
					<div className="panel-heading">Информация о пациенте</div>
					<div className="panel-body">
						<div className="col-xs-12 info">
							<div className="row">
								<div className="col-xs-4 info-label">ФИО</div>
								<div className="col-xs-8 info-data">{this.props.name}</div>
							</div>
						</div>
						<div className="col-xs-12 info">
							<div className="row">
								<div className="col-xs-4 info-label">Возраст</div>
								<div className="col-xs-8 info-data">{this.props.age}</div>
							</div>
						</div>
						<div className="col-xs-12 info">
							<div className="row">
								<div className="col-xs-4 info-label">Диагноз</div>
								<div className="col-xs-8 info-data">{this.props.diagnosis}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		  </div>
		</div>
	  );
    }
}
 
export default PatientInfo;



