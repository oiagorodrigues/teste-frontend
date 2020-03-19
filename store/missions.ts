import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import MISSION_API from '~/services/missions'
import { IMission } from '~/models/mission'

@Module({ name: 'missions', stateFactory: true, namespaced: true })
export default class Missions extends VuexModule {
    public missions: IMission[] = []

    @Mutation
    public setMissions(missions: IMission[]) {
        this.missions = missions
    }

    @Action({commit: 'setMissions'})
    async fetchMissions() { return await MISSION_API.fetch() }
}
