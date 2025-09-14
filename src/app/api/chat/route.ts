import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "Missing Gemini API Key" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: message,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "خطا از سمت Gemini");
    }

    const data = await response.json();
    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "پاسخی دریافت نشد.";

    return Response.json({
      choices: [{ message: { content: responseText } }],
    });

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return Response.json(
      { error: "خطا در ارتباط با سرویس Gemini" },
      { status: 500 }
    );
  }
}