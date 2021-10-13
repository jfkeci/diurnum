<template>
  <b-container>
    <b-form inline>
      <b-input-group prepend="@" class="m-2">
        <b-form-input
          id="input-username"
          placeholder="Username"
          v-model="userName"
        ></b-form-input>
      </b-input-group>

      <b-form-input
        id="input-firstName"
        class="m-3"
        placeholder="First name"
        v-model="firstName"
      ></b-form-input>

      <b-form-input
        id="input-lastName"
        class="m-3"
        placeholder="Last name"
        v-model="lastName"
      ></b-form-input>

      <b-form-input
        id="input-email"
        class="m-3"
        placeholder="Email"
        v-model="email"
      ></b-form-input>

      <b-form-input
        id="input-password"
        class="m-3"
        type="password"
        placeholder="Password"
        v-model="password"
      ></b-form-input>

      <b-form-checkbox class="m-2">Remember me</b-form-checkbox>

      <b-button @click.prevent="registerUser" variant="primary">Save</b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  },
  /* mixins: [axiosMixin], */
  methods: {
    registerUser() {
      this.$axios
        .post(this.$BASE_URL_API + "user/register", {
          firstName: this.firstName,
          lastName: this.lastName,
          userName: this.userName,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>