import * as types from './mutation-types'

export const selectClassId=function ({commit,state},{classId}){
  commit(types.SET_CLASSID,classId)
  commit(types.SET_CHARGETYPE,0)
  commit(types.SET_END,0)
  commit(types.SET_GENDER,0)
  commit(types.SET_PAGE,1)
}


