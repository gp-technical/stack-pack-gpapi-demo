# stack-pack-gpapi-demo
### _Get started with the GoodPractice API using this introductory demo application._

## Introduction
The main GoodPractice API is a fully secured RESTful API that gives client _secure_ access to the structure, features and content of any Subscription for which they have access

The problem is the security. It is quite tricky to perform the security handshake and get the token you need to call any of the main GoodPractice API end-points. It is for this reason that the GPAPI package has been written. It is a helper module that greatly simplifies the security handshake process and then any subsequent access to the main GoodPractice API endpoints leaving you free to just pick and use the end-points that you need without worrying about encryption or identity-tokens.

This demo app is intended to get you started using the GPAPI helper package. It defines its own simple façade API with a few choice example end-points that will have you listing and displaying GoodPractice content in just a few minutes. These demo API end-points each use the GPAPI package to call out to the main GoodPractice API and return the results.

Use this demo to test out each of the example end-points, they can be individually called and the resulting JSON is displayed. If you request a content (article) then the HTML is aslo displayed with some simple formatting.

Of course the main GoodPractice API supports many more features than this demo shows. You can see the complete documentation here (GoodPractice API Full Documentation)[http://docs.goodpracticeapi.apiary.io/]

## Environment Variables
To use the demo you will need to create and populate a `.env` file and place it in the root of the demo application.

![location of .env file](https://s4.postimg.org/4bq9rahh9/stack-pack-gpapi-demo_env_file_location.png)

Once you have this empty file you need to fill it with your environment variables. Here are the values you need

```
# GENERAL
API_NAME=stack-pack-gpapi-demo
API_PORT=3001
API_ROOT=http://localhost:3001

# GP-API
GP_API_URL=https://api.staging.goodpractice.net/
GP_API_PUBLIC=[request this key from GoodPractice]
GP_API_SECRET=[request this key from GoodPractice]
```
