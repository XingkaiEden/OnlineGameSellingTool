-- Create a new table called 'account_characters' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('sell_helper.account_characters', 'U') IS NOT NULL
DROP TABLE sell_helper.account_characters
GO
-- Create the table in the specified schema
CREATE TABLE sell_helper.account_characters
(
    belong_account_id INT NOT NULL PRIMARY KEY,
    -- primary key column
    lvl INT NOT NULL,
    pic_url [NVARCHAR](100) NOT NULL,
    _id INT FOREIGN KEY REFERENCES account(_id)
    -- specify more columns here
);
GO