# be-maps-search

This repository is a backend NodeJS library for users to search the full address suggestions by passing partial address.

It takes a partial address input and return full address suggestions along with the address broken into its individual components using the TomTom API.

## Install:

`yarn install`

## Test:

`yarn install`

`yarn test`

## File Strcuture:

### endpoints

The `endpoints` folder contains files to define and handle methods. It includes reuqest validation and response mapper.

### clients

The `clients` folder is used to store files to interact with external services/APIs. E.g. it contains the client class for making request to Tomtom API.

### specs

The `spec` folder stores Tomtom API documentation.

### e2e test

The `e2e test` folder contains all the end-to-end test cases.
