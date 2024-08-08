<script setup lang="ts">
import { ref } from 'vue'
import Student from '@/types/Student'
defineProps<{
  student: Student
}>()
// {
//     "id": 1,
//     "studentId": "SE-001",
//     "name": "Prayuth",
//     "surname": "The minister",
//     "gpa": 3.59,
//     "image": "https://firebasestorage.googleapis.com/v0/b/publicimage-41deb.appspot.com/o/tu.jpg?alt="penAmount": 15,
//     "description": "The great man ever!!!!"
// },
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp">
      <h2>{{ student.name + ' ' + student.surname }}</h2>
      <span>GPA: {{ student.gpa }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>