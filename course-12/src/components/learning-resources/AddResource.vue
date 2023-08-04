<template>
  <div>
    <Teleport to="body">
      <the-error title="Invalid Input" v-if="invalidInput" @close="confirmed">
        <template #default>
          <p>Please fill all the fields</p>
        </template>
        <template #actions>
          <base-button @click="confirmed">Ok</base-button>
        </template>
      </the-error>
    </Teleport>
    <base-card>
      <form v-on:submit.prevent="submitForm">
        <div class="form-control">
          <label>Title</label>
          <input id="title" name="title" type="text" ref="title" />
        </div>
        <div class="form-control">
          <label>Description</label>
          <textarea
            id="description"
            name="description"
            rows="3"
            ref="description"
          ></textarea>
        </div>
        <div class="form-control">
          <label>Link</label>
          <input id="link" name="link" type="url" ref="link" />
        </div>
        <div>
          <base-button type="submit"> Add Resource </base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>
<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      invalidInput: false,
    };
  },
  methods: {
    submitForm() {
      const title = this.$refs.title.value;
      const description = this.$refs.description.value;
      const link = this.$refs.link.value;
      if (!title.trim() || !description.trim() || !link.trim()) {
        this.invalidInput = true;
        return;
      }
      this.addResource(title, description, link);
    },
    confirmed() {
      this.invalidInput = false;
    },
  },
};
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
