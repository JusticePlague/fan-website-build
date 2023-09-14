<template>
    <h1>Oops!</h1>
    <h3>The {{ resource }} you're looking for is not here.</h3>
    <RouterLink :to="{ name: 'home' }">
        Back to the home page
    </RouterLink>
</template>

<script>
export default {
    props: {
        resource: {
            type: String,
            required: true,
            default: 'page',
        }
    }
}
</script>