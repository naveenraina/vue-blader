<template>
    <div>
        <ul>
            <li v-for="item in sectionTypes"  v-bind:key="item.id">{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    name: 'ListSectionType',
    computed: {
        ...mapState({
            sectionTypes: state => state.sectiontypes.sectionTypes
        })
    }
}
</script>