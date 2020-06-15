<template>
    <div>
        <ul>
            <li v-for="item in sectionTypes"  @click="setCurrentComponent(item)" v-bind:key="item.id">{{item.title}}</li>
            <li v-if="isAddSectionType == false" @click="isAddSectionType = true; inputText = ''">ADD</li>
            <template v-else><input type="text" v-model="inputText">
            <button class="btn btn-primary" @click="addComponent"> add</button>
            <button class="btn btn-primary" @click="isAddSectionType = false "> cancel</button>
            </template>
        </ul>
    </div>
</template>
<script>
import { mapState,mapActions } from "vuex";
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
            sectionTypes: state => state.sectiontypes.currentSectionTypes,
            activeTemplateId: state => state.templates.activeTemplateId,
        })
    },
    methods: {
         setCurrentComponent (item) {
            this.setCurrentSectionType(item)
            this.$emit('addComponent', {title:'Sections', component:'listSection'})
        },
        addComponent() {
            this.addSectionType({title:this.inputText, templateId:this.activeTemplateId});
            this.isAddSectionType = false 
            this.$emit('addComponent', {title:'Sections', component:'listSection'})

        },
        ...mapActions("sectiontypes", ["addSectionType","setCurrentSectionType"])
        
    }
}
</script>