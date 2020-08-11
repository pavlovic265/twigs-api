import express from "express";

import userInfo from "components/authentiaction/userInfo/userInfo.controller";
import githubAccessToken from "components/authentiaction/githubAccessToken/githubAccessToken.controller";
import githubAuthorization from "components/authentiaction/githubAuthorization/githubAuthorization.controller";
import googleAccessToken from "components/authentiaction/googleAccessToken/googleAccessToken.controller";
import googleAuthorization from "components/authentiaction/googleAuthorization/googleAuthorization.controller";
import logout from "components/authentiaction/logout/logout.controller";

const authorizationRouter = express.Router();

authorizationRouter.get("/github/user/callback", ...githubAccessToken);
authorizationRouter.get("/github", ...githubAuthorization);

authorizationRouter.get("/google/user/callback", ...googleAccessToken);
authorizationRouter.get("/google", ...googleAuthorization);

authorizationRouter.get("/user/me", ...userInfo);
authorizationRouter.get("/logout", ...logout);

export default authorizationRouter;
