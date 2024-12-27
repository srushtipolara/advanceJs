const setCookie = (username, value, days) => {
    // set cookie
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${username}=${value}; ${expires}; path=/`;
}

const getCookie = (username) => {
    // get cookie
    const cookie = document.cookie
        .split('; ')
        .find((cookie) => cookie.startsWith(`${username}=`));
    console.log("cookie", cookie)
    const value = cookie?.replace(`${username}=`, '')
    try {
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.log("cookie Error ===>", error)
    }
}

export {setCookie, getCookie}