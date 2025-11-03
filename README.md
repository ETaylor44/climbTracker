# 🧗‍♀️ ClimbTracker

A full-stack web application for tracking climbing routes, climbers, and their achievements. Built with React frontend and Node.js/Express backend with MongoDB database.

## 🎯 Features

- **Climber Management**: Add, view, update, and delete climber profiles
- **Route Tracking**: Manage climbing routes with details like grade, setter, and terrain type
- **Achievement Tracking**: Track which climbers have completed which routes
- **RESTful API**: Full CRUD operations for both climbers and routes
- **Modern UI**: React-based frontend with responsive design

## 🏗️ Project Structure

```
ClimbTracker/
├── backend/                 # Node.js/Express API server
│   ├── models/             # Mongoose data models
│   │   ├── Climber.js      # Climber schema
│   │   └── Climb.js        # Climbing route schema
│   ├── routes/             # API route handlers
│   │   └── climbers.js     # Climber CRUD operations
│   ├── index.js            # Server entry point
│   ├── package.json        # Backend dependencies
│   └── .env                # Environment variables
└── frontend/               # React application
    ├── src/                # React source code
    ├── public/             # Static assets
    ├── package.json        # Frontend dependencies
    └── .env                # Frontend environment variables
```

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management
- **nodemon** - Development server auto-restart

### Frontend
- **React** - JavaScript UI library
- **React DOM** - React rendering
- **React Scripts** - Build tools and development server

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or MongoDB Atlas account)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/ETaylor44/climbTracker.git
cd climbTracker
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGO_URI=mongodb://localhost:27017/climbtracker
PORT=3000
```

For MongoDB Atlas, use your connection string:
```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/climbtracker?retryWrites=true&w=majority
PORT=3000
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Create a `.env` file in the frontend directory (if needed):
```env
REACT_APP_API_URL=http://localhost:3000
```

### 4. Start the Application

**Start Backend Server:**
```bash
cd backend
npm start
```
The API server will run on `http://localhost:3000`

**Start Frontend Development Server:**
```bash
cd frontend
npm start
```
The React app will run on `http://localhost:3001`

## 📊 Data Models

### Climber Schema
```javascript
{
  name: String (required),
  age: Number,
  email: String (required, unique),
  climbs: [ObjectId] (references to Climb documents),
  timestamps: true
}
```

### Climb Schema
```javascript
{
  name: String (required),
  grade: String (required), // e.g., "V5", "7A"
  setter: String,
  terrain: String, // e.g., "slab", "overhang", "cave"
  sentBy: [ObjectId] (references to Climber documents),
  timestamps: true
}
```

## 🔗 API Endpoints

### Climbers
- `GET /climbers` - Get all climbers
- `GET /climbers/:id` - Get climber by ID (with populated climbs)
- `POST /climbers` - Create new climber
- `PATCH /climbers/:id` - Update climber by ID
- `DELETE /climbers/:id` - Delete climber by ID

### Example API Usage

**Create a Climber:**
```bash
curl -X POST http://localhost:3000/climbers \
  -H "Content-Type: application/json" \
  -d '{"name": "Alex Honnold", "age": 38, "email": "alex@climbing.com"}'
```

**Get All Climbers:**
```bash
curl http://localhost:3000/climbers
```

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm test
```

### Frontend Testing
```bash
cd frontend
npm test
```

## 🔧 Development

### Available Scripts

**Backend:**
- `npm start` - Start development server with nodemon
- `npm test` - Run tests

**Frontend:**
- `npm start` - Start development server
- `npm test` - Run tests in watch mode
- `npm run build` - Build for production
- `npm run eject` - Eject from Create React App

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Author

**Ellen Taylor** - [ETaylor44](https://github.com/ETaylor44)

## 🐛 Issues & Support

If you encounter any issues or have questions, please [open an issue](https://github.com/ETaylor44/climbTracker/issues) on GitHub.

## 🔮 Future Enhancements

- [ ] Route search and filtering functionality
- [ ] Climbing statistics and analytics
- [ ] Photo uploads for routes
- [ ] User authentication and authorization
- [ ] Route difficulty recommendations
- [ ] Social features (following climbers, comments)
- [ ] Mobile app development
- [ ] Integration with climbing gym APIs

---

Happy Climbing! 🧗‍♂️🧗‍♀️