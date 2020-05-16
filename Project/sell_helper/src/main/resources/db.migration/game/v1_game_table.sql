-- Create a new table called 'game' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('sell_helper.game', 'U') IS NOT NULL
DROP TABLE sell_helper.game
GO
-- Create the table in the specified schema
CREATE TABLE sell_helper.game
(
    game_name [NVARCHAR](50) NOT NULL PRIMARY KEY,
    -- primary key column
    pic_url [NVARCHAR](100) NOT NULL,
    -- specify more columns here
);
GO