<template>
    <div>
        <ul>
            <li v-for="item in templates" @click="setCurrentTemplate(item)" v-bind:key="item.id">{{item.title}}</li>

            <li v-if="isAddTemplate == false" @click="isAddTemplate = true; inputText = ''">ADD</li>
            <template v-else><input type="text" v-model="inputText">
            <button class="btn btn-primary" @click="addComponent"> add</button>
            <button class="btn btn-primary" @click="isAddTemplate = false "> cancel</button>
            </template>
        </ul>
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
    name: 'ListTemplate',
    data(){
        return {
            isAddTemplate: false,
            inputText: ''
        }
    },
    computed: {
        ...mapState({
            templates: state => state.templates.templates
        })
    },
    methods: {
        addComponent() {
            this.addTemplate(this.inputText);
            this.isAddTemplate = false 
            this.$emit('addComponent', {title:'Section Types', component:'listSectionType'})

        },
        ...mapActions("templates", ["setCurrentTemplate", "addTemplate"])
        
    }
}
</script>