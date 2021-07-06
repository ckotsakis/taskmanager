import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class SearchBar extends React.Component{

    onFormSubmit = event => {

        event.preventDefault();
       
        this.props.onSubmit("OMG HOW DID THIS WORK");

    }


    render() {
        return ( 
        <div>
            <form id="testpost" onSubmit={(event) => this.onFormSubmit(event)}>
                <table width="100%">
                    <tbody>                
                        <tr>
                            <td><input className="form-control me-2 inputctrl" type="search" placeholder="Search" aria-label="Search" /></td>
                            <td>&nbsp;<button className="btn btn-sm btn-primary"><FontAwesomeIcon icon={["fas","plus"]}/> NEW TASK</button></td>
                        </tr>
                    </tbody>
                </table>           
            </form>
        </div>

        )
    }
}

export default SearchBar;