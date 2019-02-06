<template>
  <div class="panel">
    <d-navbar toggleable="md" type="dark" theme="primary">
  <d-navbar-toggle target="nav-collapse"></d-navbar-toggle>
  <d-navbar-brand>
      <h6 class="text-white my-auto mr-4">Shards Vue</h6>
  </d-navbar-brand>

  <d-collapse is-nav id="nav-collapse">
    <d-navbar-nav>
        <d-nav-item href="#">Link</d-nav-item>
        <d-nav-item href="#" disabled>Disabled</d-nav-item>
        <d-dropdown text="Dropdown" is-nav>
            <d-dropdown-item>Action</d-dropdown-item>
            <d-dropdown-item>Another action</d-dropdown-item>
            <d-dropdown-item>Something else here</d-dropdown-item>
            <d-dropdown-divider />
            <d-dropdown-item>Separated link</d-dropdown-item>
        </d-dropdown>
    </d-navbar-nav>

    <d-navbar-nav class="ml-auto">
        <d-input-group seamless>
            <d-input-group-text slot="prepend">
                <fa :icon="['fas', 'search']" />
            </d-input-group-text>
            <d-input size="sm" placeholder="Search..."/>
        </d-input-group>
    </d-navbar-nav>

  </d-collapse>
</d-navbar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped>
.panel{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
