-- Create a new table called 'game_characters' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('sell_helper.game_characters', 'U') IS NOT NULL
DROP TABLE sell_helper.game_characters
GO
-- Create the table in the specified schema
CREATE TABLE sell_helper.game_characters
(
    belong_to_game [NVARCHAR](100) NOT NULL PRIMARY KEY,
    -- primary key column
    lvl INT NOT NULL,
    pic_url [NVARCHAR](100) NOT NULL,
    game_name [NVARCHAR](50) FOREIGN KEY REFERENCES game(game_name)
    -- specify more columns here
);
GO