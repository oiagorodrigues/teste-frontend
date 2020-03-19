import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import MissionsModule from '~/store/missions'

let missions: MissionsModule

function initialiseStores(store: Store<any>): void {
  missions = getModule(MissionsModule, store)
}

export { initialiseStores, missions }