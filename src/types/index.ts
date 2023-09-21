

export type TPost = {
  id: string
  postText: string
  comments: TComment[]
}

export type TComment = {
  id: string
  commentText: string
  color: string
}