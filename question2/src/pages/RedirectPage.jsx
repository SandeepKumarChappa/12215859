import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { writeLog } from "../middleware/logger";

const RedirectPage = () => {
  const { shortcode } = useParams();

  useEffect(() => {
    const fetchRedirect = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/resolve/${shortcode}`);
        const data = await res.json();

        if (res.ok) {
          writeLog(`Redirected using shortcode: ${shortcode}`);
          window.location.href = data.longUrl;
        } else {
          writeLog(`❌ Invalid shortcode used: ${shortcode}`);
          alert("Shortcode not found or expired.");
        }
      } catch (error) {
        console.error("Redirect error:", error);
        writeLog(`❌ Redirect exception: ${error.message}`);
        alert("An error occurred during redirection.");
      }
    };

    fetchRedirect();
  }, [shortcode]);

  return <p>Redirecting...</p>;
};

export default RedirectPage;
