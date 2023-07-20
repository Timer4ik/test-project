
export interface Cube {
    id?: any
    color: string
    sort?:number
    groupItem?:GroupItem
}

export interface GroupItem {
    id: number
    color: string
    checked: boolean | undefined
    amount: number
    cubes?:Cube[]
}

export interface Group {
    opened: boolean
    checked: boolean | undefined

    items: GroupItem[]
    mixedItems?: Cube[]

    isMixed: boolean
}