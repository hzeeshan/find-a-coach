<template>
  <section>
    <base-card>
      <h2>
        {{ fullName }}
      </h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested ? reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>

      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
import BaseBadge from '../../components/ui/BaseBadge.vue';
export default {
  props: ['id'],
  data() {
    return {
      seletedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.seletedCoach.firstName + ' ' + this.seletedCoach.lastName;
    },
    areas() {
      return this.seletedCoach.areas;
    },
    rate() {
      return this.seletedCoach.hourlyRate;
    },
    description() {
      return this.seletedCoach.description;
    },
    contactLink() {
      return this.$route.path + '/' + this.seletedCoach.id;
    },
  },
  created() {
    this.seletedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
  components: { BaseBadge },
};
</script>