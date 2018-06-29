import React, { Component } from 'react';
import './MainContent.css';

import Table from './../Table';

const MainContent = (props) => (
            <div>
                <h1>Main Content</h1>
                <Table tableTitle={'General Commands'} tableRows={props.tableData} />
                <Table tableTitle={'Table Commands'} tableRows={props.tableCommands} />
                <Table tableTitle={'Crud Operations'} tableRows={props.crudOperations} />
            </div>);
            
export default MainContent;