<template>
	<header>
		<NavBar />
	</header>
	<main>main</main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
	name: "App",
	components: { NavBar },
});
</script>

<style></style>
