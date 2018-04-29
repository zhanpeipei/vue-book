import * as types from './mutation-types'

const mutations = {
  [types.SET_BOOKID](state, bookId) {
    state.bookId = bookId
  },
  [types.SET_CLASSID](state, classId) {
    state.classId = classId;
  },
  [types.SET_GENDER](state, gender) {
    state.gender = gender
  },
  [types.SET_END](state, end) {
    state.end = end
  },
  [types.SET_CHARGETYPE](state, chargeType) {
    state.chargeType = chargeType;
  },
  [types.SET_PAGE](state, page) {
    state.page = page;
  }
}
export default mutations;
