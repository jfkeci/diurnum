<template>
  <b-container>
    <b-form>
      <label class="sr-only" for="input-username">Username</label>
      <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input id="input-username" placeholder="Username"></b-form-input>
      </b-input-group>
      <label class="sr-only" for="input-password">Password</label>
      <b-form-input
        id="input-password"
        type="password"
        class="mb-2 mr-sm-2 mb-sm-0"
      ></b-form-input>

      <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">
        Remember me
      </b-form-checkbox>

      <b-button variant="primary">Login</b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  name: "Login",
};
</script>