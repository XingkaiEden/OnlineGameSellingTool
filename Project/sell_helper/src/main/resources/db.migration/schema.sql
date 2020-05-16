
CREATE TABLE is_server_selected
(
    is_selected BOOLEAN NOT NULL PRIMARY KEY
    -- primary key column
    -- specify more columns here
);


-- Create the table in the specified schema
CREATE TABLE game
(
    game_name VARCHAR(50) NOT NULL PRIMARY KEY,
    -- primary key column
    pic_url VARCHAR(100) NOT NULL
    -- specify more columns here
);


-- Create the table in the specified schema
CREATE TABLE game_servers
(
    belong_to_game VARCHAR(50) NOT NULL PRIMARY KEY,
    -- primary key column
    server_name VARCHAR(50) NOT NULL,
    game_name VARCHAR(50) REFERENCES game(game_name)
    -- specify more columns here
);

-- Create a new table called 'game_characters' in schema 'SchemaName'

-- Create the table in the specified schema
CREATE TABLE game_characters
(
    belong_to_game VARCHAR(100) NOT NULL PRIMARY KEY,
    -- primary key column
    lvl INT NOT NULL,
    pic_url VARCHAR(100) NOT NULL,
    game_name VARCHAR(50) REFERENCES game(game_name)
    -- specify more columns here
);

-- Create the table in the specified schema
CREATE TABLE selected_accounts
(
    selected_accounts_id INT NOT NULL PRIMARY KEY,
    -- primary key column
    _id INT REFERENCES account(_id)
    -- specify more columns here
);
CREATE TABLE account
(
    _id INT NOT NULL PRIMARY KEY,
    -- primary key column
    game_name VARCHAR(50) NOT NULL,
    server_name VARCHAR(50) NOT NULL
    -- specify more columns here
);

-- Create the table in the specified schema
CREATE TABLE account_characters
(
    belong_account_id INT NOT NULL PRIMARY KEY,
    -- primary key column
    lvl INT NOT NULL,
    pic_url VARCHAR(100) NOT NULL,
    _id INT REFERENCES account(_id)
    -- specify more columns here
);

