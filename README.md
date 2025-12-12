📢 DailyTrack – React News Application

DailyTrack is a fast, clean, and fully–featured React-based News Application that displays the latest news based on categories and user search input.
It focuses on real-world React concepts like API fetching, controlled components, auto-focus, reusable UI design, and efficient state management.

🚀 Features
✅ Category-Based News

Choose from multiple categories (Business, Sports, Technology, Health, etc.), and DailyTrack instantly loads news for that category.

✅ Smart Search

Search any topic — the app filters and displays relevant results dynamically.

✅ Auto Input Focus

After every re-render or search update, the search bar automatically focuses for smooth user experience.

✅ Reusable Components

Navbar

Category Selector

Search Input

News Card

News List

Loader / Spinner

✅ Graceful Error Handling

DailyTrack handles:

Invalid API key

No results found

Missing thumbnails (fallback image)

Network/API errors

✅ Lightweight & Fast

Simple UI with smooth rendering and clean state updates.

🛠️ Tech Stack
Technology	Usage
React + Vite	Main frontend framework
Hooks (useState, useEffect, useRef)	State + lifecycle
Fetch API / Axios	API data fetching
CSS / Bootstrap	Styling
News API	Live news data
📁 Folder Structure

```
src/
│── components/
│     ├── Navbar.jsx
│     ├── SearchBar.jsx
│     ├── CategoryBar.jsx
│     ├── NewsCard.jsx
│     ├── NewsList.jsx
│     └── Loader.jsx
│
│── App.jsx
│── App.css
│── index.js

```

🔑 Environment Variables

Create a .env file:

VITE_NEWS_API_KEY=your_api_key_here


Never hard-code your API key in the component files.

📦 Installation & Setup
# Clone the project
```
git clone https://github.com/your-username/dailytrack.git
```

# Go inside folder
```
cd dailytrack
```
# Install dependencies
```
npm install
```

# Start development server
```
npm run dev
```

🔍 How DailyTrack Works

Loads with a default news category

Fetches real-time news from API

Displays articles using a clean card UI

User can:

Switch categories

Search instantly

Input automatically gets focused again after rendering

Loader and error states ensure a smooth experience

📚 Concepts You Practiced

React Component Structure

Controlled Inputs + Auto-Focus

State Management with Hooks

API Calls & Data Handling

JSON parsing + dynamic UI updates

Conditional rendering (loading, error, news list)

Props handling across multiple components

Clean and modular reusable design

🧪 Future Enhancements

Infinite scrolling

Dark/Light theme

User preferences stored locally

News bookmarking feature

Multi-language support

🤝 Contributing

Open to suggestions, pull requests, and improvements.
Feel free to contribute!

📜 License

Distributed under the MIT License.

If you want, I can also:

🔥 Add fancy badges (React, MIT, Stars, Issues, etc.)
🔥 Add emojis to every section
🔥 Format it in GitHub-style bold headers
🔥 Add Code of Conduct + Contribution Guide

Just tell me!
