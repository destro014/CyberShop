<template>
  <div class="login shifted">
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="card shadow border-0">
            <div class="card-body px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <h1>Login</h1>
              </div>
              <form>
                <div
                  class="form-group mb-3"
                  :class="{'has-success' : validEmail, 'has-danger':emailTyping && !validEmail}"
                >
                  <div class="input-group input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <font-awesome-icon :icon="['fas', 'envelope']" />
                      </span>
                    </div>
                    <input
                      class="form-control"
                      placeholder="Email"
                      type="email"
                      v-model="email"
                      @input="checkEmail"
                      @focus="emailTyping = true"
                      :class="{'is-valid' :validEmail,'is-invalid':emailTyping && !validEmail}"
                    />
                  </div>
                </div>
                <div class="form-group has-icon">
                  <div class="input-group input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <font-awesome-icon :icon="['fas', 'lock']" />
                      </span>
                    </div>
                    <input
                      class="form-control"
                      placeholder="Password"
                      :type="passwordType"
                      @input="checkPassword"
                      @focus="passwordTyping = true"
                      v-model="password"
                    />
                  </div>

                  <div class="is-icon" @click="viewPassword" v-if="passwordTyping">
                    <font-awesome-icon :icon="['fas', 'eye']" v-if=" !viewingPassword" />
                    <font-awesome-icon :icon="['fas', 'eye-slash']" v-if=" viewingPassword" />
                  </div>
                </div>
                <div class="text-center">
                  <button
                    type="button"
                    class="btn btn-primary my-4"
                    :class="{'disabled' : !formFilled}"
                  >Login</button>
                </div>
              </form>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-6">
              <router-link :to="{name :'register'}" class="text-light">
                <small>Forgot password?</small>
              </router-link>
            </div>
            <div class="col-6 text-right">
              <router-link :to="{name :'register'}">
                <small>Create new account</small>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      emailTyping: false,
      validEmail: null,
      validPassword: null,
      formFilled: false,
      viewingPassword: false,
      passwordTyping: null,
      passwordType: "password"
    };
  },
  methods: {
    checkEmail() {
      this.validEmail = this.reg.test(this.email);
      this.validForm();
    },
    checkPassword() {
      if (this.password.length > 1) {
        this.validPassword = true;
      } else {
        this.validPassword = false;
      }
      this.validForm();
    },
    viewPassword() {
      this.viewingPassword = !this.viewingPassword;
      if (this.passwordType === "password") {
        this.passwordType = "text";
      } else {
        this.passwordType = "password";
      }
    },
    validForm() {
      if (this.validPassword == true && this.validEmail == true) {
        this.formFilled = true;
        return this.formFilled;
      } else {
        this.formFilled = false;
        return this.formFilled;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  .card {
    background: $color-tertary;
  }
  .is-valid {
    color: $color-success;
  }

  .is-invalid {
    color: $color-danger;
    border-color: $color-danger !important;
  }
  .has-icon {
    position: relative;
    .is-icon {
      position: absolute;
      right: 8px;
      top: 8px;
      z-index: 5;
    }
  }
}
</style>
