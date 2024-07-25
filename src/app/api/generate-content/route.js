// src/app/api/generate-content/route.js
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req) {
  const body = await req.json();
  console.log(body)
  const {prompt} = body
  try {
    const genAI = new GoogleGenerativeAI("AIzaSyAyg54nvhhbR_dVAzrpYnoQy-HhgYObtfs");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);

    return NextResponse.json({ result });
  } catch (error) {
    console.error('Error generating content:', error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
