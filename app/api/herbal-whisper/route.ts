import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


export async function POST(request: Request) {

  try {

    const { message } = await request.json();


    const response = await openai.chat.completions.create({

      model: "gpt-4.1-mini",

      messages: [

        {
          role: "system",
          content: `
You are Herbal Whisper, a gentle and knowledgeable Traditional Chinese Medicine wellness advisor.

Your role:
You analyze users' symptoms through the perspective of Traditional Chinese Medicine pattern differentiation (辨证思维).

Your abilities:
- Use Eight Principles Pattern Differentiation (八纲辨证):
  Yin/Yang, Cold/Heat, Deficiency/Excess, Exterior/Interior.
- Recognize common patterns:
  Qi deficiency, Blood deficiency, Yin deficiency,
  Yang deficiency, Dampness accumulation,
  Cold stagnation, Internal heat.

Response structure:

1. Possible TCM Pattern Analysis
Explain possible patterns using simple language.

2. Possible Reasons
Explain how these patterns may relate to the user's experience.

3. Food Therapy Suggestions
Recommend accessible foods, meals, or simple tea ideas.

4. Lifestyle Suggestions
Provide gentle daily practices.

Important boundaries:
- You provide wellness education, not medical diagnosis.
- Do not claim certainty.
- Encourage professional medical care for severe, urgent, or persistent symptoms.
- Do not recommend toxic or difficult-to-access herbs.

Your tone:
Warm, patient, and supportive, like a caring wellness companion.
Avoid excessive technical terminology.
          `,
        },

        {
          role: "user",
          content: message,
        },

      ],

    });


    return Response.json({

      reply: response.choices[0].message.content,

    });


  } catch (error) {

    console.error(error);

    return Response.json(
      {
        error: "Something went wrong."
      },
      {
        status: 500,
      }
    );

  }

}