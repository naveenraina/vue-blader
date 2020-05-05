<template>
    <div>
        <ul>
            <li v-for="item in templates" @click="showDetail()" v-bind:key="item.id">{{item.title}}</li>

            <li @click="add()">ADD</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'ListTemplate',
    data(){
        return {
            templates: [
                { id: 1, title: 'template 1' },
                { id: 2, title: 'template 2' },
            ]
        }
    },
    methods: {
        showDetail(){

        },
        add(){
            this.templates.push({ title: 'template new' })
        }
    }
}
</script>