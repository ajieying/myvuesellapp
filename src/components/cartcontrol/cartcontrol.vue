<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count"  v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue'
  export default {
    props:{
      food:{
        type:Object
      }
    },
    created(){
      // console.log(this.food)
    },
    methods:{
      addCart(event){
        if(!this.food.count){
          Vue.set(this.food,'count',1)
        }else{
          this.food.count++;
        };
        this.$emit('cartadd',event.target);
      },
      decreaseCart(){
        if(this.food.count){
          this.food.count--;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size:0
    .cart-decrease,.cart-count,.cart-add
      display: inline-block
    .cart-decrease
      padding: 6px
      &.move-enter-active,&.move-leave-active
        transition:all .4s linear
      &.move-enter,&.move-leave-to
        transform translate3d(24px,0,0)
      &.move-enter-active .inner,&.move-leave-active .inner
          transition:all .4s linear
      &.move-enter .inner,&.move-leave-to .inner
        opacity:0
        transform translate3d(0,0,0) rotate(180deg)
      .inner
        display: inline-block
        line-height: 24px
        font-size:24px
        color:rgb(0,160,220)
        transition:all .4s linear
        //transform:rotate(0)

    .cart-add
       padding: 6px
       line-height: 24px
       font-size:24px
       color:rgb(0,160,220)
    .cart-count
      vertical-align:top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size:10px
      color:rbg(147,153,159)




</style>
