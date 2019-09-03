<template>
  <div class="app-container">
    <div style="margin: 10px; color:blue"><span><i class="el-icon-edit"></i>Edit Teacher Information</span></div>
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
        major: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$router.push({ path: this.redirect || '/teacher/table' })
    },
    fill() {
      this.form.name = this.$route.query.name
      this.form.gender = this.$route.query.gender
      this.form.phone = this.$route.query.phone
      this.form.major = this.$route.query.major
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
