<template>
  <el-dialog
    ref="elDialogRef"
    :style="{minWidth:width}"
    class="me-dialog"
  >
    <template
      v-for="(item, key) in $slots" 
      :key="key" 
      #[key]
    >
      <component :is="item as Slot" />
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { ElDialog } from 'element-plus';
import {  Slot, defineComponent } from 'vue';
export default defineComponent({
  name:'MeDialog',
  setup(){
    return {width:'300px'}
  }
})
</script>