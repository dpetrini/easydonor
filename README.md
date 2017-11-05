# easydonor
Server side (express app) for easydonor-react SPA (https://github.com/dpetrini/react-easydonor).

## Technical Stack
* Language - JavaScript/NodeJS
* Express server
* MongoDB with mongojs driver
* Pug templates
* Socket.io for real time updates

## Architecture
The application isserver side for React app dpetrini/easydonor-react
The source files are divided in folders inside js/source directory as follows:
* bin: executable file
* config: files to hold environment variables like which mongo db server to use
* controllers: the C of MVC, holds the logic to interface react client app to database
* db: holds the connection to mongo db
* models: M of MVC, holds real connection to db and other server related functions.
* public: file that holds the react client app when in production
* routes: express routes for this app
* tests: unit and api tests, mocha based (not complete yet)
* views: temporaty pug views for data handling in server


## API

### GET /donors
List all donors in raw text.

#### Response
| HTTP       | Value     |
|------------|-----------|
| Body       | { "_id", "firstName", "lastName", "contactNumber", "emailAddress", "bloodGroup"} |

### GET /donors/friendly
List all donors in nice HTML table.

#### Response
| HTTP       | Value     |
|------------|-----------|
| Body       | { "_id", "firstName", "lastName", "contactNumber", "emailAddress", "bloodGroup"} |


### POST /donors
Create a donor.

#### Request

| Body Param    | Description |
|----------|-------------|
| firstName    | First name       |
| lastName | Last name    |
| contactPhone | Phone number    |
| emailAddress | Email address    |
| bloodGroupd | blood group for donor  |

#### Response
| HTTP       |  Value                                                             |
|------------|--------------------------------------------------------------------|
| Body       | { "_id", "firstName", "lastName", "contactNumber", "emailAddress", "bloodGroup"} 

### PUT /donors/:id
Update donor data.

#### Request

| Body Param    | Description |
|----------|-------------|
| firstName    | First name       |
| lastName | Last name    |
| contactPhone | Phone number    |
| emailAddress | Email address    |
| bloodGroupd | blood group for donor   |

#### Response
| HTTP       |  Value                                                             |
|------------|--------------------------------------------------------------------|
| Body       | { "_id", "firstName", "lastName", "contactNumber", "emailAddress", "bloodGroup"} |

### DELETE /donors/:id
Delete donor by id.

#### Response
| HTTP       |  Value                                                             |
|------------|--------------------------------------------------------------------|
| Status Code | 200 |

### GET /donors/form/:id
Entry points for register management - get donor data for edit if pug form.

#### Response
| HTTP       | Value     |
|------------|-----------|
| Body       | { "_id", "firstName", "lastName", "contactNumber", "emailAddress", "bloodGroup"} |

### POST /donors/form/:id
Entry points for register management - send donor edited in pug form.

#### Request

| Body Param    | Description |
|----------|-------------|
| firstName    | First name       |
| lastName | Last name    |
| contactPhone | Phone number    |
| emailAddress | Email address    |
| bloodGroupd | blood group for donor  |

#### Response
| HTTP       |  Value                                                             |
|------------|--------------------------------------------------------------------|
| Body       | { "_id", "firstName", "lastName", "contactNumber", "emailAddress", "bloodGroup"} 


### GET /check/status/complete
Get status from running app.

#### Response
| HTTP       | Value     |
|------------|-----------|
| Body       | { "app status..."} |



## Environment Variables
Before testing or running the service should be properly configured with following environment variables.

Key | Value | Description
:-- | :-- | :-- 
process.env.NODE_ENV | `production` or `development` or `test` | Defines the API entry points for testing or production.
DEBUG | `users:*` | Use to enable debug messages.


## Tests

```
Mocha, instanbul, converage
1)	Run Unit Tests
 mocha tests/unit/*
 
2)	Run Unit Tests with DEBUG (maybe polluted)
 export DEBUG=donors:* && mocha tests/unit/*

3)	Run API (integrated tests – Supertest for Express & Cloud Mongo DB)
(please DO export NODE_ENV as preventing it will damage database)

 export NODE_ENV=test && mocha tests/api/*"

4)	Same as above with DEBUG

 export DEBUG=donors:* && export NODE_ENV=test && mocha tests/api/*

5)	Create COVERAGE tests and HTML reports (with nyc/istanbul)
    (Then check ./converage/index.html)

    nyc --reporter=html --reporter=text mocha tests/unit/*

    export NODE_ENV=test && nyc --reporter=html --reporter=text mocha tests/api/*

```

## How to Run

Download this repository. And export the above environment variables, then make sure to open react app.

Using npm:
```
> npm install
> npm run nodemon (or)
> npm start
```

Open in your browser
```
http://localhost:3000
http://127.0.0.1:3000/donors/
```

## Missing Features
* Create support in Model for GeoSpatial coordinates to provide lazy loading (only loads the current view donor points).
