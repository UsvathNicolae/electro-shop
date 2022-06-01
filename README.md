# electro-shop

Online electronics shop with an additional mobile app for checking the status of your order.

The user will also receive a confirmation email.

## Technologies

Frontend clients:

  - Web client: React

  - Mobile client: React Native

Backend: 

  - Nodejs + Express

Database: 

  - MySQL + Sequalize ORM




## Starting project

### Web Client

Run `yarn start`

### Mobile

Install `Expo Go` app on your smartphone

Run `yarn start` in the mobile directory

Scan QR code with Expo Go app for android and with your phone's camera for iOS

### Backend

Install docker desktop

Create a .env file and use your password

In root server directory run `docker-compose up`

Go to the adminer page (`localhost:9000`) and manually create a database with the name `shop`
