import { mount } from '@vue/test-utils'
import { expect, it, vi } from 'vitest'
import TestComponent from '../src/components/TestComponent.vue'

const wrapper = mount(TestComponent)
const fnSpied = vi.spyOn(wrapper.vm, 'fnInside')
wrapper.vm.fnOutside()
it('should call fnInside', () => {
  expect(fnSpied).toHaveBeenCalled()
})

