import { TComment, TPost } from "../../../types";

export type PostsState = {
  posts: TPost[]
}

export enum PostsActionsEnum {
  ADD_POST = "ADD_POST",
  DELETE_POST = "DELETE_POST",
  ADD_COMMENT = "ADD_COMMENT"
}

export type addPostAction = {
  type: PostsActionsEnum.ADD_POST;
  payload: TPost
}

export type deletePostAction = {
  type: PostsActionsEnum.DELETE_POST;
  payload: TPost
}

export type addCommentAction = {
  type: PostsActionsEnum.ADD_COMMENT;
  payload: { post: TPost, comment: TComment }
}

export type PostsAction = addPostAction | deletePostAction | addCommentAction