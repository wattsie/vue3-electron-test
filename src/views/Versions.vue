<template>
  <div class="dark about">
    <div class="pb-3">Information</div>
    <div class="flex flex-col">
      <div class="w-1/2 m-auto rounded-t-xl overflow-hidden bg-gradient-to-r from-teal-900 to-teal-700 p-10">
        <table class="m-auto table-auto text-left">
          <thead>
          <tr class="">
            <th class="w-1/4 flex-nowrap">Parameter</th>
            <th class="w-1/2">Version</th>
          </tr>
          </thead>
          <tbody>
          <tr class="">
            <td class="">App Version:</td>
            <td class="">{{ app }}</td>
          </tr>
          <tr class="">
            <td class="">Path:</td>
            <td class="">{{ path }}</td>
          </tr>
          <tr class="">
            <td class="">Route Name:</td>
            <td class="">{{ name }}</td>
          </tr>
          <tr class="">
            <td class="">Vue.js:</td>
            <td class="">{{ vue }}</td>
          </tr>
          <tr class="">
            <td class="">Electron:</td>
            <td class="">{{ electron }}</td>
          </tr>
          <tr class="">
            <td class="">Node:</td>
            <td class="">{{ node }}</td>
          </tr>
          <tr class="">
            <td class="">Chrome:</td>
            <td class="">{{ chrome }}</td>
          </tr>
          <tr class="">
            <td class="">Platform:</td>
            <td class="">{{ platform }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="p-2"></div>
      <div class="w-1/2 m-auto rounded-t-xl overflow-hidden bg-gradient-to-r from-teal-900 to-teal-700 p-10">
        <table class="m-auto table-auto text-left">
          <thead>
          <tr>
            <th class="w-1/4">Package</th>
            <th class="w-1/2">Version</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Platform</td>
            <td>{{ platform }}</td>
          </tr>
          <tr v-for="lib in versionsKeys" :key="lib">
            <td>{{ lib }}</td>
            <td>{{ versions[lib] }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'

@Options({})
export default class Versions extends Vue {
  versions: NodeJS.ProcessVersions | undefined
  versionsKeys: string[] | undefined
  chrome = ''
  electron = ''
  node = ''
  name: string | symbol | null | undefined
  path: string | undefined
  platform: string | undefined
  vue: string | undefined
  app: string | undefined

  created() {
    this.versions = process.versions
    this.versionsKeys = Object.keys(process.versions).sort()
    this.chrome = this.versions['chrome']
    this.electron = this.versions['electron']
    this.node = this.versions['node']
    this.path = this.$route.path
    this.name = this.$route.name
    this.platform = require('os').platform()
    this.vue = require('vue/package.json').version
    this.app = process.env.VUE_APP_VERSION
  }

  // mounted() {
  // }

}
</script>

<style scoped>
</style>
