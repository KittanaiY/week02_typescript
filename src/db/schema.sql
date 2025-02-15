-- Create the database
CREATE DATABASE IF NOT EXISTS events;

-- Use the database
USE events;

CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    petsAllowed BOOLEAN NOT NULL,
    organizer VARCHAR(255) NOT NULL
);