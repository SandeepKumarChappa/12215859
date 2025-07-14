let token = "";

export function initLogger(authToken) {
  token = authToken;
}

export async function writeLog(stack, level, pkg, message) {
  try {
    const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ stack, level, package: pkg, message }),
    });

    const data = await response.json();
    console.log("✅ Log created:", data);
  } catch (err) {
    console.error("⚠️ Logger Error: Failed to fetch", err);
  }
}
