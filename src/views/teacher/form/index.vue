<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Teacher name">
        <el-input v-model="form.name"
                  placeholder="请输入教师姓名"
                  clearable/>
      </el-form-item>
      <el-form-item label="Teacher Gender">
        <el-radio-group v-model="form.gender">
          <el-radio label="1">male</el-radio>
          <el-radio label="0 ">female</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Teacher phone">
        <el-input
          placeholder="请输入11位手机号码"
          v-model="form.phone"
          clearable>
        </el-input>
      </el-form-item>
      <el-form-item label="Teacher major">
        <el-input
          placeholder="请输入教师的专业"
          v-model="form.major"
          clearable>
        </el-input>
      </el-form-item>
      <el-form-item label="Remarks">
        <el-input v-model="form.desc" type="textarea" placeholder="备注" />
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
        gender: '',
        phone: '',
        grade: '',
        major: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      request({
        url: '/core/teacher/add',
        method: 'post',
        data: this.form
      }).then(res => {
        this.$router.push({ path: this.redirect || '/teacher/table' })
      }).then(err => {
        console.log(err)
      })
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>
