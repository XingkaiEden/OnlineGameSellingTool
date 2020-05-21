
-- DROP TABLE selected_server cascade;
DROP TABLE game cascade;
DROP TABLE game_servers cascade;
DROP TABLE game_characters cascade;
DROP TABLE account cascade;
DROP TABLE account_characters cascade;
DROP TABLE selected_accounts cascade;



CREATE TABLE selected_server
(
    server_name VARCHAR(100) NOT NULL PRIMARY KEY
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
    lvl INT ,
    pic_url VARCHAR(100) ,
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
    character_name VARCHAR(100) NOT NULL ,
    belong_account_id INT NOT NULL ,
    -- primary key column
    lvl INT,
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




-- INSERT INTO game_characters(belong_to_game, lvl, character_name) VALUES ('山海镜花', 1, 'dadfd');
-- INSERT INTO game_characters(belong_to_game, lvl, character_name) VALUES ('山海镜花', 2, 'bvvv');


--insert 山海镜花
    -- game
    INSERT INTO game(game_name, pic_url) VALUES ('山海镜花','../pic/山海镜花.png');
    -- game_servers
    INSERT INTO game_servers(belong_to_game, server_name) VALUES ('山海镜花', '苹果') ;
INSERT INTO game_servers(belong_to_game, server_name) VALUES ('山海镜花', '安卓') ;
    -- game_characters
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('常羲', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('太子长琴', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('烛阴', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('蚩黎', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('相柳', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('祝融', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('宵明', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('九尾狐', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('夸父', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('魃', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('乘黄', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('★共工', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('凤皇', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('烛光', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('★天狗', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('金乌七宸', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('蜚', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('金乌仲灵', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('强良', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('葱聋', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('天狐', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('驳', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('奢比', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('鬼面童子', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('雍和', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('大鵹', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('何罗', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('毕方', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('天昊', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('白蛇', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('羿', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('巫礼', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('云芝', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('神芝', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('句芒', 0,'山海镜花');
    INSERT INTO game_characters(character_name, lvl,belong_to_game) VALUES('祸斗', 0,'山海镜花');
    