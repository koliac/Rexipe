# Rexipe

## Overview

This website is still working in progress. It is created as my final projest for Prof. [Joe Versoza](http://cs.nyu.edu/~jversoza/)'s Applied Internet Technology course. Rexipe the website is designed for people to find a recipe they like with great convenience. The webiste pulls thousands of recipes from the internet and the [Spoonacular](https://www.spoonacular.com/)'s recipe repository. As a registered user, one can also contribute their own recipe for sharing. One unique feature of this website is to look up restaurants in your surrounding area that sells the dish you are interested in, in case you are feeling too lazy to cook.

## Technology

Express.js, Handlebars.js, Passport.js, Mongoose, Boostrap


## Data Model

This is an example of how the data is stored
![data model](documentation/data_model.PNG)

Please click [here](db.js) to view the first draft of the data schema

## Wireframe

WHat you see when you enter the site
![home_page](documentation/mockup_export/Home-Page.png)
What you see after you click "About"
![About](documentation/mockup_export/About.png)
How a recipe is displayed
![Recipe](documentation/mockup_export/Recipe.png)
What you see when you log in
![User Dashboard](documentation/mockup_export/User-Dashboard.png)
What you see when you click on any of the sub-tab under "Recipe"
![recipe list](documentation/mockup_export/recipe-list-page.png)

## Site Map

![sitemap](documentation/sitemap.png)

## User Stories

- As a user, I can search for recipes
- As a user, I can see which restaraunts are selling a certain dish in a specific area
- As a user, I can register an account
- As a registered user, I can log in to user dashboard
- As a registered user, I can bookmark recipes that I like
- As a registered user, I can contribute my own recipes

## Research Topic

- (5 points) User authentication using passport.js
- (2 points) Style the site using Boostrap CSS framework
- (4 points) APIs
  - Food API by Spoonacular: allow me to pull thousands of recipes from all diffrent websites.
  - Zomato API: allow me search restaurant based on a dish name


## Initial Project File

click [here](rexipe.js) to view the initial project File
