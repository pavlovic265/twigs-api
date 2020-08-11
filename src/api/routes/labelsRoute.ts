import express from "express";
import addLabel from "components/labels/addLabel/addLabel.controller";
import removeLabel from "components/labels/removeLabel/removeLabel.controller";
import updateLabel from "components/labels/updateLabel/updateLabel.controller";

const labelsRouter = express.Router();

labelsRouter.post("/", ...addLabel);
labelsRouter.delete("/:id", ...removeLabel);
labelsRouter.put("/", ...updateLabel);

export default labelsRouter;
