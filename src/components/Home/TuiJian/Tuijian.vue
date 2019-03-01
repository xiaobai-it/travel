<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item" v-for="(item) in tuijianData" :key="item.id">
        <router-link class="item" :to="`/details/${item.id}`">
          <img class="item-img" :src="item.imgUrl" />
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:['tuijianData'],
    data() {
      return {
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    border-bottom :.01rem solid #ccc
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        color :#212121
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
