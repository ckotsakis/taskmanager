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

            <div class="statswidget">
            <div class="sectiontitle">Weekly Stats</div>
            <div class="row">
                <div class="col-9">
                    <div id="chart">
                        <Chart 
                            options={this.state.options} 
                            series={this.state.series} 
                            type="radialBar" 
                            height="200" 
                        />
                    </div>       
                </div>
                <div class="col-2">
                    <div class="sidestats">
                        <div class="sidestat top">
                            <div class="stattitle">4</div>
                            <div class="statsubtitle">To Do</div>
                        </div>
                        <div class="sidestat">
                            <div class="stattitle">2</div>
                            <div class="statsubtitle">Late</div>
                        </div>
                        <div class="sidestat bottom">
                            <div class="stattitle">8</div>
                            <div class="statsubtitle">Done</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
        )
    }
}

export default ChartStats;


