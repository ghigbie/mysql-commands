const generalCommands = {
    start: {
        command: 'mysql-ctl cli',
        description: 'Starts the MYSQL server'
    },
    show: {
        command: 'SHOW DATABASES',
        description: 'Provides a list of all databases on the MYSQL server'
    },
    create: {
        command: 'CREATE DATABASE <database name>',
        description: 'Creates a database for use'
    },
    drop: {
        command: 'DROP DATABASE <database name>',
        description: 'Deletes a database, so that it can no longer be used'
    },
    use: {
        command: 'USE <database name>',
        description: 'Selects a database to use'
    },
    select: {
        command: 'SELECT database()',
        description: 'Shows the database that is currently in use'
    }
};

const insertingData = {
    
}