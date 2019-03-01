import {CHOOSECITY} from './action-types'

export default {
  // showCity({commit}){
  //   commit('SHOWCITY')
  // }
  chooseCity({commit},{city}){
    commit('CHOOSECITY',{city})
  }

}
