<template>
    <div>Mission List</div>
</template>

<script lang="ts">
import { Vue, Component, namespace } from 'nuxt-property-decorator'
import { IMission } from '~/models/mission'

const missions = namespace('missions')

@Component
export default class MissionList extends Vue {
    @missions.State public missions!: IMission[]
    @missions.Action public fetchMissions!: () => Promise<IMission[]>
}
</script>

<style scoped>
</style>