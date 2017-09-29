<template>
    <tabs>
      <tab name="Returned User" :selected="true">
        <h1>You already have an username</h1>
        <loginform></loginform>
      </tab>
      <tab name="New User">
        <h1>You need a new username</h1>
        <registerform></registerform>
      </tab>
    </tabs> 
</template>

<script>
import Tabs from './Tabs.vue';
import Tab from './Tab.vue';
import Loginform from './Loginform.vue';
import Registerform from './Registerform.vue';

export default {
  name: 'home',
  components: {
    Tabs, 
    Tab,
    Loginform,
    Registerform,
  }
}
</script>


