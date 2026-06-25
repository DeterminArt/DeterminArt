async function send() {
  const password = document.getElementById("password").value;
  const text = document.getElementById("input").value;
  const status = document.getElementById("status");

  status.innerText = "AI is interpreting your input...";

  try {
    const res = await fetch("https://determinart-ai.determinart.workers.dev/interpret", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, text })
    });

    const data = await res.json();

    if (data.error) {
      status.innerText = data.error;
    } else {
      status.innerText = "Motion generated successfully!";
    }

  } catch (err) {
    status.innerText = "❌ No connection to AI backend";
    console.error(err);
  }
}