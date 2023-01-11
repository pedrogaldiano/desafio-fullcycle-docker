create table db.people(name varchar(200));

 INSERT INTO db.people (name)
 VALUES ('Joao'),
        ('Maria'),
        ('Claudio');


--  GRANT SELECT, INSERT ON db.* TO 'root'@'%';
--  FLUSH PRIVILEGES;