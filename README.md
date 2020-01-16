<img src="./docs/_imgs/leaf.png" align="right" />

# Project Greenprint frontend API

[![Build Status](https://travis-ci.org/natyeo/Project_Greenprint_Frontend.svg?branch=master)](https://travis-ci.org/natyeo/Project_Greenprint_Frontend)
![Planet needs saving](https://img.shields.io/badge/planet-needs%20saving-green)

---

# App docs

App is hosted at

```
http://project-greenprint-frontend.herokuapp.com/
```

## Journey

This product is originated from the idea that we want to make a google map alternative with an emphasis on raising awareness of carbon footprint following up to every journey people make.

Aside from that, we also provide a dashboard based on history journey data (available upon signing up) of that specific user, where we display a detailed analysis of:

- carbon(kg) per journey taken by transport mode (rail, car, or plane)
- distance(miles) travelled by transport mode
- total carbon(kg) by mode of transport

Combining these two features together, we are hoping to educate people to make more environment-friendly trips when they plan a journey.

Connect to our app and save the planet now!

## Quickstart

**Installation**
First, clone this repository https://git@github.com:natyeo/Project_Greenprint_Frontend.git. Once inside the root folder run the following command to install dependencies:

```
  bash
  > npm install
  > npm start
```

### Testing

To run tests, navigate to root folder and run command

```bash
npm test
```

## Usages

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

![dashboard1](https://user-images.githubusercontent.com/29664811/72539997-1eab5f80-3878-11ea-8902-04e706bd9421.png)

![dashboard2](https://user-images.githubusercontent.com/29664811/72540002-210db980-3878-11ea-986f-76b779e2a2a6.png)

## API local usage

API runs with the following technologies:

- [Node JS](https://nodejs.org/en/)
- [Express JS](https://expressjs.com/)

API tested with the following frameworks:

- [Jest](https://jestjs.io/)
- [Supertest](https://github.com/visionmedia/supertest)
