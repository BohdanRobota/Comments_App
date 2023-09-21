import { TComment, TPost } from "../../../types";
import { PostsAction, PostsActionsEnum, PostsState } from "./types";


const initialState: PostsState = {
  posts: []
}

export default function postsReducer(state = initialState, action: PostsAction): PostsState {
  switch (action.type) {
    case PostsActionsEnum.ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case PostsActionsEnum.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => {
          return post.id !== action.payload.id;
        }),
      };
    case PostsActionsEnum.ADD_COMMENT:
      return {
        ...state,
        posts: addComment(state.posts, action.payload.post.id, action.payload.comment)
      }
    default:
      return state;
  }
}

const addComment = (posts: TPost[], postId: string, comment: TComment) => {
  posts.map((post) => {
    if (post.id === postId) {
      post.comments = [...post.comments, comment];
    }
  })
  return posts;
}