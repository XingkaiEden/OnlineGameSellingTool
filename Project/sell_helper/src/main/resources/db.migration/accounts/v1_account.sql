-- Create a new table called 'account' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('sell_helper.account', 'U') IS NOT NULL
DROP TABLE sell_helper.account
GO
-- Create the table in the specified schema
CREATE TABLE sell_helper.account
(
    _id INT NOT NULL PRIMARY KEY,
    -- primary key column
    game_name [NVARCHAR](50) NOT NULL,
    server_name [NVARCHAR](50) NOT NULL
    -- specify more columns here
);
GO