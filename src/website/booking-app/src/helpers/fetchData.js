//const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHQL
const graphQLAPI = "http://localhost:8055/graphql"

const fetchData = async (query, { variables = {}}) => {
    const headers = { 'Content-Type': 'application/json' }

    console.log('Query:', query);
    console.log('Variables:', variables);


    const res = await fetch(graphQLAPI, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query,
            variables
        })
    })

    const json = await res.json()

    console.log('Response:', json);


    if (json.errors) {
        console.error("GraphQL Errors:", json.errors);
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

export default fetchData