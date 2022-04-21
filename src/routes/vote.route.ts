import { Router } from 'express'
import * as voteCtrl from '../controllers/vote.controller'
const router = Router()

router.get('/:id', voteCtrl.getVotesByImage)
router.put('/', voteCtrl.addVote)

export = router
