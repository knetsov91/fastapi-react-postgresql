export const decodeJwt = (jwtToken) => {
    return JSON.parse(atob(jwtToken.split(".")[1]))
}