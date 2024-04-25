import writeData from "../helpers/writeData.js";

export const refreshAuthentication = async () => {

    const cookies = document.cookie;
    const refreshTokenCookie = cookies
        .split(';')
        .map(cookie => cookie.trim())
        .find(cookie => cookie.startsWith('refresh_token'));

    let refreshToken = refreshTokenCookie.split('=')[1];

    const data = await writeData(
        `
        mutation Auth_refresh {
            auth_refresh(refresh_token: "${refreshToken}") {
                access_token
                refresh_token
            }
        }
        `,
        {
            variables: {}
        }
    )

    return data.data;
}

export const refreshTokens = async () => {

    try {
        const { auth_refresh } = await refreshAuthentication();
        const { access_token, refresh_token } = auth_refresh;

        localStorage.setItem('access_token', access_token);
        document.cookie = `refresh_token = ${refresh_token};`;

    } catch (error){
        console.error('Error reauthenticating: ', error);
    }
            
};