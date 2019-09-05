<template>
  <div class="app-container">
    <div style="margin: 10px; color:blue"><span><i class="el-icon-edit"></i>Edit Course Information</span></div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Course ID">
        <el-input v-model="form.courseNumber"
                  placeholder="课程编号"
                  clearable/>
      </el-form-item>
      <el-form-item label="Course name">
        <el-input v-model="form.name"
                  placeholder="课程名称"
                  clearable/>
      </el-form-item>
      <el-form-item label="TeacherNumber">
        <el-input
          placeholder="授课教师编号"
          v-model="form.tid"
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
        courseNumber: '',
        tid: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$router.push({ path: this.redirect || '/course/table' })
    },
    fill() {
      this.form.name = this.$route.query.name
      this.form.courseNumber = this.$route.query.courseNumber
      this.form.tid = this.$route.query.tid
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
