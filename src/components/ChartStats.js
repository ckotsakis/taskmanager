import React from 'react';
import Chart from "react-apexcharts";

class ChartStats extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
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
                labels:['4'],
            },
        };

    }
    
    render() {
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
                            <div className="stattitle">4</div>
                            <div className="statsubtitle">To Do</div>
                        </div>
                        <div className="sidestat">
                            <div className="stattitle">2</div>
                            <div className="statsubtitle">Late</div>
                        </div>
                        <div className="sidestat bottom">
                            <div className="stattitle">8</div>
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


