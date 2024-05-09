import fetchData from "../helpers/fetchData.js"

export const getTentipiIcon = async () => {
    const data = await fetchData(
        `
        query Tentipi_Icon {
            Tentipi_Icon {
                Icon
            }
        }
        `,
        {
            variables: {}
        }
    )

    return data.data.Tentipi_Icon;
}