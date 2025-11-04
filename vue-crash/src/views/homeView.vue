<script setup>
import Hero from '../components/Hero.vue';
import HomeCards from '../components/HomeCards.vue';
import JobListings from '../components/JobListings.vue';


</script>
<template>
    <Hero title="test title " subtitle="test whatever if its works or im just bullshitt"/>
    <HomeCards />
    <JobListings :limit="3" :showButton="true"/>


</template>