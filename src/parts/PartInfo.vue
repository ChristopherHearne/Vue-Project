<template lang="">
    <div>
        <h1>{{part.title}}</h1>
    </div>
    <div>
        {{part.description}}
    </div>
</template>
<script>
import parts from '../build/data/parts'
export default {
    name: 'PartInfo',
    props: {
        partType: {type: String}, 
        id: {
            type: [Number, String],
            validator(value){
                return Number.isInteger(Number(value))
            }
        }, 
    },
    computed: {
        part(){
            const {partType, index} = this
            return parts[partType].find(part => part.id === +index)
        }
    },
}
</script>
<style lang="">
    
</style>