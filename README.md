# Full Stack Project Setup (React + Node.js)

This project includes both a **Frontend** built with React and a **Backend** built with Node.js and Express.

---

## Frontend Setup (React)

### 1. Create React App  
Use the official React setup tool to initialize a new project.  
Reference: [React Docs – Getting Started](https://react.dev/learn/start-a-new-react-project)

```bash
npx create-react-app frontend
cd frontend
```

### 2. Install Axios  
Axios is a popular promise-based HTTP client.  
Reference: [Axios Docs](https://axios-http.com/)

```bash
npm install axios
```

### 3. Install Font Awesome Icons  
Used for displaying vector icons in your components.  
Reference: [Font Awesome React Docs](https://fontawesome.com/v5/docs/web/use-with/react/)

```bash
npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
```

### 4. Configure `.env` for Frontend  
To connect the frontend to the backend dynamically, create a `.env` file in the root of your frontend directory:

```env
REACT_APP_BACKEND_URL=http://localhost:5000
```

### 5. Start the Frontend App

```bash
npm start
```

This will run the app on `http://localhost:3000` by default.

---

## Backend Setup (Node.js + Express)

### 1. Initialize Node Project  
Reference: [Node.js Docs – npm init](https://docs.npmjs.com/cli/v7/commands/npm-init)

```bash
mkdir backend
cd backend
npm init -y
```

### 2. Install Express  
Express is a lightweight web framework for Node.js.  
Reference: [Express.js Docs](https://expressjs.com/)

```bash
npm install express
```

### 3. Install YouTube Transcript API  
Used to fetch transcripts from YouTube videos.  
Reference: [youtube-transcript on npm](https://www.npmjs.com/package/youtube-transcript)

```bash
npm install youtube-transcript
```

### 4. Install Other Dependencies  
- `mongoose`: for MongoDB database connection  
- `dotenv`: for environment variable management  
- `cors`: to enable Cross-Origin Resource Sharing  
Reference: [Mongoose Docs](https://mongoosejs.com/), [dotenv](https://www.npmjs.com/package/dotenv), [CORS](https://www.npmjs.com/package/cors)

```bash
npm install mongoose dotenv cors
```

### 5. (Optional) Install Nodemon for Development  
Nodemon automatically restarts the server on file changes.  
Reference: [nodemon Docs](https://www.npmjs.com/package/nodemon)

```bash
npm install --save-dev nodemon
```

Add this to your `package.json`:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

### 6. Configure `.env` for Backend  
To store backend configuration and secrets, create a `.env` file in the root of your backend directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret_key
```

### 7. Start the Backend Server

```bash
npm run dev
```

The backend server will run on `http://localhost:5000` or the port you configure.
