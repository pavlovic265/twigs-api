import express from "express";

import addUrl from "components/urls/addUrl/addUrl.controller";
import removeUrl from "components/urls/removeUrl/removeUrl.controller";
import updateUrl from "components/urls/updateUrl/updateUrl.controller";
import urlTitles from "components/urls/urlTitles/urlTitles.controller";

const urlRouter = express.Router();

urlRouter.post("/", ...addUrl);
urlRouter.delete("/:id", ...removeUrl);
urlRouter.put("/", ...updateUrl);
urlRouter.get("/titles/:href", ...urlTitles);

export default urlRouter;
