-- Create a new table called 'selected_accounts' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('sell_helper.selected_accounts', 'U') IS NOT NULL
DROP TABLE sell_helper.selected_accounts
GO
-- Create the table in the specified schema
CREATE TABLE sell_helper.selected_accounts
(
    selected_accounts_id INT NOT NULL PRIMARY KEY,
    -- primary key column
    _id INT FOREIGN KEY REFERENCES account(_id)
    -- specify more columns here
);
GO