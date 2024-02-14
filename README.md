
### Exercise: Implementing Express Middleware

#### Objective
Create an Express server that demonstrates the use of middleware for handling CORS (Cross-Origin Resource Sharing) and parsing JSON payloads in incoming requests.

#### Requirements

1. **Initialize Your Project:**
   - Create a new Node.js project folder and initialize it with `npm init`.
   - Install Express and the CORS middleware using npm.
   > npm install express cors

2. **Setup Your Server:**
   - In your project, create a file named `server.js`.
   - Import Express and CORS.
   - Initialize your Express application.

3. **Implement Middleware:**
   - Utilize the `cors` middleware to enable CORS for all routes.
   - Use `express.json()` to parse incoming requests with JSON payloads.

4. **Create a Test Route:**
   - Implement a POST route `/submit-data` that logs the request body to the console and responds with a message acknowledging the receipt of data.

5. **Start Your Server:**
   - Ensure your server listens on port 3000 and logs a message to the console indicating it is running.

6. **Experiment!**
   - Try commenting out some of the middleware that you've included here, like the CORS middleware or the express.json middleware. See what happens when you make another request after having commented some pieces out.
   - You should be able to access your endpoint through Postman, by making a POST request to the `/submit-data` endpoint on `http://localhost:3000`.

#### End Cases
- Your server runs successfully on port 3000 without errors.
- Making a POST request to `http://localhost:3000/submit-data` with a JSON payload logs the payload to the server console.
- The POST request to `/submit-data` receives a response acknowledging the data submission.

### Running the Tests

1. **Install Requirements**
   - We have to start with installing our test packages as development dependencies
   - The packages we want to use are `jest` and `supertest`
   - We can install packages as dev dependencies by including a `--save-dev` flag when running the install command (like `npm i --save-dev <your packages>`)
   - With this information, what would the command to install `jest` and `supertest` as dev dependencies look like?
2. **Update the package.json scripts**
   - If you've done things right, you should have a package.json file in your project with `express` and `cors` as dependencies, and `jest` and `supertest` as dev dependencies.
   - In the scripts section of the package.json, we want to update our test script to run `jest` instead of the default `echo whatever and all that`
3. **Run the tests**
   - From here, if all has gone well, you can run the tests by running `npm test`
4. **Validate Correctness**
   - Make sure that the tests pass, examine each test case and ensure that everything is passing, and if not, that you understand the errors that are happening and have a sense of how to fix it

### Tips for Success
- Make sure CORS is properly configured to allow requests from all origins.
- Test your endpoint using a tool like Postman or cURL to ensure it correctly parses and logs JSON payloads.

### Submission Guidelines
- Push your project to a GitHub repository.
- Ensure your repository includes a `package.json` file with the necessary dependencies.
- Submit the URL to your GitHub repository.
