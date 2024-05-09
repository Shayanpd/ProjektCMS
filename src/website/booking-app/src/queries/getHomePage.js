import fetchData from "../helpers/fetchData.js"

export const getHomepage = async () => {
    const data = await fetchData(
        `

        query Home_Page {
            Home_Page {
                id
                title
                body
                image 
            }
        }
        `,
        {
            variables: {}
        }
    )

    return data.data.Home_Page
}