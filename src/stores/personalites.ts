import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePersonalitesStore = defineStore('personalites', () => {
  const mainName = ref('')
  const mainAge = ref('')
  const children = ref([{ id: 1, name: '', age: '' }])

  const resultMainName = ref('')
  const resultMainAge = ref('')
  const resultChildren = ref([{}])

  const saved = ref(false)

  function addChilde() {
    if (children.value.length < 5) {
      children.value.push({ id: Math.floor(Math.random() * 100000), name: '', age: '' })
    }
  }
  function deleteChilde(childe: any) {
    children.value = children.value.filter((c) => c.id != childe.id)
  }
  function save() {
    resultMainName.value = mainName.value
    resultMainAge.value = mainAge.value
    resultChildren.value = children.value
    saved.value = true
  }

  return {
    mainName,
    mainAge,
    children,
    addChilde,
    deleteChilde,
    resultMainName,
    resultMainAge,
    resultChildren,
    save,
    saved
  }
})
