-- Create a new user 'auth_user'@'localhost' and set the password
CREATE USER 'auth_user'@'localhost' IDENTIFIED BY 'Auth123';

-- Grant all privileges on the 'auth' database to the 'auth_user'@'localhost' user
GRANT ALL PRIVILEGES ON auth.* TO 'auth_user'@'localhost';

-- Flush privileges to apply the changes
FLUSH PRIVILEGES;

-- Create the database 'auth' if it doesn't exist
CREATE DATABASE IF NOT EXISTS auth;

-- Switch to the 'auth' database
USE auth;

-- Create the 'user' table
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Insert sample user data into the 'user' table
INSERT INTO user (email, password) VALUES ('sanjay@gmail.com', 'admin123');
