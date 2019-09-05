<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Course name">
        <el-input v-model="form.name"
                  placeholder="请输入课程名称"
                  clearable/>
      </el-form-item>
      <el-form-item label="TeacherNumber">
        <el-input
          placeholder="请输入授课教师编号"
          v-model="form.tid"
          clearable>
        </el-input>
      </el-form-item>
      <el-form-item label="Remarks">
        <el-input v-model="form.desc" type="textarea" placeholder="备注"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {request} from '@/network/request'
export default {
  data() {
    return {
      form: {
        name: '',
        tid: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      request({
        url: '/core/course/add',
        method: 'post',
        data: this.form
      }).then(res => {
        this.$router.push({ path: this.redirect || '/course/table' })
      }).then(err => {
        console.log(err)
      })
    },
    onCancel() {
      this.$router.push({ path: this.redirect || '/course/table' })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>
