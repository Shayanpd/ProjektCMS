import fetchData from "../helpers/fetchData.js"

// Fetch basic event list data for homepage
export const getHomePageEvents = async () => {
    const data = await fetchData(
        `
    query Event_List {
        Event_List {
            id
            title
            Date
            Short_Description
            image 
        }
    }

        `,
        {
            variables: {}
        }
    )

    return data.data.Event_List
}
