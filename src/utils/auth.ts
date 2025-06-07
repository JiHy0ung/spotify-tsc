import { CLIENT_ID } from "../configs/authConfig";
import { DEV_REDIRECT_URI, REDIRECT_URI } from "../configs/commonConfig";
import { AuthUrlParams } from "../models/auth";
import { base64encode, generateRandomString, sha256 } from "./crypto";

export const getSpotifyAuthUrl = async () => {
  const codeVerifier = generateRandomString(64);
  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64encode(hashed);

  const clientId = CLIENT_ID;
  // const redirectUri = DEV_REDIRECT_URI;
  const redirectUri = REDIRECT_URI;

  const scope = "user-read-private user-read-email"; // 얼마나 많은 허가가 필요한지.
  const authUrl = new URL("https://accounts.spotify.com/authorize");

  // generated in the previous step
  window.localStorage.setItem("code_verifier", codeVerifier);

  if (clientId && redirectUri) {
    const params: AuthUrlParams = {
      response_type: "code",
      client_id: clientId,
      scope,
      code_challenge_method: "S256",
      code_challenge: codeChallenge,
      redirect_uri: redirectUri,
    };
    // authUrl.search = new URLSearchParams(params).toString();
    authUrl.search = new URLSearchParams(Object.entries(params)).toString();
    window.location.href = authUrl.toString(); // spotify 로그인 주소를 엶.
  }
};
