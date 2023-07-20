<template>
  <div class="container">
    <div class="left">
      <LeftGroupList
          :groups="groups"
          @checkGroup="checkGroup"
          @checkGroupItem="checkGroupItem"
      />
    </div>
    <div class="right">
      <RightGroupList
          :groups="groups"
          @decrementGroupItem="decrementGroupItem"
          @toggleMixed="toggleMixed"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import LeftGroupList from '@/components/LeftGroupList.vue';
import RightGroupList from '@/components/RightGroupList.vue';
import { useGroup } from "@/composables/use-group"

const { checkGroup, checkGroupItem, groups, decrementGroupItem, toggleMixed } = useGroup()
</script>

<style>
* {
  box-sizing: border-box;
}

.container {
  display: flex;
  justify-content: space-between;
  gap: 50px;
  width: 100%;
}

.left,
.right {
  height: 100%;
  border: 1px solid black;
  padding: 20px;
  flex: 1 1 50%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  padding-left: 20px;
  position: relative;
}</style>
