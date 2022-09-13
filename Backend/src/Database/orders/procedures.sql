-- CREATE NEW ORDER
CREATE PROCEDURE newOrder(@id VARCHAR(100) , @name VARCHAR(200) , @sender VARCHAR(200),@receiver VARCHAR(200), @destination VARCHAR(200),@status VARCHAR(200),@isDeleted BIT)
AS
BEGIN
INSERT INTO Orders(id,name,sender,receiver,destination,status,isDeleted )VALUES (@id,@name,@sender,@receiver,@destination,@status,@isDeleted)
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

-- UPDATE A SPECIFIC ORDER
CREATE PROCEDURE updateOrder(@id VARCHAR(100) , @name VARCHAR(200) , @sender VARCHAR(200), @receiver VARCHAR(200), @destination VARCHAR(200), @status VARCHAR(200), @isDeleted BIT)
AS
BEGIN 
UPDATE Orders SET id=@id , name=@name , from=@sender, to=@receiver, destination=@destination, status=@status, isDeleted=@isDeleted WHERE id =@id
END

-- DELETE A SPECIFIC ORDER
CREATE PROCEDURE deleteOrder(@id VARCHAR(100))
AS
BEGIN
DELETE FROM Orders WHERE id =@id
END
