# Hogwartsy Reviews
<img src="./etsy_gif_fec.gif" />
<br/>
Built using React, the Hogwartsy reviews component/microservice is one part of a larger Etsy clone. The gif above shows a demo of the complete application which was built using service oriented architecture. Docker was used to containerize the microservices. A custom event web API was used to enable communication between the services. Lastly, a reverse proxy server was deployed via Elastic Beanstalk and used to direct client requests appropriately.
<br/>
The review's component uses Etsy's public API along with data generation tools such as faker.js to render reviews for a product. Following Etsy's model, it renders reviews for the product itself and for the seller as a whole.
<br/>

## Stack

This component is built with the following technologies:
<br/>

* React to build out the front end
* Express for the server, and body-parser to parse routes
* MySQL for the database
* Etsy API and Faker.js for real and realistic information

### Challenges

One of the main challenges of building out the reviews component was not being able to retrieve all the necessary info from the Etsy public API. Because a lot of the user info was private, I had to use Faker.js to generate fake user avatars, names, dates, etc. 

Also, because the user info was private, I decided to randomly choose which user uploaded a photo with their review to simulate more realistic data. Moreover, since the Etsy API did not provide info on which exact product a review pertained to (it just provides all reviews for the particular seller), in order to simulate an effect "For this shop" tab that differentiates it from the "For this item" tab, I simply pulled the data in reverse order by date. This decision was made because the focus of the application was the front end.

Lastly I accounted for the fact that sometimes a seller only sells one product, in which case the component only displays one tab. I also accounted for the fact that sometimes a product doesn't have a review yet.
