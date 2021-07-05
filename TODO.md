# Rewaer

## To-dos:

- [ ] Write tests
- [ ] Run test on deploy
- [ ] give a 7day TTL (time to live) to the refresh token stored in the database
  - https://github.com/mongoosejs/mongoose-ttl
  - https://docs.mongodb.com/manual/tutorial/expire-data/
- [ ] Move AxiosInterceptor from app.js
- [ ] On RefreshToken not found in db > logout
- [ ] Handle new account created
  - [x] Show success message in App
  - [x] Handle errors from backend
  - [ ] Send Email to new user
    - [ ] User should confirm email?
- [ ] Recover password feature
- [ ] Notification if auth server is down
- [ ] Use custom image component for images
- [ ] Create own Card component
- [ ] infinite scrolling + lazy loading
- [ ] On no-file select, do not create item/look
- [ ] Merge README's

## Completed ✓

- [x] Set up route for User + database handling
- [x] Whitelist Heroku IP in mongodb Atlas
- [x] Set up the rest of the database
  - [x] Define the other collection (model: Looks)
  - [x] Define the other collection (model: Items)
  - [x] Import old look data from MySQL
  - [x] Import pictures from FTP
- [x] Implement GraphQL
  - [x] First Steps
  - [x] Create all Schemas
  - [x] Create all Resolvers
- [x] Encrypt passwords
- [x] Implement Auth
- [x] Create admin@rewaer.com email
- [x] Clean resolvers
- [x] Store image data
  - [x] Create AWS S3 bucket
  - [x] Rest API 'upload'
  - [x] Save image in s3 bucket
  - [x] return a fileURL to FE
- [x] Refresh JWT token (auth server)
- [x] Restraint/filter result for userID (is_auth delivers the user ID)
- [x] Generate thumbnail
  - [x] create a thumbs endpoint
  - [x] create thumbnail in upload endpoint
  - [x] upload thumbnail to S3
  - [x] return thumbnail Url to front end
  - [x] adapt look and item models for mediaURLthumb/medium
- [x] Login feature
- [x] Dummy graphql query to wake up heroku backend
- [x] Handle error on connection failure with backend
- [x] Persist token in localStorage
- [x] Use new Auth server (BackEnd)
- [x] Implement refresh Token
  - [x] Stop persisting token in local var
  - [x] Start persisting refreshtoken in local var
  - [x] Kill refresh token on logout
  - [x] Handle when token not valid anymore
- [x] Check and handle validity of refresh token
- [x] Handle errors from backend (and display those)
  - [x] Show login error: email not known
  - [x] Show login error: wrong password
  - [x] Show logout error
  - [x] Show successful login
  - [x] Show successful logout
- [x] Looks: Show loading ot user
  - [x] Spinner when fetching looks from API
  - [x] Spinner when loading images of card component
  - [x] Thumbnail images during loading
- [x] Remember me feature
- [x] getNewToken() as context function
- [x] Add Delete look/item feature
- [x] Use Axios interceptors if token not valid
- - [x] Upload Images
  - [x] Front end to Rest API
  - [x] Handling request in Backend
  - [x] Backend to AWS S3
  - [x] Create Thumbnail on upload
- [X] On loading error, show error and redirect
- [x] First refactoring round:
  - [x] Rewrite fetch to use axios if auth relevant
  - [x] as many stateless component as possible
  - [x] check state usage in already created component
  - [x] Check class vs function component
  - [x] Take API-fetch-code, out from component
  - [ ] - [x] Implement MobX instead of using context
  - [x] Create an Authorisation Store to hanble token and login
  - [x] Create a store to handle profil data
  - [ ] ~Route Store saved in context~
    - [ ] ~Save all sub-Stores in a main store~
    - [ ] ~Save the main Store into the context~
- [x] Merge Auth service