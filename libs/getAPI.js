export async function getHint(prompt, answer) {
    const response = await fetch("https://b3vmv6dbufxgvnuvte7lrouzka0umflk.lambda-url.ca-central-1.on.aws/", {
        body: JSON.stringify({ question: `Hey Wimmy. Give me a broken down hint of this question: "${prompt}". Be brief and concise in your response with very short paragraphs. This is the answer to the question: "${answer}".Don't give the answer. just hint to it.` }),
        method: "post"
    });

    return response.json();
}

export async function getChat(prompt) {
    const response = await fetch("https://b3vmv6dbufxgvnuvte7lrouzka0umflk.lambda-url.ca-central-1.on.aws/", {
        body: JSON.stringify({ question: `${prompt}. Be brief and concise` }),
        method: "post"
    });

    return response.json();
}

export async function getFeedBack(quesOne, quesTwo, quesThree, quesFour) {
    const response = await fetch("https://b3vmv6dbufxgvnuvte7lrouzka0umflk.lambda-url.ca-central-1.on.aws/", {
        body: JSON.stringify({ question: `Hey Wimmy. give me a detailed breakdown of these questions listed:\n1. ${quesOne}\n2. ${quesTwo}\n3. ${quesThree}\n4. ${quesFour}\n be brief and concise in your response. Answer all the questions listed.` }),
        method: "post"
    });

    return response.json();
}