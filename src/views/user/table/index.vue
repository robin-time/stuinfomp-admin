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
      <el-table-column align="center" label="Order" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1}}
        </template>
      </el-table-column>
      <el-table-column label="Username"  width="210" align="center">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column label="Phone" width="310" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Email">
        <template slot-scope="scope">
          {{ scope.row.email }}
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="deleteClick(scope.row.id)" type="text" size="small">禁用</el-button>
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
        url: '/user/page/0/10'
      }).then(response => {
        this.list = response.data.rows
        this.listLoading = false
      }).catch(err => {
        console.log(err)
      })
    },
    deleteClick(userId) {
      console.log(userId)
      request({
        url: '/user'
        // params: userId
      }).then(res => {
        this.fetchData()
        this.listLoading = false
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
