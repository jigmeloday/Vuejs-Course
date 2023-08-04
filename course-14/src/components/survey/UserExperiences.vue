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
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
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
    };
  },
  components: {
    SurveyResult,
  },
  methods: {
    loadServey() {
      fetch(
        'https://learning-vue-47350-default-rtdb.firebaseio.com/serveys.json',
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        }
      )
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
          this.results = results;
        });
    },
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
