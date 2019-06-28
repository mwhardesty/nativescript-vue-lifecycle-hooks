[![NPM](https://nodei.co/npm/nativescript-vue-lifecycle-hooks.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nativescript-vue-lifecycle-hooks/)

[![npm version](https://badge.fury.io/js/nativescript-vue-lifecycle-hooks.svg)](https://badge.fury.io/js/nativescript-vue-lifecycle-hooks)
## NativeScript-Vue Lifecycle Hooks
### Install

```
npm install nativescript-vue-lifecycle-hooks --save
```

main.js
```
import Vue from 'nativescript-vue'
import NSVueLifecycleHooks from 'nativescript-vue-lifecycle-hooks'

Vue.use(NSVueLifecycleHooks)
```

### Usage

In any component that has Page as root element, you can use [NativeScript page events](https://docs.nativescript.org/ui/ns-ui-widgets/page#page-events) with [Vue lifecycle hooks](https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks) style.

So instead of this:
````
<template>
    <Page @loaded="onLoaded" @navigatingTo="onNavigatingTo">
        <Label>Hello world</Label>
    </Page>
</template>

<script>
    export default {
        methods: {
            onLoaded(args){
                console.log('page is loaded.')
            },
            onNavigatingTo(args){
                console.log('page is navigating to.')
            }
        }
    }
</script>
````

Use this:

````
<template>
    <Page>
        <Label>Hello world</Label>
    </Page>
</template>

<script>
    export default {
        methods: {

        },
        loaded(args){
            console.log('page is loaded.')
        },
        navigatingTo(args){
            console.log('page is navigating to.')
        }
    }
</script>
````

### Available Lifecycle Hooks.

````
<template>
    <Page>
        <Label>Hello world</Label>
    </Page>
</template>

<script>
    export default {
        // page is loaded.
        loaded(args) {
            console.log('loaded from page 2')
        },
        
        // page is unloaded.
        unloaded(args) {
            console.log('unloaded from page 2')
        },
        
        // when leaving a page (the navigation has ended).
        navigatedFrom(args) {
            console.log('navigatedFrom from page 2')
        },
        
        // when entering a page (the navigation has ended).
        navigatedTo(args) {
            console.log('navigatedTo from page 2')
        },
        
        // when leaving a page (the navigation has started).
        navigatingFrom(args) {
            console.log('navigatingFrom from page 2')
        },
        
        // when entering a page (the navigation has started)
        navigatingTo(args) {
            console.log('navigatingTo from page 2')
        }
    }
</script>
````

### Contributing

Thanks for considering contributing.

### License

[MIT](https://opensource.org/licenses/MIT)
