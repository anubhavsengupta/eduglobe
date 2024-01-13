
import { CohereClient } from "cohere-ai";
import OpenAI from "openai";


function generate(userPrompt) {
    const cohere = new CohereClient({
        token: "tqkSCR8CxE5MOFqX3wQcDYcqTpjennDR9h20qns8",
    });

    (async () => {
        const prediction = await cohere.generate({
            prompt: userPrompt,
            maxTokens: 1000,
        });
        
        console.log("Received prediction", prediction);
    })();
}

generate("Write me a two sentence description of an API request");

const response = await openai.createImage({
    model: "dall-e-3",
    prompt: "an orange siamese cat",
    n: 1,
    size: "1024x1024",
  });
  image_url = response.data.data[0].url;
  console.log(image_url);

  // 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