import { useEffect } from "react";
import { initLogger, writeLog } from "./middleware/logger";

function App() {
  useEffect(() => {
    initLogger(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzYW5kZWVwa3VtYXIuY2hhcHBhQGxwdS5pbiIsImV4cCI6MTc1MjQ3MTE5MCwiaWF0IjoxNzUyNDcwMjkwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZTUxODFiOWUtOWE3My00OGZiLTljMjItMTE1OTI2YzBhM2YzIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiY2hhcHBhIHNhbmRlZXAga3VtYXIiLCJzdWIiOiJhMGJlMWVlZC02ZTkyLTRjNWUtODZjOC01NDg4YTI3Mzg0MjQifSwiZW1haWwiOiJzYW5kZWVwa3VtYXIuY2hhcHBhQGxwdS5pbiIsIm5hbWUiOiJjaGFwcGEgc2FuZGVlcCBrdW1hciIsInJvbGxObyI6IjEyMjE1ODU5IiwiYWNjZXNzQ29kZSI6IkNaeXBRSyIsImNsaWVudElEIjoiYTBiZTFlZWQtNmU5Mi00YzVlLTg2YzgtNTQ4OGEyNzM4NDI0IiwiY2xpZW50U2VjcmV0IjoiS1BVS0J0VFVaV25mVERRZiJ9.l6gtsNarl--37x71XHJzTmsGTuq4hHOubBpsqdXJQZE"
    );

    writeLog("frontend", "info", "page", "App loaded successfully");
    writeLog("frontend", "warn", "component", "Logger component mounted");
  }, []);

  return (
    <div>
      <h1>Question 1: Logging Middleware</h1>
      <p>Check your console for logs!</p>
    </div>
  );
}

export default App;
