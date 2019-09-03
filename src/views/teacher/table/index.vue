<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="编号" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.teacherNumber }}
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="性别" width="90" align="center">
        <template slot-scope="scope">
          {{ scope.row.gender == 1 ? '男':'女' }}
        </template>
      </el-table-column>
      <el-table-column label="专业" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.major }}
        </template>
      </el-table-column>
      <el-table-column label="手机号" >
        <template slot-scope="scope">
          {{ scope.row.phone }}
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="editClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {request} from '@/network/request'

export default {
  filters: {
    statusFilter(gender) {
      console.log(gender)
      const statusMap = {
        1: '男',
        0: '女'
      }
      return statusMap[gender]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      request({
        url: '/core/teacher/page/0/10'
      }).then(response => {
        this.list = response.data.rows
        this.listLoading = false
      }).catch(err => {
        console.log(err)
      })
    },
    handleClick(row) {
      console.log(row)
    },
    editClick(row) {
      console.log(row)
      this.$router.push({path: '/teacher/edit', query: row})
    }
  }
}
</script>
