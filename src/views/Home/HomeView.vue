<template>
  <div class="over">
    <a-card class="search-area">
      <a-form ref="searchFormRef" :model="deviceParams" layout="inline" @finish="onSearch">
        <a-form-item label="设备编号" prop="deviceId">
          <a-input
            v-model:value="deviceParams.deviceId"
            :options="deviceTypeList"
            show-search
            allowClear
            optionFilterProp="label"
            style="width: 200px"
          ></a-input>
        </a-form-item>
        <a-form-item label="所属类型" prop="belongType">
          <a-select
            v-model:value="deviceParams.belongType"
            :options="deviceTypeList"
            show-search
            allowClear
            optionFilterProp="label"
            style="width: 200px"
          ></a-select>
        </a-form-item>
        <a-form-item label="所属机构" prop="belongId" v-if="deviceParams.belongType == '1'">
          <a-tree-select
            v-model:value="deviceParams.belongId"
            tree-node-filter-prop="label"
            show-search
            allow-clear
            :treeData="orgTree"
            :field-names="{
              children: 'children',
              label: 'name',
              value: 'id'
            }"
            style="width: 200px"
          >
          </a-tree-select>
        </a-form-item>
        <a-form-item label="所属人" prop="belongId" v-if="deviceParams.belongType == '0'">
          <a-select
            v-model:value="deviceParams.belongId"
            :options="userList"
            show-search
            allowClear
            optionFilterProp="label"
            style="width: 200px"
          ></a-select>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit">搜索</a-button>
          <a-button style="margin: 0 8px" @click="onClear"> 重置 </a-button>
        </a-form-item>
      </a-form>
    </a-card>
    <a-card>
      <div class="device-container" v-loading="loading">
        <a-card class="device-item" v-for="item in tableData" :key="item.id">
          <template #title>
            <div class="device-title">
              设备编号： {{ item.deviceId }}
              <span
                class="device-circle"
                :class="item.mqttInfo.status ? 'online' : ''"
                :title="item.mqttInfo.status ? '在线' : '离线'"
              >
              </span>
            </div>
          </template>
          <template #cover>
            <div style="height: 215px">
              <a-form
                style="padding: 10px"
                v-if="currentDevId == item.deviceId"
                :labelCol="{ span: 8 }"
              >
                <a-form-item label="总开关">
                  <a-switch></a-switch>
                </a-form-item>
                <a-form-item label="等离子开关">
                  <a-switch></a-switch>
                </a-form-item>
                <a-form-item label="负离子开关">
                  <a-switch></a-switch>
                </a-form-item>
                <a-form-item label="风扇挡位">
                  <a-radio-group button-style="solid">
                    <a-radio-button value="a">低</a-radio-button>
                    <a-radio-button value="b">中</a-radio-button>
                    <a-radio-button value="c">高</a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </a-form>

              <a-descriptions title="" size="small" :column="2" style="padding: 10px" v-else>
                <a-descriptions-item label="所属人/机构" :span="2">
                  {{ item.belongType == '1' ? item?.orgInfo?.name : item?.userInfo?.username }}
                </a-descriptions-item>
                <a-descriptions-item label="是否过保">
                  <a-tag color="#87d068" v-if="item.isExpired == '0'">未过保</a-tag>
                  <a-tag color="#f50" v-else>已过保</a-tag>
                </a-descriptions-item>

                <a-descriptions-item label="甲醛浓度"
                  >{{ item.mqttInfo.fa || 0.1 }}
                </a-descriptions-item>
                <a-descriptions-item label="温度">{{
                  item.mqttInfo.temp || 20
                }}</a-descriptions-item>
                <a-descriptions-item label="湿度">{{ item.mqttInfo.rh || 20 }}</a-descriptions-item>
                <a-descriptions-item label="PM2.5">{{ item.mqttInfo.pm || 5 }}</a-descriptions-item>
                <a-descriptions-item label="空气质量">{{
                  item.mqttInfo.air || '良'
                }}</a-descriptions-item>
                <a-descriptions-item label="保修日期" :span="2">{{
                  item.expireDate
                }}</a-descriptions-item>
                <a-descriptions-item label="设备位置" :span="2"> </a-descriptions-item>
              </a-descriptions>
            </div>
          </template>

          <!-- <a-card-meta title="Card title" description="This is the description">
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
            </template>
          </a-card-meta> -->
          <template #actions>
            <PlayCircleOutlined title="启动" @click="onClickRun(item)" />
            <PauseCircleOutlined title="停止" @click="onClickStop(item)" />
            <UnorderedListOutlined title="更多" @click="onClickMore(item)" />
          </template>
        </a-card>
      </div>
      <a-pagination
        v-model:current="deviceParams.pageNumber"
        :total="total"
        show-less-items
        class="pag"
      />
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect, reactive, onMounted } from 'vue'
import common from '@/api/common'
import type { DeviceInfo, PageParams, SystemOrgTree } from '@/model'
import type { DictItem } from '@/api/common'
import type { FormInstance } from 'ant-design-vue'
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  UnorderedListOutlined
} from '@ant-design/icons-vue'
const deviceParams = reactive<PageParams>({
  keyword: '',
  pageNumber: 1,
  pageSize: 10,
  type: ''
})
const deviceTypeList = ref<DictItem[]>([])
const deviceTypeMap = ref<Record<string, string>>({})
const orgTree = ref<SystemOrgTree[]>([])
const userList = ref<DictItem[]>([])
const searchFormRef = ref<FormInstance>()
const onClear = () => {
  searchFormRef.value?.resetFields()
  getList()
}
const total = ref(0)
const onSearch = () => {
  deviceParams.pageNumber = 1
  deviceParams.pageSize = 10
  getList()
}
const tableData = ref<DeviceInfo[]>([])
const loading = ref(true)
const getList = () => {
  loading.value = true
  common.getOverview(deviceParams).then((res) => {
    const { code, data } = res
    if (code == 200) {
      tableData.value = data.data
      total.value = data.total
    }
    loading.value = false
  })
}
const onClickRun = (item: DeviceInfo) => {}
const onClickStop = (item: DeviceInfo) => {}
const currentDevId = ref('')
const onClickMore = (item: DeviceInfo) => {
  if (currentDevId.value == item.deviceId) {
    currentDevId.value = ''
    return
  }
  currentDevId.value = item.deviceId
}
onMounted(() => {
  getList()
  common.getOrgTree().then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      orgTree.value = data
    }
  })
  common.getAllUser().then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      userList.value = data
    }
  })
  common.getDict(['deviceBelongType']).then((res) => {
    const { code, data, msg } = res
    if (code == 200) {
      deviceTypeList.value = data['deviceBelongType']
      deviceTypeMap.value = deviceTypeList.value.reduce(
        (p, c) => {
          p[c.value] = c.label
          return p
        },
        {} as Record<string, string>
      )
    }
  })
})
</script>

<style scoped lang="scss">
.over {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .search-area {
    margin-bottom: $gap;
  }
  .device-container {
    display: grid;
    gap: $gap;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: 650px;
    .device-item {
      .device-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .device-circle {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #cf1322;
        &.online {
          background-color: #389e0d;
        }
      }
    }
  }
  .pag {
    display: flex;
    margin-top: $gap;
    justify-content: flex-end;
  }
}
</style>
