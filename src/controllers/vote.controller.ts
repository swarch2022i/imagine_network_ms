import { response, request } from 'express'
import voteModel from '../models/vote.model'

export const getVotesByImage = async (req = request, res = response) => {
  console.log(req.params.id)
  const votes = await voteModel.find({ imageID: req.params.id })
  console.log(votes)
  res.json({
    ok: true,
    votes,
  })
}

export const addVote = async (req = request, res = response) => {
  const iid = req.body._id
  const vote = await voteModel.findById(iid)
  try {
    let voteAdd = vote?.votes
    let { option, imageID, ...field } = req.body

    if (voteAdd) {
      option === 'add'
        ? (field.votes = voteAdd + 1)
        : (field.votes = voteAdd - 1)
    }

    const voteUpdated = await voteModel.findByIdAndUpdate(iid, field, {
      new: true,
    })

    console.log(iid, field)
    res.json({
      ok: true,
      vote: voteUpdated,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Error, please check the console',
    })
  }
}
