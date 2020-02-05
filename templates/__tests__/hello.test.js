import { shallowMount } from '@vue/test-utils'
import Hello from '../app/scripts/views/components/hello';

describe('Hello BalmJS', () => {
  it('should be "Hello Vue App"', () => {
    // Place your tests here.
    const wrapper = shallowMount(Hello);
    expect(wrapper.find('h1').text()).toBe('Hello Vue App');
  });
});
