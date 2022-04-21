import { validationResult } from 'express-validator'
import { response, request } from 'express'

export const validateFields = (req = request, res = response, next: any) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    })
  }
  next()
}
