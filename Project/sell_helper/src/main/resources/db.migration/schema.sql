DROP TABLE is_server_selected cascade;
DROP TABLE game cascade;
DROP TABLE game_servers cascade;
DROP TABLE game_characters cascade;
DROP TABLE account cascade;
DROP TABLE account_characters cascade;
DROP TABLE selected_accounts cascade;



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
    pic_url VARCHAR(100) 
    -- specify more columns here
);


-- Create the table in the specified schema

CREATE TABLE game_servers
(
    belong_to_game VARCHAR(50) NOT NULL ,
    -- primary key column
    server_name VARCHAR(50) NOT NULL , 

    game_name VARCHAR(50) REFERENCES game(game_name)
    -- specify more columns here
);

-- Create a new table called 'game_characters' in schema 'SchemaName'

-- Create the table in the specified schema

CREATE TABLE game_characters
(
     character_name VARCHAR(100) NOT NULL PRIMARY KEY,
    belong_to_game VARCHAR(100) NOT NULL,
    -- primary key column
    lvl INT NOT NULL,
    pic_url VARCHAR(100) NOT NULL,
    game_name VARCHAR(50) REFERENCES game(game_name)
    -- specify more columns here
);

-- Create the table in the specified schema



CREATE TABLE account
(
    _id INT NOT NULL PRIMARY KEY,
    -- primary key column
    game_name VARCHAR(50) NOT NULL,
    server_name VARCHAR(50) NOT NULL
    -- specify more columns here
);
CREATE TABLE selected_accounts
(
    selected_account_id INT NOT NULL PRIMARY KEY,
    -- primary key column
    _id INT REFERENCES account(_id)
    -- specify more columns here
);

-- Create the table in the specified schema

CREATE TABLE account_characters
(
    character_name VARCHAR(100) NOT NULL PRIMARY KEY,
    belong_account_id INT NOT NULL ,
    -- primary key column
    lvl INT NOT NULL,
    pic_url VARCHAR(100),
    _id INT REFERENCES account(_id)
    -- specify more columns here
);

INSERT INTO account(_id, game_name, server_name) VALUES (1,'q','apple');

INSERT INTO account(_id, game_name, server_name) VALUES (2,'w','apple');

INSERT INTO account(_id, game_name, server_name) VALUES (3,'e','apple');

INSERT INTO account(_id, game_name, server_name) VALUES (4,'r','andrion');



INSERT INTO account_characters(character_name, lvl, belong_account_id) VALUES ('sdfsd',1,1);
INSERT INTO account_characters(character_name, lvl, belong_account_id) VALUES ('sdwer',2,1);
INSERT INTO account_characters(character_name, lvl, belong_account_id) VALUES ('zxcvfbv',3,2);
INSERT INTO account_characters(character_name, lvl, belong_account_id) VALUES ('werer',2,1);
