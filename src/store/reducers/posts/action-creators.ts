import { TComment, TPost } from "../../../types";
import { PostsActionsEnum, addPostAction, deletePostAction } from "./types";

export const PostsActionCreators = {
  addPost: (post: TPost): addPostAction => ({ type: PostsActionsEnum.ADD_POST, payload: post }),
  deletePost: (post: TPost): deletePostAction => ({ type: PostsActionsEnum.DELETE_POST, payload: post }),
  addComment: (comment: TComment, post: TPost) => ({ type: PostsActionsEnum.ADD_COMMENT, payload: { comment, post } })
}