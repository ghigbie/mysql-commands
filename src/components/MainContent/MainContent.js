import React from 'react';
import './MainContent.css';

import Table from './../Table/Table';

const MainContent = (props) => (
            <div>
                <h1>Main Content</h1>
                <Table tableTitle={'General Commands'} tableData={props.tableData.generalCommands} />
                <Table tableTitle={'Table Commands'} tableData={props.tableData.tableCommands} />
                <Table tableTitle={'Crud Operations'} tableData={props.tableData.crudOperations} />
            </div>);
            
export default MainContent;