# Hashly

An URL shortening service written in **_express_**

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- NodeJS
- Node Package Manager(NPM)
- Git
- Mongodb

### Installing

A step by step series of examples that tell you have to get a development environment running

1. Download ZIP file or clone the repository to create your own copy.

```
git clone https://github.com/geekcodershivam/hashly.git
```

2. Move to the hashly repository

```
cd ./hashly
```

3. Install all project dependency packages via NPM

```
npm install
```

4. Set up Mongodb Atlas

- If you don't have any idea about mongodb atlas you can check out from [here](https://docs.atlas.mongodb.com/getting-started/).

5. Make .env file

```
 PORT=5000
 MOGOURI=" Your Mongodb url"
 JWT_SEC='keys'
```

6. Start the server.

```
nodemon
```

7. Move to the client folder

```
cd ./hashly/client
```

8. Install all project dependency packages via NPM

```
npm install
```

9. Runs the app .

```
npm start
```

And see it working on http://localhost:3000

## API Spec

| Request  | End Point     | Details                   |
| -------- | ------------  | ------------------------- |
| **POST** | /signup       | Register User             |
| **POST** | /signin       | for signin                |
| **POST** | /createurl    | Create Url                |
| **GET**  | /urls         | Fetch all details of urls |
| **GET**  | /sh/:slug?    | Redirect to Original url  |

## Demo

![output(video-cutter-js com)](https://user-images.githubusercontent.com/31733809/123317184-59282a00-d54b-11eb-8632-596d401dc3a9.gif)

## Authors

[Shivam Mani Tripathi](https://github.com/geekcodershivam)
