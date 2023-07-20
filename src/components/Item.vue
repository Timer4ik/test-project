<template>
    <div class="flex-block">
        <div
            class="amount"
            v-if="hasAmount"
        >
            <input
                type="number"
                :value="item.amount"
                @change="item.amount = +($event.target as HTMLInputElement).value"
            >
        </div>
        <input
            type="color"
            class="item"
            @change="item.color = ($event.target as HTMLInputElement).value"
            :class="sizeStyle"
            :style="{
                backgroundColor: item.color
            }"
        />
    </div>
</template>

<script lang="ts" setup>
import { type GroupItem } from "@/types/index"
import type { InputHTMLAttributes } from "vue";

interface Props {
    item: GroupItem,
    size?: "small" | "standard"
    hasAmount?: boolean
}

const props = defineProps<Props>()

const sizeStyle = props.size ? `item-${props.size}` : ""

</script>

<style scoped>
.flex-block {
    display: flex;
    align-items: center;
    width: 50px;
    justify-content: space-between;
}

.item {
    display: block;
    width: 20px;
    height: 20px;
    border: none;
    flex: 0 0 50%;
}
.item::-webkit-color-swatch-wrapper {
    display: none;
}

.amount {
    flex: 0 0 50%;

}
.amount input {
    padding: 0;
    margin: 0;
    border: none;
    font-size:18px;

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
}</style>