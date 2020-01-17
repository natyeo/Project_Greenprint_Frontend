<img src="https://user-images.githubusercontent.com/29664811/72540951-96c65500-3879-11ea-8310-9130f4e3c6e7.png" align="right" />

# Project Greenprint Frontend

[![Build Status](https://travis-ci.org/natyeo/Project_Greenprint_Frontend.svg?branch=master)](https://travis-ci.org/natyeo/Project_Greenprint_Frontend)
![Planet needs saving](https://img.shields.io/badge/planet-needs%20saving-green)

---

## About

A travel app for the environmentally conscious. Simply enter origin and destination locations in the search function and receive available routes for transit, car, cycle, walking and flight along with their carbon emissions. Sign up for additional features such as being able to save journeys and view them in your personalised dashboard!

Visit our site at https://project-greenprint-frontend.herokuapp.com/

You can use this with our backend API: `https://github.com/natyeo/Project_Greenprint_Backend` or your own.

### DEMO

![](https://github.com/natyeo/Project_Greenprint_Frontend/blob/master/pictures/Project%20Greenprint.gif?raw=true)

### Team

<a href="https://github.com/elfiyang16" target="new"><img src="https://avatars3.githubusercontent.com/u/29664811?s=400&v=4" width="60" height="60" hspace="5" title="Elfi Yang"></a>
<a href="https://github.com/jonesandy" target="new"><img src="https://avatars0.githubusercontent.com/u/26009223?s=400&v=4" width="60" height="60" hspace="5" title="Andy Jones"></a>
<a href="https://github.com/SevenSecrets" target="new"><img src="https://avatars0.githubusercontent.com/u/53475555?s=400&v=4" width="60" height="60" hspace="5" title="Freddie Smith Hughes"></a>
<a href="https://github.com/fahus" target="new"><img src="https://avatars0.githubusercontent.com/u/52044764?s=400&v=4" width="60" height="60" hspace="5" title="Faduma Hussein"></a>
<a href="https://github.com/sarar0" target="new"><img src="https://avatars2.githubusercontent.com/u/45262110?s=400&v=4" width="60" height="60" hspace="5" title="Sara Rancati"></a>
<a href="https://github.com/natyeo" target="new"><img src="https://avatars2.githubusercontent.com/u/49326857?s=400&v=4" width="60" height="60" hspace="5" title="Natalie Yeo"></a>

## Setup

Clone this repository. Once inside the root folder run the following command to install dependencies.

```bash
npm install
```

To run the server locally, type `npm start`
Application will run on `localhost:3000`

### Testing

To run end-to-end tests:
`npx cypress open`
For unit tests:
`npm test`

## Usages
- User can search for the available routes(mode/distance/time/carbon emission)for ground and air journey
- User can be redirected to the Google Maps route for that specific route
- User can sign up/login to save their journey
- User can go to `dashboard` section to view a breakdown of their journey history 

### Overview of the app

![overview](https://user-images.githubusercontent.com/29664811/72539764-c2e0d680-3877-11ea-9141-e97056b3c1ea.png)

### Plan a ground journey

![make_journey-ground](https://user-images.githubusercontent.com/29664811/72539893-f1f74800-3877-11ea-808e-1ef401413dbb.png)

### Redirect to Google Map

![redirect](https://user-images.githubusercontent.com/29664811/72539923-00456400-3878-11ea-86fe-9d676f862fbf.png)

### Plan a flight

![make_journey-air](https://user-images.githubusercontent.com/29664811/72539963-0b988f80-3878-11ea-9fe4-6dd596021f02.png)

### Save journey to dashboard

![save-journey](https://user-images.githubusercontent.com/29664811/72539981-1521f780-3878-11ea-86ea-ba4ab7a3ff60.png)

### Dashboard

The dashboard is based on history journey data (available upon signing up) of that specific user, where we display a detailed analysis of:

- carbon(kg) per journey taken by transport mode (rail, car, or plane)
- distance(miles) travelled by transport mode
- total carbon(kg) by mode of transport

![dashboard1](https://user-images.githubusercontent.com/29664811/72539997-1eab5f80-3878-11ea-8902-04e706bd9421.png)

![dashboard2](https://user-images.githubusercontent.com/29664811/72540002-210db980-3878-11ea-986f-76b779e2a2a6.png)

## API local usage

API runs with the following technologies:

- [Node JS](https://nodejs.org/en/)
- [React](https://reactjs.org/)

API tested with the following frameworks:

- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
