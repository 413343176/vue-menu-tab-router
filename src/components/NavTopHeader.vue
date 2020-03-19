<template>
  <div>
    <el-dropdown @command="handleCommand">
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="(dropdownItem, index) in dropdownItems"
          :command="dropdownItem.command"
          :key="index"
        >
          {{ dropdownItem.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>王小虎</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownItems: [
        {
          command: 'show',
          name: '查看'
        },
        {
          command: 'add',
          name: '新增'
        },
        {
          command: 'exit',
          name: '退出'
        }
      ]
    }
  },
  methods: {
    handleCommand(command) {
      if ('exit' === command) {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style></style>
