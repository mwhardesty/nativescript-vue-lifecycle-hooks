import pageEventsMixin from './page-events-mixin'

export default {
    install(vue, opts){
        vue.mixin(pageEventsMixin)
    }
}
