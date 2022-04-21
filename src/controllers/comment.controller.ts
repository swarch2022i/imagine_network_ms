import { response, request } from 'express'
import commentModel from '../models/comment.model'

export const getCommentsByImage = async (req = request, res = response) => {
  const comments = await commentModel.find({ imageID: req.query.imageID })
  res.json({
    ok: true,
    comments,
  })
}

export const createComment = async (req = request, res = response) => {
  try {
    const comment = new commentModel(req.body)
    await comment.save()
    res.json({
      ok: true,
      comment,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Error, please check the console',
    })
  }
}

export const deleteComment = async (req = request, res = response) => {
  const cid = req.params.id
  console.log(cid)
  try {
    const comment = await commentModel.findById(cid)
    if (!comment) {
      return res.status(404).json({
        ok: false,
        msg: 'the comment existnt',
      })
    }
    await commentModel.findByIdAndDelete(cid)
    res.status(200).json({
      ok: true,
      msg: 'comment delete success',
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Error, please check the console',
    })
  }
}

export const editComment = async (req = request, res = response) => {
  const cid = req.params.id
  const newMessage = req.query.newMessage
  try {
    const comment = await commentModel.findById(cid)
    if (!comment) {
      return res.status(404).json({
        ok: false,
        msg: 'the comment existnt',
      })
    }
    const { _id, imageID, ...field } = req.body
    field.message = newMessage
    const commentUpdated = await commentModel.findByIdAndUpdate(cid, field, {
      new: true,
    })
    res.json({
      ok: true,
      comment: commentUpdated,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Error, please check the console',
    })
  }
}
