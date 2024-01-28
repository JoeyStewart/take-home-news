# Take Home News

## Abstract:

This was a take home project made to simulate what may be given during the course of the interview process. This project aims to create fetch calls to pull information from News APIs. Cards were created to insert quick overview information of each article and allowing the using to 'click' the card so that the article may present further details. 


## Installation Instructions:
1. Click the green `code` button.
2. Copy SSH to your clipboard.
3. Open up the terminal.
4. Change into the directory you wish to clone the app into with the cd command.
5. Use the git clone command followed by pasting the copied SSH key.
6. Change into the cloned directory with the cd command.
7. Install dependencies by typing npm install into the terminal
8. Type npm install react react-dom into the terminal
9. Type npm start into the terminal
10. Copy the link it provides. It will look like similiar to this: http://localhost:3000/#/
11. Paste it into your web browser of choice
12. Enjoy!

## Preview of App:

[High Peaks GitHub Repository](https://github.com/JoeyStewart/High-Peaks)


## Context:
This app was created during the intermission period between moduls 3 and 4 of Turings  software development program. It's aim is to help provide a bases for accurately describing the code that is created in this app. The purpose of this is for better preperation for real world application when it comes to the interview process. 

## Contributors:
  
[Joey Stewart](https://github.com/JoeyStewart)  

## Learning Goals:

* Use routing, fetch calls, and useState to work the data into a way that satisfies all expectations.

* Create a user interface that is easy to use and displays information in a clear way.

* Write DRY, reusable code that follows SRP and trends toward function purity

* Implement a robust testing suite using Cypress.

* Make network requests to retrieve data.


## Major Wins:
### Joey:
This project is very similar to one that we did early in mod 3. That project took consistant work over the course of 10 days, while I was able to finish this project in its current state in under 8 hours. The progress of my understanding of React fills me with great a sense of achievement.


## Challenges and How We Overcame Them:
### Joey:
There were no major hurdles. Cypress once again gave me some pause with the stubbing process, but it did not take me too long to realize what and why it is happening. I've discovered that the api that I modify to pull direct data on a single object, does not always line up with how its constructed in the app, and what is needed to be tested. I simply have to copy and past the get request api that shows in cypress during testing, and use that within my intercept. 
