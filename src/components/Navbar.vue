<template>
  <section class="section">
    <aside class="menu">
      <router-link to="/" exact>
        <p class="title">
          <span>
            <i class="far fa-star"></i>
          </span>
          {{ title }}
        </p>
      </router-link>
      <p class="subtitle is-6">{{ subtitle }}</p>
      <br>
      <ul class="menu-list">
        <li v-for="(category, index) in categories" :key="index">
          <router-link :to="'/' + category.href" class="hvr-forward has-text-left">
            <span class="icon">
              <i :class="category.style"></i>
            </span>
            &nbsp;&nbsp;{{ category.name }}
          </router-link>
        </li>
      </ul>
      <hr>
      <p class="subtitle is-7">CREATED BY @DI</p>
    </aside>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Vue Douban',
      subtitle: 'A Vuejs Douban Website',
      categories: [
        {
          name: 'In Theatre',
          style: 'fas fa-fire',
          href: 'movies_in_theatre'
        },
        {
          name: 'Coming Soon',
          style: 'fas fa-film',
          href: 'movies_coming_soon'
        },
        {
          name: 'Movie Star',
          style: 'fas fa-users',
          href: 'movies_celebrities'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
a .title {
  &:hover {
    color: #ff60a2;
  }
}

.menu-list a {
  padding-bottom: 0.75em;
  padding-left: 0em;
}

.hvr-forward:not(.is-active) {
  transition: 0.3s;
  &:hover {
    transform: translateX(8px);
  }
}
</style>
