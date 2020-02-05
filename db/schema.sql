DROP DATABASE IF EXISTS etsy_reviews;

CREATE DATABASE etsy_reviews;

USE etsy_reviews;

CREATE TABLE listings (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  listing_id INT NOT NULL,
  user_id INT NOT NULL,
  title VARCHAR(255),
  creation_tsz INT,
  reviews_count INT
);

CREATE TABLE feedback (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  message text,
  value INT,
  creation_tsz INT,
  reviewerAvatar text,
  reviewerName VARCHAR(255),
  reviewDate VARCHAR(15)
);

CREATE TABLE images (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  listing_id INT NOT NULL,
  image_url text,
  user_id INT NOT NULL
);

-- etsy api gives us &#39; instead of an apostrope. code below fixes this issue
-- UPDATE feedback 
-- SET message=REPLACE(message, '&#39;',"'");