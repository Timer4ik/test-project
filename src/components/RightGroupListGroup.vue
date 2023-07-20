<template>
    <template v-if="!group.isMixed">
        <li
            class="groups__item"
            v-for="(groupItem, idx) in groupItems"
            :key="idx"
        >
            <SmallItem
                @click="$emit('decrementGroupItem', cube.groupItem)"
                v-for="cube in groupItem.cubes"
                :="cube"
                :key="cube.id"
                :color="cube.color"
                size="small"
            />
        </li>
    </template>
    <template v-if="group.isMixed">
        <li
            class="groups__item"
            v-for="(cube, idx) in cubes()"
            :key="idx"
        >
            <SmallItem
                @click="$emit('decrementGroupItem', cube.groupItem)"
                :="cube"
                :key="cube.id"
                :color="cube.color"
                size="small"
            />
        </li>
    </template>
</template>

<script setup lang="ts">
import type { Cube, Group, GroupItem } from '@/types';
import { computed } from 'vue';
import SmallItem from './SmallItem.vue';

defineEmits<
    (event: "decrementGroupItem", groupItem: GroupItem) => void
>()

const props = defineProps<{
    group: Group
}>()


const cubes = () => {
    const _cubes: Cube[] = [
    ]
    props.group.items.forEach(item => {
        for (let i = 0; i < item.amount; i++) {
            if (!item.checked) {
                continue
            }
            let cube: Cube = {
                color: item.color,
                sort: Math.random(),
                groupItem: item
            }
            _cubes.push(cube)
        }
    })
    _cubes.sort((a, b) => (b.sort || 0) - (a.sort || 0))

    return _cubes
}

const groupItems = computed(() => {
    const _groupItems: GroupItem[] = [
    ]
    props.group.items.forEach(item => {
        const _item = JSON.parse(JSON.stringify(item))
        let _cubes = []
        if (!item.checked) {
            return
        }
        for (let i = 0; i < item.amount; i++) {
            let cube: Cube = {
                id: Date.now(),
                color: item.color,
                groupItem: item
            }
            _cubes.push(cube)
        }
        _item.cubes = _cubes
        _groupItems.push(_item)
    })

    return _groupItems
})

</script>

<style>
.groups__item {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    padding: 0;
}
</style>