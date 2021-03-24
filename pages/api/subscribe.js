export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405);
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    console.log("WASUP?");
    await fetch(
      `https://api.convertkit.com/v3/forms/${process.env.CONVERT_KIT_FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          api_key: process.env.CONVERT_KIT_API_KEY,
        }),
      }
    );

    return res.status(201);
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
