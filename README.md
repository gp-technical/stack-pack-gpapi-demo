# stack-pack-gpapi demo

### _Get started with the GoodPractice API using this introductory demo application._

This application demonstrates the use of the `stack-pack-gpapi` module. This module is available as a [github repo](https://github.com/gp-technical/stack-pack-gpapi) and a public [npm package](https://www.npmjs.com/package/stack-pack-gpapi)

```
npm install stack-pack-gpapi --save
```

## Introduction

The main GoodPractice API (GP-API) is a comprehensive RESTful API that gives registered clients highly _secure_ access to almost all of the features we at GoodPractice use internally to create and present our award-winning content for Leaders and Managers.

Giving clients access to the GP-API is a great idea but the big hurdle is the security. It is typically tricky to perform the security handshake, especially when you are completely new to the GP-API. And of course, it is always the _first_ thing that must be done before getting access to the GP-API features.

## Getting Started

To help soothe this pain we have created two ways to get started that together help provide a gentle slope-to-success. The first is our full [GP-API Documentation](http://docs.goodpracticeapi.apiary.io/). This is _smart documentation_ that allows you to review the workings of the GP-API and _safely_ try out each endpoint via a built in mock-server. The mock server returns static mock data whenever an end-point is called. In this way you can experiment and learn without any security headaches.

Once you have some experience with the GP-API using the [GP-API Documentation](http://docs.goodpracticeapi.apiary.io/) you can move onto building a real, secure app using the GP-API. This is where the [stack-pack-gpapi](https://github.com/gp-technical/stack-pack-gpapi) module, featured in this demo, comes in. This package is a helper [npm-module](https://www.npmjs.com/package/stack-pack-gpapi) that greatly simplifies the security handshake process and then any subsequent access to the main GP-API endpoints. This leaves you free to just pick and use the end-points that you need without worrying about encryption or identity-tokens - its all done for you, correctly and securely.

## About This demo

This demo app is intended to get you started using the [stack-pack-gpapi](https://github.com/gp-technical/stack-pack-gpapi) helper package. It defines its own simple façade API that will have you listing and displaying GoodPractice content in just a few minutes. These demo API end-points each use the [stack-pack-gpapi](https://github.com/gp-technical/stack-pack-gpapi) package to call out to the main GP-API and return the results.

Use this demo to test out each of the example end-points, they can be individually called and the resulting JSON is displayed. If you request content (article) then the HTML is also displayed with some simple formatting.

Of course the main GP-API supports many more features than this demo shows. Please see the [GP-API Documentation](http://docs.goodpracticeapi.apiary.io/) for more details.

### Registering Your Application

The [stack-pack-gpapi](https://github.com/gp-technical/stack-pack-gpapi) helper package is only intended for use by legitimate clients of GoodPractice in order to make accessing the GP-API easier. Before using the package you must first request a `public-key` and a `secret-key`, and provide these as environment variables (see below), in order to gain access to the API. You can request these keys by contacting GoodPractice support or speaking to your GoodPractice client representative.

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

### Installing The Dependencies

Don't forget to install all the package dependencies. You can do this by issuing the `npm install` command on your favourite Command Line Interface (CLI).

### Running The Demo

#### Starting Up

To start the demo you need to run the `start` script contained in the `package.json` file. You can do this by issuing the `npm start` command. This will cause the script to run and demo api to start. You should also see CLI output that indicates the demo has successfully connected to the GP-API (staging version).

[![stack-pack-gpapi-demo_start_cli_output.png](https://s26.postimg.org/gd7yezxsz/stack-pack-gpapi-demo_start_cli_output.png)](https://postimg.cc/image/wbgo54s0v/)

#### Startup Notes

- The `stack-pack-gpapi-demo` application is running at `http://localhost:3001`
- There is an automatic GP-API health check at start up that shows everything is working. The `api_url` is pointing to the staging version: https://api.staging.goodpractice.net, it is running correctly and has access to its database.
- The `stack-pack-gpapi-demo` has been successfully authenticated itself as a registered application. The application's security token is displayed.
- The `stack-pack-gpapi-demo` has been successfully authenticated itself as a user. The user token is displayed.

#### Running The Browser

To see the demo UI you just need to put the root url of the `stack-pack-gpapi-demo` api into the browser bar, in this case `http://localhost:3001`

## Screenshots

### All Demo Endpoints

[![test_demo_endpoints.png](https://s26.postimg.cc/qnsqdjqt5/test_demo_endpoints.png)](https://postimg.cc/image/v9oulwcc5/)

### Example Result JSON

[![test_results_json.png](https://s26.postimg.cc/ovzripkbt/test_results_json.png)](https://postimg.cc/image/a018b48x1/)
