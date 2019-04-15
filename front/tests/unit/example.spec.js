import { shallowMount } from '@vue/test-utils'
import Tabs from '@/components/Tabs.vue'
import TrainingCard from '@/components/TrainingCard.vue'
import VTabs from '../components/VTabs'


describe('Tabs.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Tabs,{
      stubs: {
        ['v-tabs']: VTabs,
        
      }
    })
    expect(wrapper.find(TrainingCard))
  })
})
