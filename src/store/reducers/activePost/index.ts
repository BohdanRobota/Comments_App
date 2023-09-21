import { ActivePostAction, ActivePostActionsEnum, ActivePostState } from "./types";


const initialState: ActivePostState = {
  post: null
}

export default function activePostReducer(state = initialState, action: ActivePostAction): ActivePostState {
  switch (action.type) {
    case ActivePostActionsEnum.setActivePost:
      return { ...state, post: action.payload };
    default:
      return state;
  }
}