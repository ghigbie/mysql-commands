import React from 'react';
import './MainContent.css';

import Table from './../Table/Table';

const MainContent = (props) => (
            <div>
                <h1>Main Content</h1>
                <Table tableTitle={props.tableData.tableTitles[0]} tableData={props.tableData.generalCommands} />
                <Table tableTitle={props.tableData.tableTitles[1]} tableData={props.tableData.tableCommands} />
                <Table tableTitle={props.tableData.tableTitles[2]} tableData={props.tableData.crudOperations} />
            </div>);
            
export default MainContent;