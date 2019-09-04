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
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="Student name" width="250" align="center">
        <template slot-scope="scope">
          {{ scope.row.sid }}
        </template>
      </el-table-column>
      <el-table-column label="Course name" width="200" align="center">
        <template slot-scope="scope">
          {{ scope.row.cid }}
        </template>
      </el-table-column>
      <!--<el-table-column label="Course major" >-->
        <!--<template slot-scope="scope">-->
          <!--<span>{{ scope.row.major }}</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <el-table-column label="Exam results" width="200" align="center">
        <template slot-scope="scope">
          {{ scope.row.score }}
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
        url: 'core/score/page/0/10'
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
      this.$router.push({path: '/score/edit', query: row})
    }
  }
}
</script>
