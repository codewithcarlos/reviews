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


SELECT 
  b.*, 
  a.reviews_count,
  c.image_url
FROM listings a 
LEFT JOIN feedback b 
  ON a.user_id = b.user_id
LEFT JOIN images c
  ON a.listing_id = c.listing_id
WHERE a.listing_id = '651186954' and b.message IS NOT NULL;