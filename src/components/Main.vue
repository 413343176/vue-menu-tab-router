<template>
  <el-container
    style="height: -webkit-fill-available;display:-webkit-box;border: 1px solid #eee"
  >
    <el-header style="text-align: right; font-size: 12px;height:50px">
      <nav-top-header></nav-top-header>
    </el-header>
    <el-container>
      <el-aside width="auto" style="background-color: rgb(238, 241, 246)">
        <side-menu></side-menu>
      </el-aside>
      <el-container>
        <el-main>
          <h1>{{ $route.name }}</h1>
          <el-tabs
            v-model="currentTab"
            type="card"
            editable
            @edit="handleTabEdit"
            @tab-click="handleTabClick"
          >
            <el-tab-pane
              :key="item.name"
              v-for="item in allTabs"
              :label="item.title"
              :name="item.name"
            >
              <router-view />
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import NavTopHeader from './NavTopHeader'
import SideMenu from './SideMenu'
export default {
  components: {
    NavTopHeader,
    SideMenu
  },
  data() {
    return {
      currentTab: '',
      allTabs: []
    }
  },
  watch: {
    $route(to, from) {
      console.log('欢迎从' + from.path + '来到' + to.path)
      let currentPath = to.path
      let currentName = to.name
      //如果已存在，则切换。若未存在，则添加
      this.currentTab = currentPath
      if (this.allTabs.filter(item => item.name === currentPath).length !== 0) {
        return
      }
      this.allTabs.push({ name: currentPath, title: currentName })
    },
    allTabs(val) {
      // console.log(val);
    }
  },
  mounted() {
    console.log('mounted')
    this.allTabs = []
    this.allTabs.push({ name: '/home', title: 'Home' })
    this.currentTab = '/home'
  },
  methods: {
    handleTabEdit(targetName, action) {
      console.log(targetName, action)
      if (action === 'remove') {
        if (targetName === this.currentTab) {
          //切换到下一个
          this.allTabs.forEach((item, index) => {
            if (item.name === this.currentTab) {
              //确定是下一个，还是上一个
              if (index === this.allTabs.length - 1) {
                if (index !== 0) {
                  this.$router.push(this.allTabs[index - 1].name)
                } else {
                  console.log('last one')
                }
              } else {
                this.$router.push(this.allTabs[index + 1].name)
              }
            }
          })
        }
        //缩减
        let tabs = this.allTabs.filter(item => item.name !== targetName)
        this.allTabs = tabs
      }
    },
    handleTabClick(tab) {
      this.currentTab = tab.name
      this.$router.push(this.currentTab)
    }
  }
}
</script>
<style scoped>
.el-header {
  background-image: url('../assets/logo.png');
  background-repeat: no-repeat;
  background-color: #b3c0d1;
  color: #333;
  line-height: 50px;
}

.el-footer {
  background-color: gray;
}

.el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #f0ffff;
}
.el-table tr {
  background: #ffe4e1;
}
</style>
