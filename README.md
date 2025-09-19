<div align="center">
  <h1>🧠 JavaScript Quiz Master</h1>
  
  <p><strong>An interactive web-based quiz to test and improve your JavaScript knowledge.</strong></p>
  
  <p>Challenge yourself with timed questions across various topics, from core concepts to advanced features.</p>

  <a href="https://java-script-quiz-app-pi-one.vercel.app/" target="_blank"><strong>🚀 View Live Demo</strong></a>
  
  <br />
  <br />

  <div>
    <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
    <img src="https://img.shields.io/badge/Vite-5.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
     <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  </div>
  
  <br>
  
  <div>
    <a href="#-features"><strong>Features</strong></a> •
    <a href="#-demo"><strong>Demo</strong></a> •
    <a href="#-tech-stack"><strong>Tech Stack</strong></a> •
    <a href="#-getting-started"><strong>Getting Started</strong></a> •
    <a href="#-contributing"><strong>Contributing</strong></a>
  </div>

</div>

---

## 🎆 Overview

**JavaScript Quiz Master** is a sleek, modern web application designed for developers looking to sharpen their JavaScript skills. It provides an engaging and challenging experience with a variety of questions covering multiple facets of the language. The app features a clean, responsive interface and a robust timer system that makes learning both effective and fun.

<br>

<div align="center">
  <h3>🏆 Core Gameplay Loop 🏆</h3>

mermaid
graph TD
    A[▶️ Start Quiz] --> B{📚 Select Topic};
    B --> C[🧠 Answer Timed Question];
    C --> D{Time's Up?};
    D -- No --> E{Correct Answer?};
    D -- Yes --> F[Question Locked];
    E -- Yes --> G[+10 Points];
    E -- No --> H[No Points];
    G --> I{Last Question?};
    H --> I;
    F --> I;
    I -- No --> C;
    I -- Yes --> J[🏁 View Final Score];
    J --> K[🧐 Review Answers];
    K --> A;
</div>

✨ Features
<table>
<tr>
<td width="50%">

⏱️ Dynamic Timer System

Per-Question Timer: Each question has a 60-second countdown.

Pause & Resume: Timers for unanswered questions are paused when you navigate away and resume when you return, preventing exploits.

Visual Feedback: The timer changes color and pulses when time is low.

</td>
<td width="50%">

📚 Topic-Based Learning

Multiple Categories: Test your knowledge on Core Concepts, ES6+, Asynchronous JS, and more.

Progressive Unlocking: Users must score at least 60 points on the "Core JavaScript Concepts" quiz to unlock more advanced topics.

</td>
</tr>
<tr>
<td>

📈 Scoring & Results

Instant Feedback (Optional): A "+10 Points" badge indicates the value of each question.

Comprehensive Score Screen: After completing a quiz, view your final score.

Answer Review: The results page includes a full list of questions, your answers, the correct answers, and code examples to reinforce learning.

</td>
<td>

🎨 Modern User Experience

Sleek Interface: A clean, dark-themed UI built with Tailwind CSS.

Fully Responsive: Enjoy a seamless experience on desktop, tablet, and mobile devices.

Smooth Transitions: Fluid animations for a pleasant user interaction.

</td>
</tr>
</table>

📸 Demo
Here's a quick look at the app in action. The live demo provides the full interactive experience.

<div align="center">
<a href="https://java-script-quiz-app-pi-one.vercel.app/" target="_blank">
<img src="https://www.google.com/search?q=https://i.imgur.com/uR5xDEy.gif" alt="JavaScript Quiz Master Demo GIF" width="800"/>
</a>
<p><em>Click the GIF to visit the live demo!</em></p>
</div>

Note: To create a high-quality GIF like the one above for your projects, you can use free tools like ScreenToGif or LICEcap.

🛠️ Tech Stack
This project was built using a modern frontend stack to ensure a fast, reliable, and maintainable application.

Technology	Purpose
React	A JavaScript library for building user interfaces. Used for creating the component-based architecture of the app.
Vite	A next-generation frontend tooling that provides an extremely fast development server and optimized build process.
Tailwind CSS	A utility-first CSS framework for rapidly building custom designs without leaving your HTML.
JavaScript (ES6+)	The core programming language used for all the application logic, from timers to scoring.
Vercel	The platform used for deploying the live version of the application with ease.

Export to Sheets
🚀 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Make sure you have Node.js and npm installed on your machine.

Node.js (v18 or higher recommended) - Download

Installation Steps
<details>
<summary><strong>1. 🔄 Clone the Repository</strong></summary>

Bash

git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name
Replace your-username and your-repo-name with your actual GitHub details.

</details>

<details>
<summary><strong>2. 📦 Install Dependencies</strong></summary>

Bash

npm install
</details>

<details>
<summary><strong>3. 🚀 Launch the Development Server</strong></summary>

Bash

npm run dev
</details>

<details>
<summary><strong>4. 🎉 Access the Application</strong></summary>

Open your browser and navigate to the local address provided in the terminal (usually http://localhost:5173).

</details>

🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is distributed under the MIT License. See LICENSE file for more information.

<div align="center">
⭐ Star this repository if you found it helpful! ⭐
<br>
⬆️ Back to Top
</div>
