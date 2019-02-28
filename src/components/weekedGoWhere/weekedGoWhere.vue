<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="(item) in weekedGoList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        weekedGoList:[
          {
            id:'0001',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
            desc:'北京欢乐谷',
            title:'亚洲唯一飞行式过山车等你来挑战'
          },
          {
            id:'0002',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
            desc:'北京欢乐谷',
            title:'亚洲唯一飞行式过山车等你来挑战'
          },
          {
            id:'0003',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
            desc:'北京欢乐谷',
            title:'亚洲唯一飞行式过山车等你来挑战'
          },
          {
            id:'0004',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
            desc:'北京欢乐谷',
            title:'亚洲唯一飞行式过山车等你来挑战'
          },
          {
            id:'0005',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
            desc:'北京欢乐谷',
            title:'亚洲唯一飞行式过山车等你来挑战'
          },
          {
            id:'0006',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
            desc:'北京欢乐谷',
            title:'亚洲唯一飞行式过山车等你来挑战'
          },
          {
            id:'0007',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
            desc:'北京欢乐谷',
            title:'亚洲唯一飞行式过山车等你来挑战'
          },
          {
            id:'0008',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
            desc:'北京欢乐谷',
            title:'亚洲唯一飞行式过山车等你来挑战'
          },
          {
            id:'0009',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
            desc:'北京欢乐谷',
            title:'亚洲唯一飞行式过山车等你来挑战'
          },
          {
            id:'0010',
            imgUrl:'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
            desc:'北京欢乐谷',
            title:'亚洲唯一飞行式过山车等你来挑战'
          }
        ]
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    border-bottom :.01rem solid #ccc
    margin-top :.1rem
    .item-img-wrapper
      overflow: hidden
      height: 0
      padding-bottom: 37.09%
      .item-img
        width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
