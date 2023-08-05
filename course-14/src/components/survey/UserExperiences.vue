<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadServey"
          >Load Submitted Experiences</base-button
        >
      </div>
      <ul>
        <div v-if="isLoading">Loading...</div>
        <survey-result
          v-else-if="!isLoading && results.length"
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
        <div v-else-if="!isLoading && !results.lenght && !error">NO Data</div>
        <div v-if="error">{{ error }}</div>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  components: {
    SurveyResult,
  },
  methods: {
    loadServey() {
      this.isLoading = true;
      fetch('https://learning-vue-47350-default-rtdb.firebaseio.com/serveys', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].userName,
              rating: data[id].rating,
            });
          }
          this.isLoading = false;
          this.results = results;
        })
        .catch((error) => {
          this.isLoading = false;
          this.error = 'fail to fetch data';
        });
    },
  },
  mounted() {
    this.loadServey();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
