<template>
    <div>
        <ul>
            <li v-for="item in sectionTypes"  v-bind:key="item.id">{{item.title}}</li>
            <li v-if="isAddSectionType == false" @click="isAddSectionType = true; inputText = ''">ADD</li>
            <template v-else><input type="text" v-model="inputText">
            <button class="btn btn-primary" @click="addComponent"> add</button>
            <button class="btn btn-primary" @click="isAddSectionType = false "> cancel</button>
            </template>
        </ul>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: 'ListSectionType',
    data(){
        return {
            isAddSectionType: false,
            inputText: ''
        }
    },
    computed: {
        ...mapState({
            sectionTypes: state => state.sectiontypes.sectionTypes
        })
    },
    methods: {
        addComponent() {
            // this.addSectionType(this.inputText);
            this.isAddSectionType = false 
            this.$emit('addComponent', {title:'Sections', component:'listSection'})

        },
        // ...mapActions("templates", ["setCurrentTemplate", "addTemplate"])
        
    }
}
</script>