import { Router } from 'express'
import { check } from 'express-validator'
import * as commentCtrl from '../controllers/comment.controller'
import { validateFields } from '../middlewares/validate-fields'
const router = Router()

router.get('/', commentCtrl.getCommentsByImage)
router.post(
  '/',
  [
    check('imageID', 'the imageID is mandatory').not().isEmpty(),
    check('message', 'the message is mandatory').not().isEmpty(),
    validateFields,
  ],
  commentCtrl.createComment,
)
router.delete('/:id', commentCtrl.deleteComment)
router.put('/:id', [validateFields], commentCtrl.editComment)

export = router
