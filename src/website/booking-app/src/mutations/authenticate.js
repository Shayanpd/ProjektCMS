import writeData from "../helpers/writeData.js";

export const authenticate = async () => {
    const data = await writeData(
        `
        mutation Auth_login {
            auth_login(email: "${process.env.REACT_APP_EMAIL}", password: "${process.env.REACT_APP_PASSWORD}") {
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

export const fetchTokens = async () => {

    try {
        const { auth_login } = await authenticate();
        const { access_token, refresh_token } = auth_login;

        localStorage.setItem('access_token', access_token);
        document.cookie = `refresh_token = ${refresh_token};`;

    } catch (error){
        console.error('Error authenticating: ', error);
    }
            
};


