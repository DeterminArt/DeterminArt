async function send() {
  const password = document.getElementById("password").value;
  const text = document.getElementById("input").value;
  const status = document.getElementById("status");

  status.innerText = "Processing...";

  const res = await fetch("https://YOUR_WORKER_URL/interpret", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password, text })
  });

  const data = await res.json();

  if (data.error) {
    status.innerText = data.error;
  } else {
    status.innerText = "Motion generated and sent to system.";
  }
}