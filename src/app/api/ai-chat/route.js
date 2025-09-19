import { NextResponse } from "next/server";
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, AIMessage, SystemMessage } from "@langchain/core/messages";

export async function POST(req) {
    try {
        const { messages } = await req.json();

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
        }

        const systemPrompt = new SystemMessage(`
You are AyurSutra AI — an assistant that specializes in Ayurveda, Panchakarma, Ayurvedic therapies, herbs, and AyurSutra's services.
Rules:
1. You can also handle polite greetings and small talk (e.g., "hi", "hello", "how are you", "thank you", "bye").
2. For Ayurveda-related questions, give detailed, helpful, and friendly answers.
3. For anything not related to Ayurveda or small talk, reply:
   "I can only help with Ayurveda, Panchakarma, and AyurSutra-related questions."
Stay warm, professional, and empathetic in tone.
`);


        const lcMessages = [
            systemPrompt, // always include this
            ...messages.map((msg) => {
                if (msg.role === "user") return new HumanMessage(msg.content);
                if (msg.role === "assistant") return new AIMessage(msg.content);
                return new SystemMessage(msg.content);
            }),
        ];

        const model = new ChatOpenAI({
            apiKey: process.env.OPENAI_API_KEY,
            temperature: 0.7,
            model: "gpt-4o-mini", // or "gpt-3.5-turbo"
        });

        const response = await model.invoke(lcMessages);

        return NextResponse.json({ content: response.content });
    } catch (err) {
        console.error("AI Chat API Error:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
