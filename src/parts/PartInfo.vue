<template lang="">
    <div>
        <h1>{{part.title}}</h1>
    </div>
    <div>
        {{part.description}}
    </div>
</template>
<script>
export default {
    name: 'PartInfo',
    data(){
        return {
            part: {
                title: 'Part Title',
                description: 'Description'
            }
        }
    }
}
</script>
<style lang="">
    
</style>