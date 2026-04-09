import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") return res.status(405).end();

  const { messages } = req.body;

  try {
    // Foydalanuvchi va AI tarixini formatlash
    const history = messages
      .filter((_: any, i: number) => i !== 0)
      .map((msg: any) => ({
        role: msg.role === "assistant" ? "assistant" : "user",
        content: msg.content,
      }));

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini", // ← bepul ishlaydigan model
          messages: [
            {
              role: "system",
              content: `Sen tibbiy maslahat beruvchi AI yordamchisisan.
Foydalanuvchi simptomlarini aytadi, sen:
1. Qaysi mutaxassis doktorga borishi kerakligini ayt
2. Nima qilish va nima qilmaslik kerakligini ayt
3. Bu jiddiy bo'lsa, tezda shifokorga borishni tavsiya qil
4. Hech qachon aniq tashxis qo'yma, faqat yo'naltir
O'zbek tilida javob ber.`,
            },
            ...history,
          ],
          max_tokens: 500,
        }),
      },
    );

    const data = await response.json();

    const text = data.choices?.[0]?.message?.content || "Xato yuz berdi";
    res.status(200).json({ reply: text });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
}
