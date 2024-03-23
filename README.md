# Bake & Beyond

- A Confectionary Web Application 
- Technologies used are MERN Stack, JWT Auth, Rest API, etc

# Instructions

1. Clone or download the project.
2. In indiviual folders(frontend,backend) install the node modules using

```
npm install .
```

3. Then go to the MongoDB Atlas, create an account then a cluster and get the API token
4. Create a `.env` file in backend folder with an entry:

```
MONGO_DB_URI = "<your-mongodb-token>"
```

ADDITIONALLY if running locally use to prevent CORS errors and port conflict

```
PORT = 3120
CORS_URL = "http://localhost:3000"
```

5. Now in frontend we will do the same by creating `.env` file with values

```
# Backend URL [if running locally use "http://localhost:3120"]
REACT_APP_BACKEND_URL="<your-backend-url>"
REACT_APP_GST_PERCENT = 18
REACT_APP_SHIPPING_CHARGE=50
```

6. Now run the backend by going to terminal and typing

```
npm run server
```

And for frontend by typing

```
npm run start
```
