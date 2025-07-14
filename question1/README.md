# Question 1: Logging Middleware

This React app demonstrates a reusable logging middleware that integrates with Affordmed's protected log API. It captures logs with various levels (debug, info, error, etc.) and sends them via authenticated POST requests.

# Key Features
- Written in JavaScript
- Fully reusable logger in `src/middleware/logger.js`
- Supports dynamic logging for stack, level, package, and message
- Successfully tested against Affordmed evaluation server

# How to Run
```bash
cd question1
npm install
npm run dev

and finally open http://localhost:5173 and check the browser console for successful log messages.


