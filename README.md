
# Zomato Clone

Zomato Clone project developed using MERN Stack.

## Acknowledgements

 - Internhip / Training Program :- @ Devtown
 - Guided By :- Aditya Gusain Sir.


## API Reference

#### Sign Up

```http
  POST /auth/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `None` | `string` | Register User |

#### Sign In

```http
  POST /auth/signin
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `None` | `string` | Login User |

#### Get User Data

```http
  GET /review/:_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | Get reviews based on id. |

#### Post a review

```http
  POST /review/new
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `None` | `string` | Post new review |

#### Delete a review

```http
  DELETE /review/delete/:_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | Deletes particular review |

#### Add new Order

```http
  POST /order/new
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `None` | `string` | Create new order |

#### Get Restaurants based on city

```http
  GET /restaurants/:city
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `city` | `string` | Finds all restaurants in particular city |


#### Get Restaurants based on Id

```http
  GET /restaurants/:_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | Finds restaurant based on id. |


#### Get Food based on Id

```http
  GET /food/:_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | Finds food based on id. |


#### Get Food based on restaurant id

```http
  GET /food/r/:_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | Finds food based on restaurant id. |



## Tech Stack

**Client:** React, Redux, TailwindCSS, HeadlessUI

**Server:** Node, Express, Nginx

**Deployment:** Docker, AWS, CI/CD Pipeline


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file inside "client" folder.


`REACT_APP_CLIENT_URL`

Add the following environment variables to your .env file inside "server" folder.

`MONGO_URL`

`JWTSECRET`

`AWS_S3_ACCESS_KEY`

`AWS_S3_SECRET_KEY`

`GOOGLE_CLIENT_ID`

`GOOGLE_CLIENT_SECRET`
## Screenshots

- Delivery Page 

![App Screenshot](https://github.com/abhishekdeshmukh001/FSWDT-Zomato-Clone/blob/master/Delivery%20Page.png?raw=true)

- Restaurant Page

![App Screenshot](https://github.com/abhishekdeshmukh001/FSWDT-Zomato-Clone/blob/master/Restaurant%20Page.png?raw=true)

- Checkout Page

![App Screenshot](https://github.com/abhishekdeshmukh001/FSWDT-Zomato-Clone/blob/master/Checkout%20Page.png?raw=true)
## 🔗 Link
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abhishek-sachin-deshmukh/)



## Authors

- [@abhishekdeshmukh001](https://github.com/abhishekdeshmukh001)

