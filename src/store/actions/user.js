import { SAVE, UPDATE_USERINFO } from '../types/user'
import { createAction } from 'redux-actions'

export const UpdateUserAction = createAction(SAVE, (user) => {
  if (user) {
    return {
      key: 'user',
      value: user
    }
  }
})

export const UpdateUserInfoAction = createAction(UPDATE_USERINFO, (userInfo) => {
  if (userInfo) {
    return {
      key: 'userInfo',
      value: userInfo
    }
  }
})
