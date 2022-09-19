-- EMAIL NOT SENT
CREATE PROCEDURE orderEmailNotSent AS
SELECT * FROM Orders WHERE emailSent = 0 

-- SET EMAIL AS SENT
CREATE PROCEDURE orderSetEmailSent  
@id varchar(100)
AS
UPDATE Orders SET emailSent = 1 WHERE id = @id