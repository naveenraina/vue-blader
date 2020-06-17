<template>
     <div>
        <ul>
            <li v-for="item in sections"  v-bind:key="item.id"  @click="setCurrentComponent(item)">{{item.title}}</li>
            
        </ul>
        <div class="d-flex">
            <div  class="ml-3" @click="addComponent" >
                <svg class="bi bi-plus-circle" width="1.2em" height="1.2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                </svg>
            </div>
           
        </div>
    </div>
</template>
<script>
import { mapState,mapActions } from "vuex";

export default {
    name: 'ListSection',
    data() {
        return {
            isAddSection: false,
            inputText: ''
        }
    },
    computed: {
        ...mapState({
            sections: state => state.sections.currentSections,
            activeSectionTypeId: state => state.sectiontypes.activeSectionTypeId,
        })
    },
    methods: {
        setCurrentComponent (item) {
            this.setCurrentSection(item)
            this.$emit('addComponent', {title:'Detail Section', component:'detailSection'})
        },
        addComponent() {
            // this.addSection({title:this.inputText, sectionTypeId:this.activeSectionTypeId});
            // this.isAddSection = false 
            this.emptySection () 
            this.$emit('addComponent', {title:'Detail Section', component:'detailSection'})

        },
        ...mapActions("sections", ["addSection","setCurrentSection","emptySection"])
        
    }
}
</script>