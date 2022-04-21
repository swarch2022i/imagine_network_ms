import { Schema, model } from 'mongoose'

interface Vote {
  imageID: string
  votes: number
}

const VoteSchema = new Schema<Vote>({
  imageID: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    required: true,
  },
})

export = model('Vote', VoteSchema)
