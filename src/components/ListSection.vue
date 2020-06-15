<template>
     <div>
        <ul>
            <li v-for="item in sections"  v-bind:key="item.id">{{item.title}}</li>
            <li v-if="isAddSection == false" @click="isAddSection = true; inputText = ''">ADD</li>
            <template v-else><input type="text" v-model="inputText">
            <button class="btn btn-primary" @click="addComponent"> add</button>
            <button class="btn btn-primary" @click="isAddSection = false "> cancel</button>
            </template>
        </ul>
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