// src/helpers/api.js
import fetchData from "../helpers/fetchData.js";


export const getUserByUsername = async (username) => {
    const query = `
        query GetUserByUsername($username: String!) {
            User(filter: { Username: { _eq: $username } }) {
                id
                Password
                Email
                Username
            }
        }
    `;

    return fetchData(query, { variables: { username } });
};
