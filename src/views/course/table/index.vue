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
          {{ scope.$index + 1}}
        </template>
      </el-table-column>
      <el-table-column label="课程编号" width="180" align="center">
        <template slot-scope="scope">
          {{ scope.row.courseNumber }}
        </template>
      </el-table-column>
      <el-table-column label="课程名称" >
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <!--<el-table-column label="所属专业" >-->
        <!--<template slot-scope="scope">-->
          <!--<span>{{ scope.row.major }}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <el-table-column label="授课教师" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.tid }}
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
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
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
        url: 'core/course/page/0/10'
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
      this.$router.push({path: '/course/edit', query: row})
    }
  }
}
</script>
