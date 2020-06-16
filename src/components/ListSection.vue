<template>
     <div>
        <ul>
            <li v-for="item in sections"  v-bind:key="item.id">{{item.title}}</li>
            
        </ul>
        <div class="d-flex">
            <div v-if="isAddSection == false" class="ml-3" @click="isAddSection = true; inputText = ''">
                <svg class="bi bi-plus-circle" width="1.2em" height="1.2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                </svg>
            </div>
            <template v-else><input class="form-control " type="text" v-model="inputText">
            <!-- <button class="btn btn-primary" @click="addComponent">  -->
            <svg  @click="addComponent" class="bi bi-check2 ml-3 mt-2" width="1.4em" height="1.4em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </svg>
            <!-- </button> -->
            <!-- <button class="btn btn-primary" @click="isAddTemplate = false "> -->
                <svg @click="isAddSection = false " class="bi bi-x ml-1 mt-2" width="1.4em" height="1.4em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                    <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                </svg>
            <!-- </button> -->
            </template>
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
        addComponent() {
            this.addSection({title:this.inputText, sectionTypeId:this.activeSectionTypeId});
            this.isAddSection = false 
            // this.$emit('addComponent', {title:'Sections', component:'listSection'})

        },
        ...mapActions("sections", ["addSection"])
        
    }
}
</script>