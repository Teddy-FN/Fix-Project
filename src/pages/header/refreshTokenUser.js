const refreshTokenSetup = res => {
    let refreshTiming = (res.tokeObj.expires_in || 3600 - 5 * 60) * 1000;

    const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse();
        refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000
        setTimeout(refreshToken, refreshTiming)
    };
    setTimeout(refreshToken, refreshTiming)
};
export default refreshTokenSetup