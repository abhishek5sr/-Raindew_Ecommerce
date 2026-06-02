# Raindew Ecommerce

# structure
  /server - backend(node js ) 
  /admin  - reactjs
  /client - reactjs



## Setup Instructions

1. Install dependencies

     npm install  -  (for  installing dependencies)
      
     seperatly install in each dir (i.e /admin , /server , /client )

2. Configure environment variables

   - Create a `.env` file in the project root.
   - Add required settings such as database URL.

3. Prepare the database
   - create a connection string and add it to your .env file
    MONGODB_URL.
    

4. Start the development 
    - you need to have 3 terminal open 
    
    - /server  run "node index.js"
    - /admin   run "npm run dev"
    - /client  run "npm run dev"

5. Open the application

  server will start on port :3000


# For first test 
 1. database will automaticaly create the collections
 1. go to admin dashboard -> manage banner -> upload  three banner with title
 3. go to client page banners get populated to hero section  




- Ensure you have the correct runtime installed (Node.js, React, etc.) 
