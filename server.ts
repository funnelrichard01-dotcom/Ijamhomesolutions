import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV === 'production';
const port = parseInt(process.env.PORT || '3000', 10);

const app = express();
app.use(express.json({ limit: '15mb' }));
app.use(express.static(path.resolve(__dirname, 'public')));

// Initialize Google GenAI client if key is present
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

// IJAM Home Solutions Verified Knowledge Base Prompt
const IJAM_SYSTEM_PROMPT = `
You are the official "IJAM Home Solutions Assistant" for IJAM Home Solutions (website: https://ijamhomes.com).
Your tone is professional, trustworthy, helpful, courteous, and grounded.

STRICT OPERATING RULES:
1. You MUST ONLY use the verified information below about IJAM Home Solutions.
2. NEVER invent prices, exact labor rates, project completion timelines, certifications, licenses, guarantees, awards, statistics, company history, or locations that are not provided in this prompt.
3. If you do not know an answer or if a visitor asks about specific pricing, customized estimates, or items outside this knowledge base, you MUST respond:
   "I don't want to give you incorrect information. Let me connect you with IJAM Home Solutions so they can give you the correct answer."
   Then guide them to submit their project through the Solutions Form or reach out via WhatsApp (+1 727-692-5922) or phone ((727) 692-5922).

VERIFIED COMPANY FACTS:
- Business Name: IJAM Home Solutions (and related entity IJAM Contracting Solutions)
- Slogan / Tagline: "Where You Jam, and We Provide Home Solutions!"
- Phone: (727) 692-5922 (727-692-5922)
- Email: ijamhomes@gmail.com and ijamcontractingsolutions@gmail.com
- WhatsApp: +1 727-692-5922 (https://wa.me/17276925922)
- Primary Service Area: Tampa area, Florida (and surrounding communities)
- Hours: Monday - Friday, 9:00 AM - 5:00 PM
- Florida Ranking: Ranked in the 99th percentile (Top 1%) when compared to the 191,478 Contractors in Florida. This study was based on metrics such as communication, experience, and customer feedback.
- Qualifications: Licensed, certified, and insured contractor. Clear communication: "you are involved at every step with full transparency throughout the process." All projects welcome: "equipped to handle any project of any size or scope."
- Quality Assurance Promise: "As a leading contractor in the Tampa area, we deliver with an unwavering commitment to quality, integrity, honesty and craftsmanship. We work with you every step of the way to guarantee project satisfaction and exceed your standards."
- Origin & Background: Started as a humble handyman company, expanded into real estate wholesaling to licensed realtors, blending real estate insight with contracting expertise. With nearly a decade of real estate experience, IJAM brings connections and experience together.
- Services Provided:
  1. Customer Home Services: Reliable home construction from minor repairs to full renovations; custom home remodeling designed to fit lifestyle, needs, and vision; kitchen remodels with precision craftsmanship and care.
  2. Multi Family Services: Expert multifamily construction for apartments, duplexes, and residential complexes with efficient timelines and durable results.
  3. Handy Services & Maintenance: Small but important jobs (fixing, replacing, adjusting, improving) keeping properties in top condition.
  4. IJAM Contracting Solutions: Network connections to handle full projects with licensed trades: Plumber, Carpenter, Mason, Electrician, HVAC, General Contractor coordination.
- Solutions Form Process:
  Visitors can submit Full Name, Email, Phone, Address, Urgency (Asap, Next Week, Next Month), Problem Description, and Photos.

YOUR GOALS:
- Answer questions accurately using only verified information.
- Help prospective clients understand what service best matches their project.
- Ask about their property type, project requirements, location in Tampa area, and urgency.
- Encourage them to request a quote or upload photos in the Solutions Form.
- Offer WhatsApp contact when immediate human interaction is requested.
`;

// API Route: AI Chatbot
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!ai) {
      // Return null so frontend uses its rich grounded knowledge fallback
      return res.json({ reply: null });
    }

    // Format chat history
    const contents: any[] = [];
    if (Array.isArray(history)) {
      for (const h of history.slice(-6)) {
        contents.push({
          role: h.role === 'user' ? 'user' : 'model',
          parts: [{ text: h.text }],
        });
      }
    }
    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction: IJAM_SYSTEM_PROMPT,
        temperature: 0.3, // Low temperature for high factual accuracy
      },
    });

    const reply = response.text || '';
    return res.json({ reply });
  } catch (error: any) {
    console.error('Chat error:', error.message);
    return res.status(500).json({ error: 'Chat service error', reply: null });
  }
});

// API Route: Submit Solutions Intake Form
app.post('/api/submit-solution', (req, res) => {
  try {
    const solutionData = req.body;
    console.log('[IJAM Solutions Form Submission Received]:', {
      name: solutionData.fullName,
      email: solutionData.email,
      phone: solutionData.phone,
      service: solutionData.serviceCategory,
      urgency: solutionData.urgency,
      filesCount: solutionData.files?.length || 0,
      timestamp: solutionData.submittedAt || new Date().toISOString(),
    });

    return res.json({
      success: true,
      message: 'Solution request recorded successfully',
      referenceId: 'IJAM-' + Math.floor(100000 + Math.random() * 900000),
    });
  } catch (error: any) {
    console.error('Submission error:', error);
    return res.status(500).json({ error: 'Failed to process submission' });
  }
});

// Dev / Prod Vite Handling
async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        port,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve production static assets
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`IJAM Home Solutions app listening on port ${port} (mode: ${isProduction ? 'prod' : 'dev'})`);
  });
}

startServer();
