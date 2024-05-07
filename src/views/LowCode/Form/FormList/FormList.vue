<template>
  <div class="form">
    <a-card class="search-area">
      <a-form ref="searchFormRef" :model="paramsForm" @finish="getList">
        <a-row :gutter="24">
          <a-col :span="4">
            <a-form-item label="字典描述" name="keyword">
              <a-input v-model:value="paramsForm.keyword"> </a-input>
            </a-form-item>
          </a-col>
          <a-col :span="4" style="text-align: right">
            <a-button type="primary" html-type="submit">搜索</a-button>
            <a-button style="margin: 0 8px" @click="onClear"> 重置 </a-button>
          </a-col>
        </a-row>
      </a-form>
    </a-card>
    <a-card>
      <div class="tools">
        <a-button type="primary" @click="onOpenAdd">新增</a-button>
      </div>
      <div class="contain">
        <div class="item" v-for="item in tableData" :key="item.id">
          <a-image :src="item.img" alt="" />
          <div class="bottom">
            <div class="title">{{ item.name }}</div>
            <div class="buttons">
              <a-button :icon="h(EditOutlined)" shape="circle" type="link" ghost> </a-button>
              <a-button :icon="h(DeleteOutlined)" shape="circle" type="link" danger ghost>
              </a-button>
            </div>
          </div>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, h } from 'vue'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons-vue'
import api from '../api/form'
import type { FormInstance } from 'ant-design-vue'
import type { LCFormCfg, PageParams } from '@/model'
const paramsForm = reactive<PageParams>({
  keyword: '',
  pageNumber: 1,
  pageSize: 10
})
const tableData = ref<LCFormCfg[]>([])
const total = ref(0)
const loading = ref(false)
const searchFormRef = ref<FormInstance>()
const onClear = () => {
  searchFormRef.value?.resetFields()
  getList()
}
const getList = () => {
  loading.value = true
  api.getList(paramsForm).then((res) => {
    const { code, data } = res
    if (code == 200) {
      tableData.value = data.data
      total.value = data.total
    }
    loading.value = false
  })
}
const onOpenAdd = () => {}
onMounted(() => {
  getList()
})
</script>
<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .search-area {
    margin-bottom: 20px;
  }
  .tools {
    margin-bottom: 5px;
  }
  .contain {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    .item {
      position: relative;
      width: 100%;
      height: 250px;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
      background-color: #e0edff;

      img {
        width: 100%;
        height: calc(100% - 30px);
      }
      .bottom {
        display: flex;
        .title {
          font-weight: 500;
          font-size: 16px;
          text-align: center;
          flex: 1;
        }
        .buttons {
        }
      }
    }
  }
}
</style>
