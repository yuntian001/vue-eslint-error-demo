<template>
  <div>{{ show }}</div>
  <button @click="(event:Event) => {show = !show;setButton(event)}" />
</template>
<script setup lang="ts">
import {ref} from 'vue'
const show = ref(false);
const setButton = (event:Event)=>{
  (event.target as HTMLButtonElement).style.border='1px solid red';
}
</script>