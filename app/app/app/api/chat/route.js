import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { messages, characterSystemPrompt } = await req.json();

    const response = await fetch("https://text.pollinations.ai/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [
          { role: "system", content: characterSystemPrompt },
          ...messages
        ],
        model: "openai",
        jsonMode: false
      })
    });

    const reply = await response.text();
    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ error: "خطأ في الاتصال" }, { status: 500 });
  }
}
