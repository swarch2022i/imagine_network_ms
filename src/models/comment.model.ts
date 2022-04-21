import { Schema, model } from 'mongoose'

interface Comment {
  imageID: string
  message: string
}

const CommentSchema = new Schema<Comment>({
  imageID: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
})

export = model('Comment', CommentSchema)
