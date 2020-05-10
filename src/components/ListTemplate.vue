<template>
    <div>
        <ul>
            <li v-for="item in templates" @click="setCurrentTemplate(item)" v-bind:key="item.id">{{item.title}}</li>

            <li @click="addTemplate('new template')">ADD</li>
        </ul>
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
    name: 'ListTemplate',
    data(){
        return {
            
        }
    },
    computed: {
        ...mapState({
            templates: state => state.templates.templates
        })
    },
    methods: {
        ...mapActions("templates", ["setCurrentTemplate", "addTemplate"])
        
    }
}
</script>