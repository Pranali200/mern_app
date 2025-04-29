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
2. Install Axios
Axios is a popular promise-based HTTP client.
Reference: Axios Docs

bash
Copy
Edit
npm install axios
3. Install Font Awesome Icons
Used for displaying vector icons in your components.
Reference: Font Awesome React Docs

bash
Copy
Edit
npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
4. Configure .env for Frontend
To connect the frontend to the backend dynamically, create an .env file in the root of your frontend directory:

plaintext
Copy
Edit
REACT_APP_BACKEND_URL=http://localhost:5000
5. Start the Frontend App
bash
Copy
Edit
npm start
This will run the app on http://localhost:3000 by default.

Backend Setup (Node.js + Express)
1. Initialize Node Project
Reference: Node.js Docs – npm init

bash
Copy
Edit
mkdir backend
cd backend
npm init -y
2. Install Express
Express is a lightweight web framework for Node.js.
Reference: Express.js Docs

bash
Copy
Edit
npm install express
3. Install YouTube Transcript API
Used to fetch transcripts from YouTube videos.
Reference: youtube-transcript on npm

bash
Copy
Edit
npm install youtube-transcript
4. Install Other Dependencies
mongoose: for MongoDB database connection

dotenv: for environment variable management

cors: to enable Cross-Origin Resource Sharing
Reference: Mongoose Docs, dotenv, CORS

bash
Copy
Edit
npm install mongoose dotenv cors
5. (Optional) Install Nodemon for Development
Nodemon automatically restarts the server on file changes.
Reference: nodemon Docs

bash
Copy
Edit
npm install --save-dev nodemon
Add this to your package.json:

json
Copy
Edit
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
6. Configure .env for Backend
To store backend configuration and secrets, create an .env file in the root of your backend directory:

plaintext
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret_key
7. Start the Backend Server
bash
Copy
Edit
npm run dev
The backend server will run on http://localhost:5000 or the port you configure.