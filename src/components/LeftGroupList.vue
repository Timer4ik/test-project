<template>
    <ul class="left__groups">
        <li
            class="groups__group"
            v-for="(group, idx) in groups"
        >
            <span
                class="group__arrow"
                @click="group.opened = !group.opened"
                :class="{ opened: group.opened }"
            ></span>
            <label>
                <input
                    type="checkbox"
                    :checked="group.checked"
                    :indeterminate="group.checked === undefined"
                    @change="$emit('checkGroup', group)"
                >
                List {{ idx }}
            </label>
            <ul
                v-if="group.opened"
                class="group__items items"
            >
                <li
                    class="items__item item"
                    v-for="item in group.items"
                >
                    <label>
                        <input
                            type="checkbox"
                            @change="$emit('checkGroupItem', item, group)"
                            :checked="item.checked"
                        />
                        Item {{ item.id }}
                    </label>
                    <Item
                        :item="item"
                        has-amount
                    />
                </li>
            </ul>
        </li>
    </ul>
</template>

<script setup lang="ts">
import type { GroupItem, Group } from '@/types';
import Item from './Item.vue';

defineEmits<{
    (event: 'checkGroup', group: Group): void
    (event: 'checkGroupItem', groupItem: GroupItem, group: Group): void
}>()

defineProps<{
    groups: Group[]
}>()

</script>

<style>
.left__groups .group__arrow {
    position: absolute;
    left: 0;
    content: "";
    width: 10px;
    height: 10px;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    transform: rotate(45deg) translate(0, 50%);
    cursor: pointer;
}

.left__groups .group__arrow.opened {
    transform: rotate(-135deg) translate(0, -50%);
}


.left__groups .group__items {
    width: 200px;
    display: flex;
    flex-direction: column;
}

.left__groups .items__item {
    display: flex;
    justify-content: space-between;
}
</style>