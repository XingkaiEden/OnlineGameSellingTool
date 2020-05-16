-- Create a new table called 'is_server_selected' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('sell_helper.is_server_selected', 'U') IS NOT NULL
DROP TABLE sell_helper.is_server_selected
GO
-- Create the table in the specified schema
CREATE TABLE sell_helper.is_server_selected
(
    is_selected BOOLEAN NOT NULL PRIMARY KEY,
    -- primary key column
    -- specify more columns here
);
GO