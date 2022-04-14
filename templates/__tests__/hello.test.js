import { shallowMount } from '@vue/test-utils';
import Hello from '@/views/components/hello';

describe('Hello BalmJS', () => {
  const targetName = 'Hello Vue 3.0 App';

  it(`should be "${targetName}"`, () => {
    // Place your tests here.
    const wrapper = shallowMount(Hello);
    expect(wrapper.find('h1').text()).toBe(targetName);
  });
});
