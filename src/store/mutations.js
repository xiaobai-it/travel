import {CHOOSECITY} from './action-types'

export default {
  // [SHOWCITY](state){
  //   state.city
  // }
  [CHOOSECITY](state,{city}){
    // console.log(state.city);
    state.city = city
  }


}
