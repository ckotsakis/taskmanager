import React from "react";

class SearchBar extends React.Component{

    render() {
        return ( 
        <div>
            <table width="100%">
                <tbody>                
                    <tr>
                        <td><input className="form-control me-2 inputctrl" type="search" placeholder="Search" aria-label="Search" /></td>
                        <td>&nbsp;<button className="btn btn-sm btn-primary" id="addtask">NEW TASK</button></td>
                    </tr>
                </tbody>
            </table>           
        </div>
        )
    }
}

export default SearchBar;