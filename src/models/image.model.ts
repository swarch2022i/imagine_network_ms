import { Schema, model } from 'mongoose'

interface Image {
  imageID: string
  votes: number
}

const ImageSchema = new Schema<Image>({
  imageID: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    required: true,
  },
})

export = model('Image', ImageSchema)
