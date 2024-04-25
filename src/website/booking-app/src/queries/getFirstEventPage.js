import fetchData from "../helpers/fetchData.js"

export const getFirstEventPage = async () => {
    const data = await fetchData(
        `
        query Event_List {
            Event_List(filter: { id: { _eq: "1" } }) {
                id
                status
                title
                Full_Description
                Short_Descrition
                Date
                link
                Locations
            }
        }
        `,
        {
            variables: {}
        }
    )

    return data.data;
}

