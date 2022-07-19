#Alicia's NC News

## Front End React App

NC News is a news aggregation web app modelled on Reddit which I built in React.js during week nine of the Northcoders' Full Stack Developer Course.

This project aims to demonstrate some of the skills I've learnt in three weeks of front end study, mostly dedicated to React subjects including:

- React DOM
- React Lifecycle
- React Routing
- Optimistic Rendering
- Error Handling

This front end application interacts with the back end RESTful API I created during week six of the course. Details of the API may be found on Github: https://github.com/aliciabarczak/NC-News-BE.

## Using NC News

A working example of this app is hosted on Netlify at: https://nc-news-practice-site.netlify.app.

### Functionality

For demonstration purposes, you will need to sign into the application as user "jessjelly".

#### Homepage

On loading, the homepage requests a list of topics and articles from the API.

The list of all topics is passed to the Navigation component in order to generate the listed links in the Navigation sidebar

The list of all articles are passed to a seperate component in order to display a summary of all articles, or articles by topic, based on the supplied route.

The articles may also be sorted by:

- date
- vote count
- comment count

### Individual Article Routes

The Article component requests and displays an article based on the supplied route. It displays:

- the full article
- associated meta data:
- author
- publication date
- vote and comment counts
- option to view the comments associated with the article

Authorised users may:

- vote the article up or down
- publish comments on the article
- delete their own comments

### Errors

Bad route errors result in the relevant 400/404 page.

API errors result in the API error status code and message being displayed to the user.

## Installing a Local Copy

These instructions will help you to get a copy of NC News up and running on your local machine.

### Pre-requite Software and Packages

Ensure you have the installed Node.js 17.7.1.

Fork and clone this repository from: https://github.com/ben-web/NC-News-Front-End

Inside this new directory, install the required npm packages:

```
npm i
```

To start the application, run this command in the CLI:

```
npm run start
```
