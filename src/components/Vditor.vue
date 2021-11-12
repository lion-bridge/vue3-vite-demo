<script setup lang="ts">
import { emit } from "process";
import Vditor from "vditor";
import { onMounted, ref } from "vue";

const props = defineProps<{
  title: string;
}>();
const emits = defineEmits<{
  (e: 'get-html', values?: string): void,
  (event: 'test', ...params: string[]): void
}>();
const vditor = ref<Vditor>();
defineExpose({
  instance: vditor.value
});
const initVditor = () => {
  const options: any = {
    width: "100%",
    height: "0",
    tab: "\t",
    counter: "999999",
    typewriterMode: true,
    mode: "sv",
    preview: {
      delay: 100,
      show: true,
    },
    outline: true,
    upload: {
      max: 5 * 1024 * 1024,
      // linkToImgUrl: 'https://sm.ms/api/upload',
      handler(file: any) {
        let formData = new FormData();
        for (let i in file) {
          formData.append("smfile", file[i]);
        }
        console.log("formData", formData);
      },
    },
  };
  vditor.value = new Vditor('vditor', options);
};

const onClick = () => {
  emits('get-html', vditor.value?.getHTML());
  emits('test', 'test.......')
}

onMounted(() => {
  initVditor();
});
</script>

<template>
    <span>组件标题：{{props.title}}</span>
    <div id="vditor" class="vditor" />
    <button @click="onClick">vditor组件按钮</button>
</template>