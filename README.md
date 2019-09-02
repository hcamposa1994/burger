# Eat the Burger

#### What is this app doing and why?
The goal of this app is by using Node, Express, MySQL, and various ourer node packages, I created a simple app where a user can add their burger onto a menu, and with a click of a button indicated if that burger has been eaten yet or not.

#### How is the app organized?
Using Bootstrap, we created a simple layout with two columns indicating whether a burger has been eaten yet or not, below the columns the user has a text field to enter a burger.

### How to run this app
A heroku link is listed at the top if you'd rather just see it in action, if the link is dead or if you'd rather run the code locally, just follow below:

First you'll be needing [node.js](https://nodejs.org/en/download/); aside from that all necessary packages are in the package.json so after cloning the repo, just run the following command:
```
cd burger
npm i
create a .env file in the root of the repo to state your environment variables to set up your MySQL connection, such as your host, database, etc
node server.js
```
afterwards just go to localhost:3000 in your browser to run the app.
