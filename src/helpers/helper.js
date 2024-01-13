
import { CohereClient } from "cohere-ai";


const cohere = new CohereClient({
    token: "tqkSCR8CxE5MOFqX3wQcDYcqTpjennDR9h20qns8",
});

(async () => {
    const prediction = await cohere.generate({
        prompt: "Write a curriculum for learning fractions",
        maxTokens: 1000,
    });
    
    console.log("Received prediction", prediction);
})();