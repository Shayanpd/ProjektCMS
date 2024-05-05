// src/helpers/api.js
import fetchData from "../helpers/fetchData.js";


export const getUserByUsername = async (username) => {
    const query = `
        query GetUserByUsername($username: String!) {
            users(filter: {username: {_eq: $username}}) {
                id
                username
            }
        }
    `;
    return fetchData(query, { variables: { username } });
};
