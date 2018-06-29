import React from 'react';
import './Table.css';

const Table = (props) => (
            <div>
                <h3>{props.tableTitle}</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Command</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.tableData.map((command, index) => (
                            <tr key={index}>    
                                <td>{command.command}</td>
                                <td>{command.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>);

export default Table;