<template lang="">
    <div>
        <h1>{{part.title}}</h1>
    </div>
    <div>
        {{part.description}}
    </div>
</template>
<script>
import getPartsMixin from './get-parts-mixin'
export default {
    name: 'PartInfo',
    mixins: [getPartsMixin],
    props: {
        partType: {type: String}, 
        index: {
            type: [Number, String],
            validator(value){
                return Number.isInteger(Number(value))
            }
        }, 
    },
    computed: {
        part(){
            const {partType, index} = this
            return this.parts[partType].find(part => part.id === +index)
        }
    },
}
</script>
<style lang="">
    
</style>