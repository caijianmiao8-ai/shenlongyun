<template>
  <el-config-provider :locale="zhCn">
    <div style="padding: 20px 20px 100px 20px">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" @keyup.enter="onSubmit">
        <el-form-item label="手机号">
          <el-input v-model="formInline.phone" placeholder="请输入手机号" clearable />
        </el-form-item>
        <el-form-item label="订单号">
          <el-input v-model="formInline.order_sn" placeholder="请输入订单号" clearable />
        </el-form-item>
        <el-form-item label="兑换码">
          <el-input v-model="formInline.redeem_codes" type="textarea" placeholder="请输入兑换码" clearable />
        </el-form-item>
        <el-form-item label="兑换时间">
          <el-date-picker
            v-model="date"
            type="datetimerange"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            format="YYYY-MM-DD HH:mm:ss"
            value-format="YYYY-MM-DD HH:mm:ss"
            date-format="YYYY/MM/DD ddd"
            time-format="A hh:mm:ss"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <p style="color: #ff5b5a; margin-bottom: 20px">* 多个兑换码换行输入</p>
      <el-table :data="tableData" stripe style="width: 100%; margin-bottom: 20px">
        <!-- <el-table-column prop="title" label="活动名称" /> -->
        <el-table-column prop="code" label="兑换码" />
        <el-table-column prop="status" label="是否使用">
          <template #default="scope">
            {{ !scope.row.is_used ? (scope.row.status === 1 ? '未使用' : '禁用') : scope.row.is_used === 1 ? '已使用' : '禁用' }}
          </template>
        </el-table-column>
        <el-table-column prop="phone" label="兑换用户" />
        <el-table-column prop="order_sn" label="订单号" />
        <el-table-column prop="redeem_time" label="兑换时间" />
      </el-table>
      <el-pagination
        v-model:current-page="formInline.page"
        v-model:page-size="formInline.size"
        :page-sizes="[100, 200, 300, 400]"
        :background="false"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </el-config-provider>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { commonMethodPOST } from '@/api/commonApi';

const formInline = reactive({
  phone: '',
  order_sn: '',
  redeem_codes: '',
  start_time: '',
  end_time: '',
  page: 1,
  size: 20,
});
const total = ref(0);
const date = ref([]);

const onSubmit = () => {
  console.log('submit!');
  console.log(date.value);
  getList();
};

const handleSizeChange = (size: number) => {
  formInline.size = size;
  getList();
};
const handleCurrentChange = (page: number) => {
  formInline.page = page;
  getList();
};
const handleCodeValue = (value: string) => {
  let arr = value.split(/\r\n|\r|\n/g);
  arr = arr.filter((item) => item.length);
  return arr.join(',');
};
const tableData = ref([]);

const getList = async () => {
  // 套餐列表
  if (date.value && date.value.length) {
    formInline.start_time = date.value[0];
    formInline.end_time = date.value[1];
  } else {
    formInline.start_time = '';
    formInline.end_time = '';
  }
  formInline.redeem_codes = handleCodeValue(formInline.redeem_codes);
  let res = await commonMethodPOST('/dlyp/v1/activity/redeem_query', formInline);
  tableData.value = res.data.data;
  total.value = res.data.total;
};
</script>
