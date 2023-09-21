import { TPost } from "../../../types";

export type ActivePostState = {
  post: TPost | null
}

export enum ActivePostActionsEnum {
  setActivePost = "SET_ACTIVE_POST"
}

export type setActivePostAction = {
  type: ActivePostActionsEnum.setActivePost
  payload: TPost
}

export type ActivePostAction = setActivePostAction
