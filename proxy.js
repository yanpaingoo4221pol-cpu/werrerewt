export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.bigwinqaz.com/api/webapi/GetNoaverageEmerdList", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pageNo: 1, pageSize: 10 }),
    });

    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "❌ Proxy fetch failed", details: error.message });
  }
}
