<template>
    <div class="block">
        <div
            class="item item-small"
            :style="{
                backgroundColor: color
            }"
        />
    </div>
</template>

<script lang="ts" setup>
import { type Cube } from "@/types/index"

defineProps<Cube>()

</script>

<style scoped>
.block {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.item {
    width: 20px;
    height: 20px;
    margin: 2px;
}

.item-small {
    width: 10px;
    height: 10px;
}

.item-standard {
    width: 20px;
    height: 20px;
}

.item-red {
    background-color: red;
}

.item-green {
    background-color: green;
}

.item-blue {
    background-color: blue;
}

.item-yellow {
    background-color: yellow;
}
</style>