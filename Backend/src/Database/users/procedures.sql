-- CREATE NEW ACCOUNT
CREATE PROCEDURE newUser( @id VARCHAR(80),@name VARCHAR(200), @email VARCHAR(200), @password VARCHAR(200),@role VARCHAR(200))
AS
BEGIN
INSERT INTO Users(id,name,email,password) VALUES(@id, @name, @email, @password,@role)
END

-- GET A SPECIFIC USER
CREATE PROCEDURE getUser(@email VARCHAR(200))
AS
BEGIN
SELECT * FROM Users WHERE email =@email
END