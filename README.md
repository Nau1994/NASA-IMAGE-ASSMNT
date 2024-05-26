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
   ![image](https://github.com/Nau1994/NASA-IMAGE-ASSMNT/assets/95983390/9c42ae28-43ab-4bd8-9521-2736b13e1f23)

   
4) create get request to fetch description of any image
   ```console
    http://localhost:8080/api/media?nasa_id=KSC-2009-6528
   ```
   you should get response like below:
   ![image](https://github.com/Nau1994/NASA-IMAGE-ASSMNT/assets/95983390/b57e5720-770f-4122-9a0c-074e3b2a242f)

   

**Frontend Testing:**
1) Open Chrome browser
2) hit the below url
   ```console
    http://localhost:4200/
   ```
   ![image](https://github.com/Nau1994/NASA-IMAGE-ASSMNT/assets/95983390/962e2fbc-c2eb-4324-a473-d9f2f5b7f52d)

3) select any of filter and hit Search Button
  ![image](https://github.com/Nau1994/NASA-IMAGE-ASSMNT/assets/95983390/f2f5f249-b2da-4d54-b9da-c1f2a9b2bde0)

4) click on any image to know description
  ![image](https://github.com/Nau1994/NASA-IMAGE-ASSMNT/assets/95983390/c100302c-2599-4992-9512-0c5a9b2cde95)

