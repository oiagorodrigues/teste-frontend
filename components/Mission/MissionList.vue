<template>
    <div class="mission-list">
        <div v-for="mission in missions" :key="mission.id">
            <mission-card :mission="mission" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { IMission } from '~/models/mission'
import MissionCard from './MissionCard.vue'

@Component({
    components: {
        MissionCard
    }
})
export default class MissionList extends Vue {
    @Prop({ required: true }) public missions!: IMission[]
}
</script>

<style scoped>
</style>