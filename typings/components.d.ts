import type Icon from '@tooy-ui/components/icon'
// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
    // GlobalComponents for Volar
    export interface GlobalComponents {
        YIcon: typeof Icon
    }
}

export { }
