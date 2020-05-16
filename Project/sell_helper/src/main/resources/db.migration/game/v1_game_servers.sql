-- Create a new table called 'game_servers' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('sell_helper.game_servers', 'U') IS NOT NULL
DROP TABLE sell_helper.game_servers
GO
-- Create the table in the specified schema
CREATE TABLE sell_helper.game_servers
(
    belong_to_game [NVARCHAR](50) NOT NULL PRIMARY KEY,
    -- primary key column
    server_name [NVARCHAR](50) NOT NULL,
    game_name [NVARCHAR](50) FOREIGN KEY REFERENCES game(game_name)
    -- specify more columns here
);
GO