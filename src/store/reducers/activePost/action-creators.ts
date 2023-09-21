import { TPost } from "../../../types";
import { ActivePostActionsEnum, setActivePostAction } from "./types";

export const ActivePostActionCreators = {
  setActivePost: (post: TPost): setActivePostAction => ({ type: ActivePostActionsEnum.setActivePost, payload: post }),
}