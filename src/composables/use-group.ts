import type { Group, GroupItem } from "@/types"
import { ref } from "vue"

export const useGroup = () => {
    const groups = ref<Group[]>([
        {
            opened: false,
            checked: false,
            isMixed: false,
            items: [
                {
                    checked: false,
                    id: 0,
                    color: "blue",
                    amount: 80
                },
                {
                    checked: false,
                    id: 1,
                    color: "red",
                    amount: 20
                },
                {
                    checked: false,
                    id: 2,
                    color: "green",
                    amount: 20
                },
                {
                    checked: false,
                    id: 3,
                    color: "cyan",
                    amount: 20
                },
                {
                    checked: false,
                    id: 4,
                    color: "yellow",
                    amount: 20
                },
            ]
        },
        {
            opened: false,
            checked: false,
            isMixed: false,

            items: [
                {
                    checked: false,
                    id: 0,
                    color: "blue",
                    amount: 20
                },
                {
                    checked: false,
                    id: 1,
                    color: "red",
                    amount: 20
                },
                {
                    checked: false,
                    id: 2,
                    color: "green",
                    amount: 20
                },
                {
                    checked: false,
                    id: 3,
                    color: "cyan",
                    amount: 20
                },
                {
                    checked: false,
                    id: 4,
                    color: "yellow",
                    amount: 20
                },
                {
                    checked: false,
                    id: 4,
                    color: "#435345",
                    amount: 20
                },
            ]
        },
        {
            opened: false,
            checked: false,
            isMixed: false,
            items: [
                {
                    checked: false,
                    id: 0,
                    color: "blue",
                    amount: 18
                },
                {
                    checked: false,
                    id: 1,
                    color: "red",
                    amount: 20
                },
                {
                    checked: false,
                    id: 2,
                    color: "green",
                    amount: 43
                },
                {
                    checked: false,
                    id: 3,
                    color: "cyan",
                    amount: 3
                },
                {
                    checked: false,
                    id: 4,
                    color: "yellow",
                    amount: 15

                },
            ]
        },
        {
            opened: false,
            checked: false,
            isMixed: false,
            items: [
                {
                    checked: false,
                    id: 0,
                    color: "blue",
                    amount: 12
                },
                {
                    checked: false,
                    id: 1,
                    color: "red",
                    amount: 4
                },
                {
                    checked: false,
                    id: 2,
                    color: "green",
                    amount: 20
                },
                {
                    checked: false,
                    id: 3,
                    color: "cyan",
                    amount: 5
                },
                {
                    checked: false,
                    id: 4,
                    color: "yellow",
                    amount: 6
                },
            ]
        }
    ])

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