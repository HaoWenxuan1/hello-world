<template>
  <div class="hello" id="gyroContain">
    <h1>Name: HaoWenxuan</h1>
    <h1>date: 2022/1/10</h1>
  </div>
</template>

<script>
import { getHomeCasual } from '../api/index'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted () {
    this.getHomeData()
  },
  methods: {
      async getHomeData (){
       const result = await getHomeCasual();
       console.log(result);
   }
    }
  }
</script>
<style scoped>
@media screen and (orientation: portrait) {
    html{
        width : 100vmin;
        height : 100vmax;
    }
    body{
        width : 100vmin;
        height : 100vmax;
    }
    #gyroContain{
        width : 100vmax;
        height : 100vmin;
        transform-origin: top left;
        transform: rotate(90deg) translate(0,-100vmin);
    }
  }
@media screen and (orientation: landscape) {
    html{
        width : 100vmax;
        height : 100vmin;
    }
    body{
        width : 100vmax;
        height : 100vmin;
    }
    #gyroContain{
        width : 100vmax;
        height : 100vmin;
    }
}
</style>
