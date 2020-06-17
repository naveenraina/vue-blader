<template>
    <div>
        <h4 class="d-flex justify-content-center">Section Detail</h4>
        <div class="row">
            <div class="col-3">
                 <label>Title:</label>


            </div>
            <div class="col-9">
                <input type="text" v-model="title" class="form-control">

            </div>
        </div>
        <div class="row mt-3">
            <div class="col-3">
                <label>Details:</label>
            </div>
            <div class="col-9">
                <textarea class="form-control" v-model="details" rows="4" cols="50">
                </textarea>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-3">
            </div>
            
            <div class="col-7">
                
                <div class="d-flex">
           
                    <template>
                    <!-- <button class="btn btn-outline-secondary" >  -->
                    <svg @click="saveSection" class="bi bi-check2  mt-2" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                    <!-- </button> -->
                    <!-- <button class="btn btn-outline-secondary" > -->
                        <svg class="bi bi-x ml-1 mt-2" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                            <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                        </svg>
                    <!-- </button> -->
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState,mapActions } from "vuex";
export default {
    name: 'DetailSection',
     data() {
        return {
            title: '',
            details: ''
           
        }
    },
    computed: {
        ...mapState({
            section: state => state.sections.currentSection,
            activeSectionTypeId: state => state.sectiontypes.activeSectionTypeId,
            activeSectionId: state => state.sections.activeSectionId,
        })
    },
     watch: {
        activeSectionId (){
            this.details = this.section.details
            this.title = this.section.title
        }

    },
    methods: {
        saveSection() {
            if(this.activeSectionId){
                this.addSection({title:this.title,details:this.details,sectionId:this.activeSectionId, sectionTypeId:this.activeSectionTypeId})

            }else {
                this.addSection({title:this.title,details:this.details,sectionId: null, sectionTypeId:this.activeSectionTypeId});

            }
            
            this.$emit('remList','List4')

        },
       
        ...mapActions("sections", ["addSection"])
        
    },
    mounted () {
        this.details = this.section.details
        this.title = this.section.title
    }
   
}
</script>