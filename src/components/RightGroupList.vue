<template>
    <ul class="right__groups">
        <li
            v-for="(group, idx) in groups"
            :key="idx"
        >
            List {{ idx }}
            <button @click="$emit('toggleMixed', group)">{{ group.isMixed ? 'Сортировать' : 'Перемешать' }}</button>
            <ul
                class="groups"
                :class="{ mixed: group.isMixed }"
            >
                <RightGroupListGroup
                    :group="group"
                    @decrementGroupItem="(groupItem: GroupItem) => $emit('decrementGroupItem', groupItem)"
                />
            </ul>
        </li>
    </ul>
</template>

<script setup lang="ts">
import type { Group, GroupItem } from '@/types';

import RightGroupListGroup from './RightGroupListGroup.vue';

defineEmits<
    {
        (event: "decrementGroupItem", groupItem: GroupItem): void
        (event: "toggleMixed", group: Group): void
    }
>()

defineProps<{
    groups: Group[]
}>()

</script>

<style>
.right__groups .groups {
    border: 1px solid black;
    padding: 20px;
    display: flex;
    flex-direction: column;
}

.right__groups .groups.mixed {
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>