<template>
    <div class="mission-card">
        <img :src="mission.thumb_url" alt="Mission image" />
        <h1>{{mission.name}}</h1>
        <span>{{mission.status}}</span>
        <span>{{mission.due_date}}</span>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import { IMission } from '~/models/mission'

@Component
export default class MissionCard extends Vue {
    @Prop({ required: true }) public mission!: IMission
}
</script>

<style scoped>
.mission-card {
    padding: 1em .75em;
    box-shadow: 0 0 4px rgba(0,0,0.25), 0 4px 4px rgba(0,0,0.45);
    cursor: pointer;
    transition: box-shadow .5s ease-out;
}
.mission-card:hover {
    box-shadow: 0 0 4px rgba(0,0,0.25), 0 8px 8px rgba(0,0,0.75);
}
</style>