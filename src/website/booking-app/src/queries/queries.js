import fetchData from "../helpers/fetchData.js"

export const getHomepage = async () => {
    const data = await fetchData(
        `

        query Homepage {
            Home_Page {
                id
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

    return data.data.Home_Page
}