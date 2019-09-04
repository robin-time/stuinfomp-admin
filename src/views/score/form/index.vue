<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Student name">
        <el-input v-model="form.sid"
                  placeholder="请输入学生姓名"
                  clearable/>
      </el-form-item>
      <!--<el-form-item label="Course major">-->
        <!--<el-input-->
          <!--placeholder="请输入课程所属专业"-->
          <!--v-model="form.major"-->
          <!--clearable>-->
        <!--</el-input>-->
      <!--</el-form-item>-->
      <el-form-item label="Course name">
        <el-input v-model="form.cid"
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
        sid: '',
        score: '',
        cid: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      request({
        url: '/core/score/add',
        method: 'post',
        data: this.form
      }).then(res => {
        this.$router.push({ path: this.redirect || '/score/table' })
      }).then(err => {
        console.log(err)
      })
    },
    onCancel() {
      this.$router.push({ path: this.redirect || '/score/table' })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>
