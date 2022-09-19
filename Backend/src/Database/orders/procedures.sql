-- CREATE OR UPDATE ORDER
CREATE PROCEDURE CreateUpdateOrder
    @id varchar(100),
    @name varchar(200),
    @sender varchar(200),
    @sendername varchar(200),
    @receiver varchar(200),
    @receivername varchar(200),
    @destination varchar(200),
    @weight varchar(200),
    @price varchar(200),
    @status varchar(200),
    @isDeleted bit
AS
BEGIN
    IF EXISTS  (select *  from Orders  where id=@id)
        BEGIN
            UPDATE Orders
            SET
            name= @name,
            sender = @sender,
            sendername=@sendername,
            receiver= @receiver,
            receivername = @receivername,
            destination=@destination,
            weight=@weight,
            price=@price,
            status=@status,
            isDeleted=@isDeleted,
            emailSent = 0

            WHERE id = @id
          
        END
        
    ELSE
        BEGIN
            INSERT INTO Orders
            (id, name, sender, sendername,receiver,receivername, destination,weight,price,status, isDeleted)
            VALUES
            (@id, @name, @sender,@sendername, @receiver,@receivername, @destination, @weight, @price, @status,@isDeleted);
        END
END

-- GET ALL ORDERS
CREATE PROCEDURE getOrder
AS
BEGIN
SELECT * FROM Orders
END

-- GET A SPECIFIC ORDER
CREATE PROCEDURE getOrder(@id VARCHAR(100))
AS
BEGIN
SELECT * FROM Orders WHERE id =@id
END

-- SOFT DELETE
CREATE PROCEDURE deleteOrder(@id VARCHAR(100))
AS
BEGIN
UPDATE Orders SET isDeleted = true WHERE id =@id
END

