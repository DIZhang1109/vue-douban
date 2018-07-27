<template>
  <div id="app">
    <div class="columns is-gapless is-fullheight has-gradient-background">
      <div class="column is-3 has-background-white">
        <app-navbar></app-navbar>
      </div>
      <div class="column is-9">
        <section class="section">
          <div class="columns">
            <div class="column is-10 is-offset-1">
              <router-view/>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    AppNavbar
  }
}
</script>

<style lang="scss" scoped>
.columns.is-fullheight {
  min-height: 100vh;
  max-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  .column {
    overflow-y: auto;
  }
}

.has-gradient-background {
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
}

.has-background-white {
  background-color: hsl(0, 0%, 100%);
}

.column.is-3 {
  -webkit-box-shadow: 2px 0px 6px 2px rgba(194, 194, 194, 0.4);
  -moz-box-shadow: 2px 0px 6px 2px rgba(194, 194, 194, 0.4);
  box-shadow: 2px 0px 6px 2px rgba(194, 194, 194, 0.4);
}
</style>
