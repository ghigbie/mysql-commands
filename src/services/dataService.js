//this can be restructured as one big object with allof the arrays as props of the object
const generalCommands = [
    {
        command: 'mysql-ctl cli',
        description: 'Starts the MYSQL server'
    },
    {
        command: 'SHOW DATABASES',
        description: 'Provides a list of all databases on the MYSQL server'
    },
    {
        command: 'CREATE DATABASE <database name>',
        description: 'Creates a database for use'
    },
    {
        command: 'DROP DATABASE <database name>',
        description: 'Deletes a database, so that it can no longer be used'
    },
    {
        command: 'USE <database name>',
        description: 'Selects a database to use'
    },
    {
        command: 'SELECT database()',
        description: 'Shows the database that is currently in use'
    },
    {
        command: 'SHOW TABLES',
        description: 'Shows a list of tables'
    },
    {
        command: 'SHOW COLUMNS FROM <table name>',
        description: 'Shows the contents of a table'
    },
    {
        command: 'DESC <table name>',
        description: 'Shows the contents of a table'
    },
    {
        command: 'DROP TABLE <table name>',
        description: 'Deletes a table from the database'
    }
];

const insertingData = [
    {
        command: 'INSERT INTO <table name> (<column name>, <column name>) VALUES (<actual value>, <actual value>)',
        description: 'Inserts data into table'
    },
    {
        command: 'SELECT * FROM <table name>',
        description: 'Shows all data in a table'
    }
];

const allCommands = {
    generalCommands: generalCommands,
    insertingData: insertingData
};

export default generalCommands;