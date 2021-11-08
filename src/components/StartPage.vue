

<script setup lang="ts">
import Vditor from "vditor";
import { onMounted, ref } from "vue";
const vditor = ref<Vditor | null>();
const log = () => {
  console.log("xxxx");
};
const initVditor = () => {
  const options = {
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
};
onMounted(() => {
  initVditor();
});
</script>

<template>
  <div>
    <button @click="log">点击</button>
  </div>
</template>