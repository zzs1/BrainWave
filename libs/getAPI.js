export async function getHint(prompt, answer) {
    const response = await fetch("https://b3vmv6dbufxgvnuvte7lrouzka0umflk.lambda-url.ca-central-1.on.aws/", {
            body: JSON.stringify({question: `Hey Wimmy. Give me a broken down hint of this question: "${prompt}". Keep the explanation to one short paragraph. This is the answer to the question: "${answer}".Don't give the answer. just hint to it.`}),
            method: "post"
        });
    
    return response.json();
}