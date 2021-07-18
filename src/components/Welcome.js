import React from 'react';

class Welcome extends React.Component {

    state = {
        left: 0,
        highPriority: 0
    }

    constructor(props) {
        super(props);
        //this.state.left = props.stats.left;
    
        this.state.left = 5;
    }

    render() {

        if(this.props.data == null){
            return(<div></div>)
        }
        return (
            <div className="msgwidget">
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td valign="top"><img src="assets/images/3550308.png" height="50" /></td>
                            <td></td>
                            <td><strong>Hi Chris</strong><br /> You have {this.props.data['left']} tasks to complete. You have {this.props.data['highPriority']} high priority tasks(s).  You have 10 more tasks due next week. </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        );

    }


}

export default Welcome;