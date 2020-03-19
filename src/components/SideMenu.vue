<template>
  <div>
    <div>
      <el-switch
        v-model="collapse"
        active-color="#13ce66"
        inactive-color="#D3D3D3"
      >
      </el-switch>
    </div>
    <el-menu :collapse="!collapse" router default-active="page1">
      <el-submenu v-for="(item, index) in menuItems" :key="index">
        <!-- item{index, title, icon, children} -->
        <template slot="title"
          ><i :class="item.icon"></i
          ><span slot="title">{{ item.title }}</span></template
        >
        <el-menu-item
          v-for="(childItem, index1) in item.children"
          :index="childItem.index"
          :key="index1"
          >{{ childItem.title }}</el-menu-item
        >
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapse: true,
      //menuItems item{index, title, icon, children}
      menuItems: [
        {
          index: '1',
          title: '导航一',
          icon: 'el-icon-message',
          children: [
            {
              index: 'page1',
              title: 'page1'
            },
            {
              index: 'page2',
              title: 'page2'
            },
            {
              index: 'page3',
              title: 'page3'
            },
            {
              index: '1-4',
              title: '选项4',
              children: [
                {
                  index: 'page4',
                  title: 'page4'
                }
              ]
            }
          ]
        },
        {
          index: '2',
          title: '导航二',
          icon: 'el-icon-menu',
          children: []
        }
      ]
    }
  }
}
</script>

<style scoped>
.el-menu:not(.el-menu--collapse) {
  width: 200px;
}
</style>
