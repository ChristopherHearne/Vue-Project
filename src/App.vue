<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link
            :to="{ name: 'Home' }"
            class="router-link"
            exact
            active-class="foo"
          >
            <img class="logo" src="./assets/build-a-bot-logo.png" />
            Build-a-Bot
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'RobotBuilder' }"
            class="router-link"
            exact
            active-class="foo"
          >
            Build
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar" />
      </aside>
      <main>
        <router-view />
      </main>
    </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return { userName: "Chrissy Fish" };
  },
  provide() {
    return { userName: this.userName };
  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>

<style scoped>
main {
  padding: 30px;
  background-color: #fff;
  width: 964px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}

.router-link {
  text-decoration: none;
  color: inherit;
}

.router-link-active {
  /* Standard Vue Class for changing a router link style*/
  color: white;
}

.foo {
  color: white;
}

.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}

.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
</style>
