import React, { Component } from 'react';
import './Table.css';

class Table extends Component{
    render(){
        return(
            <div>
                <table>
                    <tr>
                        <th>Command</th>
                        <th>Description</th>
                    </tr>
                    {this.props.generalCommands.map((command, index) => (
                        <tr key={index}>
                            <td>{command.command}</td>
                            <td>{command.description}</td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}

export default Table;