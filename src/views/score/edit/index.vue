<template>
  <div class="app-container">
    <div style="margin: 10px; color:blue"><span><i class="el-icon-edit"></i>Edit Score Information</span></div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Student name">
        <el-input v-model="form.name"
                  placeholder="请输入学生姓名"
                  clearable/>
      </el-form-item>
      <el-form-item label="Course major">
        <el-input
          placeholder="请输入课程所属专业"
          v-model="form.major"
          clearable>
        </el-input>
      </el-form-item>
      <el-form-item label="Course name">
        <el-input v-model="form.cname"
                  placeholder="请输入课程名称"
                  clearable/>
      </el-form-item>
      <el-form-item label="Exam results">
        <el-input
          placeholder="考试成绩"
          v-model="form.score"
          clearable>
        </el-input>
      </el-form-item>
      <el-form-item label="Remarks">
        <el-input v-model="form.desc" type="textarea" placeholder="备注"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Update</el-button>
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
        cname: '',
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
    },
    fill() {
      console.log(this.$route.query.name)
      this.form.name = this.$route.query.name
      this.form.phone = this.$route.query.phone
    }
  },
  created() {
    this.fill()
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>
