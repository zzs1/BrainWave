export async function getHint(prompt, answer) {
    const response = await fetch("https://b3vmv6dbufxgvnuvte7lrouzka0umflk.lambda-url.ca-central-1.on.aws/", {
        body: JSON.stringify({
            model: "text-completion", // Specifying the model to use, but I don't know how to make the text display as it's generating. May or may not be faster.
            question: `Hey Wimmy. Give me a broken down hint of this question: "${prompt}". Keep the explanation to one short paragraph. This is the answer to the question: "${answer}".Don't give the answer. just hint to it.`,
        }),
        method: "post"
    });

    return response.json();
}

export async function getChat(prompt) {
    const response = await fetch("https://b3vmv6dbufxgvnuvte7lrouzka0umflk.lambda-url.ca-central-1.on.aws/", {
        body: JSON.stringify({
            model: "text-completion",
            question: prompt,
        }),
        method: "post"
    });

    return response.json();
}

export async function getFeedBack(quesOne, quesTwo, quesThree, quesFour) {
    const response = await fetch("https://b3vmv6dbufxgvnuvte7lrouzka0umflk.lambda-url.ca-central-1.on.aws/", {
        body: JSON.stringify({
            model: "text-completion",
            question: `Hey Wimmy. give me a detailed breakdown of these questions listed:\n${quesOne}\n${quesTwo}\n${quesThree}\n${quesFour}`,
        }),
        method: "post"
    });

    return response.json();
}
