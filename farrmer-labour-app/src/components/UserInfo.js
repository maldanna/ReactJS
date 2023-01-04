import Cookies from "js-cookie";

export function setToken(token) {
    Cookies.set('jwtToken', token);
}

export function getToken() {
    // Read the JWT token from the cookie
    const token = Cookies.get('jwtToken');
    return token;
}

export function setUserPhone(phone) {
    // Read the JWT token from the cookie
    Cookies.set('userPhone',phone);
}

export function getUserPhone() {
    // Read the JWT token from the cookie
    const phone = Cookies.get('userPhone');
    return phone;
}

//export default {setToken,setUserPhone,getToken,getUserPhone};