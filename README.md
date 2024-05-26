# NASA-IMAGE-ASSMNT
### 1) Design
  

### 2) Setup
  **Prerequisite**: docker must be install and running.
1) Clone the git repo
2) node should be installed (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
3) angular/cli should be intalled (npm install -g @angular/cli)
4) docker should be intalled and running (https://docs.docker.com/desktop/install/windows-install/)

**Redis Start**: Please run docker commond
    ```console
    docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
    ```
**Start backend server**: Please run commond in Project Directory
    ```console
    cd nasa-api-server
    npm install
    npm start
    ```
**Start frontend app**: Please run commond in Project Directory
    ```console
    cd nasa-photo-gallery
    npm install
    ng serve
    ```


### 3) Application testing

  **Backend Testing:**
1) Open POSTMAN application
2) create get request to fetch all images
   ```console
    http://localhost:8080/api/search?media_type=image
   ```
   you should get response like below:
   
3) create get request to fetch description of any image
   ```console
    http://localhost:8080/api/media?nasa_id=KSC-2009-6528
   ```
   you should get response like below:
   

**Frontend Testing:**
1) Open Chrome browser
2) hit the below url
   ```console
    http://localhost:4200/
   ```
3) select any of filter and hit Search Button

4) click on any image to know description

