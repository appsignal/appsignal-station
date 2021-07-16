# AppSignal Station 🚂

## Chooo choo, welcome to the coding assignment
You're invited to do a short coding task as part of your interviewing process at AppSignal. 

### General information
- You should take between 60-120 minutes to work on this, after you've set up the project.
- Please don't spend more time on this, in the spirit of fairness. Let us know how much time you actually spent on this!
- You'll get a gift card of $75 in return for your time. We do this because we want to be mindful of your time spend on this. 
- Alternatively, we can donate $75 to an open-source project of your choice.

### Guidelines
- We'll judge you the following criteria
  - Does it work?
  - Code clarity
  - Code qualtiy
  - Chosen patterns and solutions
  - Progress made
  - Your explanation of the code in the follow-up call
- Some tips to make this work smoothly
  - Write comments in your code
  - Make commits after making progress
  - Think about naming things 
  - Keep a some notes on what you found easy/hard
  - If you're unfamiliar with Jest or TailwindCSS, feel free to switch to something you're familiar with!
  - If you're stuck on something stupid, please reach out!

## The actual assignment
In this asignment, you'll use an open GraphQL API to build a small project in NextJS. We picked an API from the Deutsche Bahn that gives back information about train stations.

### What we prepared
- We created a HelloWorld component
- We created a page where at least one graphQL query is performed

### What you need to build
- [ ] An index page where you can search for stations
- [ ] Return the stations as cards
- [ ] Query and show additional information about the station
- [ ] An empty state if no stations can be found
- [ ] Tests for the features with Jest
- [ ] Add some minimal styling with TailwindCSS

## Some HTML to help you get started
- You can find some HTML for you to reuse here: https://play.tailwindcss.com/e8R9V2SlUn
  - A search form
  - A no results bar
  - An actual results

## Handing in the assignment
- Create a cloned version of the repository
- Invite @wesoudshoorn @jvanbaarsen @matsimitsu as collaborators
- Email Wes Oudshoorn when the assignment is done
- Plan a follow-up call with the link in your coding-interview invite email

## Getting Started

Clone the repository and install all dependencies:

```bash
yarn install
```

Replace the API token in `apollo-client.js` with the token you received from Wes by email

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the api used.

## API's used

We are using the DeutsheBahn graphQL API, a playground for this can be found  here: https://bahnql.herokuapp.com/graphql. 

## Tools used / installed

* Jest / React Testing Library
* TailwindCSS
* Apollo
* NextJS 10
