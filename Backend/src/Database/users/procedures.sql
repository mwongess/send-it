-- GET A SPECIFIC USER
CREATE PROCEDURE getUser(@email VARCHAR(200))
AS
BEGIN
SELECT * FROM Users WHERE email =@email
END

-- DETAILED PROCEDURE
CREATE PROCEDURE InsertUpdateUser
(
    @id varchar(255) null,
    @name varchar(255) null,
    @email varchar(255) null,
    @hashedpassword varchar(255)  null,
    @role varchar(255)  null,
)
AS
BEGIN
if exists (select *  from Users  where id=@id)
BEGIN
    update Users set id=@id,name=@name ,email=@email,password=@hashedpassword,role=@role,WHERE id=@id
END
else
    BEGIN
        INSERT INTO Users(id,name,email,password,role,)
        VALUES(@id,@name,@email,@hashedpassword,@role,)
    END
END