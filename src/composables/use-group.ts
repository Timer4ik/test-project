import { getGroups } from "@/mock/getGroups"
import type { Cube, Group, GroupItem } from "@/types"
import { ref } from "vue"

export const useGroup = () => {
    const groups = ref<Group[]>(getGroups())

    const checkGroupItem = (groupItem: GroupItem, group: Group) => {

        groupItem.checked = !groupItem.checked

        const checkedCount = group.items.filter(item => item.checked)

        if (checkedCount.length === group.items.length) {
            group.checked = true
        }
        else if (checkedCount.length == 0) {
            group.checked = false
        }
        else {
            group.checked = undefined
        }
        console.log(group.checked);
    }

    const checkGroup = (group: Group) => {
        group.checked = !group.checked

        group.items.forEach(item => {
            item.checked = group.checked
        })
    }

    const decrementGroupItem = (groupItem: GroupItem) => {
        groupItem.amount--
    }

    const toggleMixed = (group: Group) => {
        group.isMixed = !group.isMixed
    }

    return {
        groups, checkGroup, checkGroupItem, decrementGroupItem, toggleMixed
    }
}