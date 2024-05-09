import fetchData from "../helpers/fetchData.js"

// Fetch basic event list data for homepage
export const getHomePageEvents = async () => {
    const data = await fetchData(
        `
    query HomePageEvents {
    Event_List {
        id
        title
        Date
        Short_Descrition
        image {
            id
        }
    }
}

        `,
        {
            variables: {}
        }
    )

    return data.data.Event_List
}
