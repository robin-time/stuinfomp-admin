<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Course name">
        <el-input v-model="form.name"
                  placeholder="请输入课程名称"
                  clearable/>
      </el-form-item>
      <el-form-item label="Course major">
        <el-input
          placeholder="请输入课程所属专业"
          v-model="form.major"
          clearable>
        </el-input>
      </el-form-item>
      <el-form-item label="TeacherNumber">
        <el-input
          placeholder="请输入授课教师编号"
          v-model="form.Number"
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
export default {
  data() {
    return {
      form: {
        name: '',
        sex: '',
        phone: '',
        grade: '',
        major: '',
        idNumber: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
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
