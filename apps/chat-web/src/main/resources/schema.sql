CREATE TABLE IF NOT EXISTS conversation (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    message VARCHAR(200) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS chatMessage (
    id INT NOT NULL AUTO_INCREMENT,
    conversationId INT NOT NULL,
    message VARCHAR(200) NOT NULL,
    author VARCHAR(20),
    PRIMARY KEY (id),
    FOREIGN KEY (conversationId) REFERENCES conversation(id) ON DELETE CASCADE
);
