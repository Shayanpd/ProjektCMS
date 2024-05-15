//const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHQL
const graphQLAPI = "http://localhost:8055/graphql/system"

const authData = async (query, { variables = {}}) => {
    const headers = { 'Content-Type': 'application/json' }

    const res = await fetch(graphQLAPI, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query,
            variables
        })
    })

    const json = await res.json()

    if (json.errors) {
        console.error("GraphQL mutation Errors:", json.errors);
        json.errors.forEach((err) => {
            console.error(err.message);
            if (err.extensions) {
                console.error('Extensions:', err.extensions);
            }
        });
        const message = json.errors.map((error) => error.message).join("\n");
        throw new Error(message);
    }

    return json
}

export default authData