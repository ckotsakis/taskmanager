import React from 'react';
import Chart from "react-apexcharts";

class ChartStats extends React.Component {

    state = {
        series: [80],
        options: {
            chart: {
                type: 'radialBar',
                height: 200
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        background: '#EEF4FE',
                        margin: 10,
                        size: '80%',
                    },
                    dataLabels: {
                        name: {
                            offsetY: 0,
                            color: "#3C567C",
                            fontSize: "40px"
                        },
                        value: {
                            offsetY: 5,
                            color: "#3C567C",
                            fontSize: "14px",
                            show: true,
                            formatter: function (val) {
                                return 'Left'
                            }
                        }
                    }
                }
            },
            labels: ['4'],
        },
    };




    constructor(props) {
        super(props);

        if(this.props.data != null) {
            this.setState({options: {lables: '24'}});
        }
        
    }

    
    render() {

        console.log(this.state.series);

        if(this.props.data == null) {
            return(<div></div>);
        } else {
           //this.setState({options: {lables: this.props.data['left']}});

        }
        
        return (

            <div className="statswidget">
            <div className="sectiontitle">Weekly Stats</div>
            <div className="row">
                <div className="col-9">
                    <div id="chart">
                        <Chart 
                            options={this.state.options} 
                            series={this.state.series} 
                            type="radialBar" 
                            height="200" 
                        />
                    </div>       
                </div>
                <div className="col-2">
                    <div className="sidestats">
                        <div className="sidestat top">
                            <div className="stattitle">{this.props.data['todo']}</div>
                            <div className="statsubtitle">To Do</div>
                        </div>
                        <div className="sidestat">
                            <div className="stattitle">{this.props.data['late']}</div>
                            <div className="statsubtitle">Late</div>
                        </div>
                        <div className="sidestat bottom">
                            <div className="stattitle">{this.props.data['done']}</div>
                            <div className="statsubtitle">Done</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
        )
    }
}

export default ChartStats;


