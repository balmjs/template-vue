import { shallowMount } from '@vue/test-utils';
import Hello from '@/views/components/hello.vue';

describe('Hello BalmJS', () => {
  const targetName = 'Hello Vue App';

  it(`should be "${targetName}"`, () => {
    // Place your tests here.
    const wrapper = shallowMount(Hello);
    expect(wrapper.find('h1').text()).toBe(targetName);
  });
});
