import React from 'react';
import Chart from "react-apexcharts";

class ChartStats extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                series: [80],
                chart: {
                    id: "basic-radial",
                    height: 200
                }
            }
        };
    }
    
    render() {
        return (
          <div className="app">
            <div className="row">
              <div className="mixed-chart">
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="radialBar"
                  width="200"
                />
              </div>
            </div>
          </div>
        );
    }
}

export default Chart;

