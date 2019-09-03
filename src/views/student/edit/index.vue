<template>
  <div class="app-container">
    <div style="margin: 10px; color:blue"><span><i class="el-icon-edit"></i>Edit Student Information</span></div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Student name">
        <el-input v-model="form.name"
                  placeholder="请输入学生姓名"
                  clearable/>
      </el-form-item>
      <el-form-item label="Student Gender">
        <el-radio-group v-model="form.gender">
          <el-radio label="1">male</el-radio>
          <el-radio label="0 ">female</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Student phone">
        <el-input
          placeholder="请输入11位手机号码"
          v-model="form.phone"
          clearable>
        </el-input>
      </el-form-item>
      <el-form-item label="Student grade">
        <el-input
          placeholder="请输入学生的年级，4位数字例如：1709"
          v-model="form.grade"
          clearable>
        </el-input>
      </el-form-item>
      <el-form-item label="Student major">
        <el-input
          placeholder="请输入学生的专业"
          v-model="form.major"
          clearable>
        </el-input>
      </el-form-item>
      <el-form-item label="Student ID">
        <el-input
          placeholder="请输入学生的身份证号码"
          v-model="form.idNumber"
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
        gender: '',
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
      this.$router.push({ path: this.redirect || '/student/table' })
    },
    fill() {
      this.form.name = this.$route.query.name
      this.form.gender = this.$route.query.gender
      this.form.phone = this.$route.query.phone
      this.form.grade = this.$route.query.grade
      this.form.major = this.$route.query.major
      this.form.idNumber = this.$route.query.idNumber
      this.form.desc = this.$route.query.desc
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
