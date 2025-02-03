# Number Classification API

This is a simple public API written in Typescript that analyzes a number and returns some interesting facts about it in JSON format.

It uses the following dependencies: [Typescript](https://www.npmjs.com/package/typescript "typescript"), [Express](https://www.npmjs.com/package/express "express"), [Nodemon](https://www.npmjs.com/package/nodemon "nodemon"), [ts-node](https://www.npmjs.com/package/ts-node "ts-node")

it also uses the [Numbers API](http://numbersapi.com/ "numbers api")

## Setup Instructions

### Prerequisites

- Node and NPM

### Running Locally

1. Clone this repo:

   ```
   git clone https://github.com/josephanya/number-classification-api.git
   ```
2. Navigate to the project directory:

   ```
   cd number-classification-api
   ```
3. Install the dependencies:

   ```
   npm install
   ```
3. Run the server:

   ```
   npm run local
   ```
4. Access the API at port 8080 by either using curl:

   ```
   curl http://localhost:3000/api/classify-number
   ```

   Or opening ``http://localhost:3000/api/classify-number`` on your browser

### Deployment

The API is deployed and self-hosted. You can access it at: [https://bc26-102-89-43-87.ngrok-free.app/api/classify-number?number=191](https://bc26-102-89-43-87.ngrok-free.app/api/classify-number?number=191 "Go to live deployment")

### Endpoint

```
GET /api/classify-number?number=191
```
Add any number of your choice as a query parameter. In ths example, I am using 191

### Response Format

```json
   {
      "number": 191,
      "is_prime": true,
      "is_perfect": false,
      "properties": [
          "odd"
      ],
      "digit_sum": 11,
      "fun_fact": "191 is a number n for which n, n+2, n+6, and n+8 are all prime."
    }
```

### Example Usage


```bash
   curl https://bc26-102-89-43-87.ngrok-free.app/api/classify-number?number=191
```

### Backlink

This project uses Javasctipt/Typescript. Learn more about talented Go developers at [HNG Tech](https://hng.tech/hire/javascript-developers "Hire Go devs")