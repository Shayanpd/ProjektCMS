import fetchData from "../helpers/fetchData.js";

export const getTicketsForEvent = async (Event_id) => {
    const data = await fetchData(
        `
        query Tickets($Event_id: GraphQLStringOrFloat!) {
             Tickets(filter: { Event_id: { id: { _eq: $Event_id } } }) {
               id
               Number_Of_Tickets
               Price
               Event_id{
               id 
               title
               }
            }
        }
        `,
        {
            variables: { Event_id }
        }
    );

    return data.data;
}

// Test function

