<template>
    <div id="main-app">
        <div id="nav">
            <div @click="go1">子应用1</div>
            <div @click="go2">子应用2</div>
        </div>
        <div id="app-main"></div>
    </div>
</template>
<script>
export default {
    methods: {
        go1 () {
            this.$router.push("/vue")
        },
        go2 () {
            this.$router.push("/vue/about")
        }
    }
}
</script>

<style>
#main-app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

#app-qiankun {
    width: 500px;
    height: 500px;
}
</style>
