import { shallowMount } from '@vue/test-utils';
import MissionCard from '~/components/Mission/MissionCard.vue';

describe('MissionCard.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(MissionCard)
    expect(wrapper.isVueInstance()).toBeTruthy()
  });
});