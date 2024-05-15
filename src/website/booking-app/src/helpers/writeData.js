// src/helpers/writeData.js
const graphQLAPI = "http://localhost:8055/graphql";

const writeData = async (query, { variables = {} }, additionalPath = '') => {
    const headers = { 'Content-Type': 'application/json' };

    const res = await fetch(`${graphQLAPI}${additionalPath}`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query,
            variables
        })
    });

    const json = await res.json();

    if (json.errors) {
        console.error("GraphQL mutation Errors:", json.errors);
        json.errors.forEach((err) => {
            console.error('Message:', err.message);
            if (err.extensions) {
                console.error('Extensions:', err.extensions);
            }
            if (err.locations) {
                console.error('Locations:', err.locations);
            }
            if (err.path) {
                console.error('Path:', err.path);
            }
        });
        const message = json.errors.map((error) => error.message).join("\n");
        throw new Error(message);
    }

    return json;
};

export default writeData;
