# stack-pack-gpapi-demo
### _Get started with the GoodPractice API using this introductory demo application._

## Introduction
The main GoodPractice API (GP-API) is a comprehensive RESTful API that gives registered clients highly _secure_ access to almost all of the features we at GoodPractice use internally to create and present our award-winning content for Leaders and Managers.

Giving clients access to the GP-API is a great idea but the big hurdle is the security. It is, frankly, a tricky thing to perform the security handshake when you are completely new to the GP-API and of course, it is always the _first_ thing that must be done before getting access to the GP-API features.

## Getting Started
To help out our clients we have created two ways to get started that provide a gentle slope to success. The first is our full documentation [GP-API Documentation](http://docs.goodpracticeapi.apiary.io/). This is _smart documentation_ that allows you to not only review the workings of the GP-API but also to safely try out each endpoint via a built in mock-server. The mock server returns static mock data when an end-point is called meaning you can try all this out without any security so the hurdle to experimenting with the GP-API is completely removed.

Once you have some experience with the GP-API using the [GP-API Documentation](http://docs.goodpracticeapi.apiary.io/) you can move onto building a real, secure app using the GP-API. This is where the [stack-pack-gpapi](https://github.com/gp-technical/stack-pack-gpapi) module comes in. This package is a helper module that greatly simplifies the security handshake process and then any subsequent access to the main GP-API endpoints leaving you free to just pick and use the end-points that you need without worrying about encryption or identity-tokens.

## About This demo
This demo app is intended to get you started using the [stack-pack-gpapi](https://github.com/gp-technical/stack-pack-gpapi) helper package. It defines its own simple façade API with a few example end-points that will have you listing and displaying GoodPractice content in just a few minutes. These demo API end-points each use the [stack-pack-gpapi](https://github.com/gp-technical/stack-pack-gpapi) package to call out to the main GP-API and return the results.

Use this demo to test out each of the example end-points, they can be individually called and the resulting JSON is displayed. If you request content (article) then the HTML is also displayed with some simple formatting.

Of course the main  GP-API supports many more features than this demo shows. Please see the [GP-API Documentation](http://docs.goodpracticeapi.apiary.io/) for more details.

### Environment Variables
To use the demo you will need to create and populate a `.env` file and place it in the root of the demo application.

![location of .env file](https://s4.postimg.org/4bq9rahh9/stack-pack-gpapi-demo_env_file_location.png)

Once you have this empty file you need to fill it with your environment variables. Here are the values you need

```
# GENERAL
API_NAME=stack-pack-gpapi-demo
API_PORT=3001
API_ROOT=http://localhost:3001

# GP-API
GP_API_URL=https://api.staging.goodpractice.net
GP_API_PUBLIC=[request this key from GoodPractice]
GP_API_SECRET=[request this key from GoodPractice]
```
