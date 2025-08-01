<p align="center">
  <img src="https://img.icons8.com/ios-filled/50/lock-2.png" width="70" alt="lock icon"/>
</p>

<h1 align="center">Advanced Authentication System</h1>
<h4 align="center">BUILT WITH THE MERN STACK & CLIENT-SERVER ARCHITECTURE</h4>

<p align="center">
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" height="25"/>&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" height="26"/>&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" height="25"/>&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" height="25"/>
</p>

<h4 align="center">CONTAINERIZED MICROENVIRONMENT & DEPLOYED ON DIGITALOCEAN</h4>

<p align="center">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" height="25"/>&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/DigitalOcean-0080FF?style=for-the-badge&logo=digitalocean&logoColor=white" height="25"/>
</p>

---

## ☁️ Live Demo on DigitalOcean

### 🧪 Email Delivery Testing Guide:

> ✅ Click the link below to access the live application and navigate to the **Sign Up** page.  
> ✅ Use your **Real Email Address** and **Any Password** to register (passwords are securely hashed).  
> ✅ You will receive **Verification Email** and other **System Emails**, follow the steps provided in the email.

> 🔗 **Try the Advanced MERN Authentication System:**  
> [https://advanced-mern-auth-app-s552q.ondigitalocean.app](https://advanced-mern-auth-app-s552q.ondigitalocean.app)

> ⚠️ **Note:** Sometimes, emails may be delivered to your **Spam** or **Promotions** folder. If you don’t see any emails in your inbox, please check those folders.

---

A full-stack, production-ready MERN (MongoDB, Express, React, Node.js) authentication system that supports secure user registration, email verification, password recovery, and session management. Built with a scalable architecture and containerized using Docker, it integrates Mailtrap and Brevo email services for real-time email delivery and is deployed on DigitalOcean for seamless cloud accessibility.

## 🚀 Features

* 🔐 **JWT Authentication** with HTTP-only Cookies.
* 📨 **Email Verification** via 6-Digit Code (Development: Mailtrap, Production: Brevo).
* 📩 **Welcome Emails** sent after successful verification.
* 🔁 **Forgot & Reset Password** flow with secure token-based links.
* ✅ **Password Strength Validation**.
* 🧠 **Authentication Check API** to validate active user sessions.
* 🔓 **Sign-Out** by clearing the authentication cookie.

---

## 🛠️ Technologies Used
The following technologies are used in this project:

| **Technology**           | **Description**                                                               |
| ------------------------ | ----------------------------------------------------------------------------- |
| **Node.js**              | JavaScript runtime for server-side development                                |
| **Express.js**           | Minimalist web framework for Node.js                                          |
| **MongoDB + Mongoose**   | NoSQL database with object modeling tool                                      |
| **JWT**                  | Used for stateless session authentication                                     |
| **BcryptJS**             | Library for securely hashing passwords                                        |
| **Brevo**                | Email API service for production email delivery                               |
| **Mailtrap**             | Email testing service for development environment                             |
| **Cookie Parser**        | Middleware to parse HTTP cookies                                              |
| **Crypto**               | Built-in encryption utilities                                                 |
| **CORS**                 | Cross-origin resource sharing support                                         |
| ------------------------ | ----------------------------------------------------------------------------- |
| **React 19**             | UI library for interactive interfaces                                         |
| **React Router v7**      | Routing library for single-page React apps                                    |
| **TailwindCSS**          | Utility-first CSS framework for styling                                       |
| **Axios**                | Promise-based HTTP client for API requests                                    |
| **Framer Motion**        | Animation library for React components                                        |
| **Zustand**              | Lightweight global state management tool                                      |
| **Lucide-react**         | Icon library for modern, customizable icons                                   |
| **Vite**                 | Fast frontend build tool and dev server                                       |

---

## 📁 Project Structure
The following project structure (client-server architecture) is used in this project:

```
advanced-mern-auth-system/
├── client/                    # Frontend (React + Vite)
│   ├── dist/                  # Production build output
│   ├── node_modules/          # Frontend dependencies
│   ├── public/                # Static assets
│   ├── src/                   # Source code for the React app
│   │   ├── components/        # Reusable UI components (Inputs, etc.)
│   │   ├── pages/             # Page-level components (Login, Signup, etc.)
│   │   ├── store/             # Zustand global state management
│   │   ├── utils/             # Utility functions (e.g., date handling)
│   │   ├── App.jsx            # Main app structure and route definitions
│   │   ├── main.jsx           # React root renderer
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js     # Tailwind CSS configuration
│   ├── postcss.config.js
│   ├── eslint.config.js
│   ├── package.json           # Frontend dependencies and scripts
│   └── package-lock.json
├── node_modules/              # Root-level dependencies (backend)
├── server/                    # Backend (Node.js + Express)
│   ├── controllers/           # Route handler logic (e.g., auth, user)
│   ├── db/                    # MongoDB connection logic
│   ├── mailtrap_brevo/        # Email services (Mailtrap for dev, Brevo for prod)
│   ├── middleware/            # Middleware (e.g., verifyToken)
│   ├── models/                # Mongoose schema definitions
│   ├── routes/                # Express route definitions
│   ├── utils/                 # Utility functions (e.g., token generation)
│   └── server.js              # Express server entry point
├── .dockerignore              # Files to ignore in Docker build
├── .env                       # Environment variables for the backend
├── .gitignore                 # Git ignored files
├── Dockerfile                 # Docker configuration for full app deployment
├── LICENSE
├── package.json               # Backend dependencies and scripts
├── package-lock.json
└── README.md                  # Project documentation
```

---

## ⚙️ Setup & Installation
Follow the steps below to set up and run the project successfully:

### 1. ✅ Clone the Repository:

```bash
git clone https://github.com/PAIshanMadusha/advanced-mern-auth-system.git
```

### 2. ✅ Navigate to the Project Directory:

```bash
cd advanced-mern-auth-system
```

### 3. ✅ Create the `.env` File:

Create a `.env` file in the **root directory** of the project using the structure below:

```env
MONGODB_URL=your_mongo_db_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5000
NODE_ENV=production
MAILTRAP_TOKEN=your_mailtrap_token
MAILTRAP_ENDPOINT=https://send.api.mailtrap.io/
BREVO_API_KEY=your_brevo_api_key
BREVO_SENDER_EMAIL=your_sender_email
BREVO_SENDER_NAME=your_sender_name
```

---

### 🔐 Environment Variable Details:

> MONGODB_URL

#### * Your MongoDB connection string. Create a free cluster using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), then copy the connection URI and paste it here.

> PORT

#### * The port on which your backend server will run. Default is `5000`.

> JWT_SECRET

#### * A secret key used to sign and verify JWT tokens. You can generate a secure random value by running the following command in your terminal:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

> CLIENT_URL

#### * The base URL of your frontend application: In development: `http://localhost:5173`, In production or Docker setups: `http://localhost:5000`

> NODE_ENV

#### * Defines the environment mode. Use: `development` during local development and `production` when deploying to production

> MAILTRAP_TOKEN

#### * API token used to send test emails via Mailtrap: Log in or sign up at [Mailtrap.io](https://mailtrap.io), then navigate to: Email API → Demo Inbox → Integrations** to find your token.

> MAILTRAP_ENDPOINT

#### * API endpoint used by Mailtrap to send emails. Use the following value:

```env
https://send.api.mailtrap.io/
```

> BREVO_API_KEY

#### * Your Brevo (formerly Sendinblue) API key for sending real production emails, and generate it from **SMTP & API** under your [Brevo Dashboard](https://app.brevo.com/).

> BREVO_SENDER_EMAIL

#### * A verified sender email used to send emails via Brevo in production, and set this from **Senders, Domains & Dedicated IPs → Add Sender** in your Brevo account.

> BREVO_SENDER_NAME

#### * The name that appears in the "From Name" field when sending emails, and this can be your app name, personal name, or business name. Configure it along with the sender email in Brevo.

---

### 4. ✅ Build & Run the App in Production:

#### * Install dependencies, build frontend and backend:

```bash
npm run build
````

#### * Start the application:

```bash
npm start
```

### 5. ⚡ Successful Startup Output:

#### * If everything is configured properly, your terminal will show:

```bash
Server is running on port: 5000
MongoDB Connected: your-cluster.mongodb.net
```

### 6. 🌐 Test the App:

#### * Visit: **[http://localhost:5000](http://localhost:5000)**, and test the app in production mode using your registered credentials.

---

## ⚙️ Development Mode (Optional)
To run the project in development mode:

### 1. ✅ Edit your `.env` file and set the following values:

```env
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

#### * Also, make sure to **accurately set the Mailtrap keys** (`MAILTRAP_TOKEN`, `MAILTRAP_ENDPOINT`) in the same `.env` file.

### 2. ✅ Start the frontend and backend development servers:

#### * Open two terminals and navigate to the following folders:

```bash
cd advanced-mern-auth-system/server
npm run dev
```

```bash
cd advanced-mern-auth-system/client
npm run dev
```

### 3. ⚡ Successful Startup Output:

#### * In the **client terminal**, you should see:

```bash
  http://localhost:5173/
```

#### * In the **server terminal**, you should see something like:

```bash
Server is running on port: 5000
MongoDB Connected: your-cluster.mongodb.net
```

### 4. 🌐 Test the App:

#### * Visit: **[http://localhost:5173](http://localhost:5173)**, and test the app in development mode using your registered credentials.

---

## 🐳 Dockerized Deployment (Optional)

This application is fully containerized using **Docker** with **multi-stage builds** for both the `client` and `server`. It can be deployed on **DigitalOcean** or any platform that supports Docker containers, using **GitHub integration** and environment-specific `.env` secrets for production.

### 1. ✅ Ensure **Docker Desktop** is installed and running:

#### *  If not installed, download it from [Docker Official Site](https://www.docker.com/products/docker-desktop/) and, docker must be configured to use **Linux containers**.

### 2. ✅ Build the Docker Image:

#### * From the project root directory, run the following command to build the Docker image:

```bash
docker build -t advanced-mern-auth .
````

### 3. ✅ Run the Docker Container:

#### * After a successful build, run the Docker container with your `.env` configuration:

```bash
docker run --env-file .env -p 5000:5000 advanced-mern-auth
```

### 4. ⚡ Terminal output should confirm:

#### * You should see your **frontend and backend** running successfully from the container:

```bash
Server is running on port: 5000
MongoDB Connected: your-cluster.mongodb.net
```

### 5. 🌐 Verify It's Running:

#### * Open your browser and go to: 👉 **[http://localhost:5000](http://localhost:5000)**

## 📸 System Screenshots:
These screenshots illustrate how the system appears on desktop:

---
<p align="center">
  <img src="https://github.com/user-attachments/assets/90e4f68e-bbad-42a0-8acc-f91e32bf6667" alt="Screenshot 1" width="700">
  <br><br>
  <img src="https://github.com/user-attachments/assets/22641c39-2f58-4a29-bd88-0861e50c95f7" alt="Screenshot 3" width="700">
  <br><br>
  <img src="https://github.com/user-attachments/assets/f62aee3b-6ca2-47ad-a113-86f3ceb81dda" alt="Screenshot 4" width="700">
  <br><br>
  <img src="https://github.com/user-attachments/assets/7a19f1d5-e2d8-41e3-b5bd-49041e4b2b75" alt="Screenshot 4" width="700">
</p>

---

### 👨‍💻 Created by: 
**Ishan Madhusha**  
GitHub: [PAIshanMadusha](https://github.com/PAIshanMadusha)

Feel free to explore my work and get in touch if you'd like to collaborate! 🚀

---

## 📝 License:  
This project is licensed under the MIT License : See the [LICENSE](LICENSE) file for details.
