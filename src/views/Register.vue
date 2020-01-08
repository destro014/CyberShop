<template>
  <div class="register shifted">
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="card shadow border-0">
            <div class="card-body px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <h1>Register</h1>
              </div>
              <form>
                <div
                  class="form-group mb-3"
                  :class="{'has-success' : validName, 'has-danger':nameTyping && !validName}"
                >
                  <div class="input-group input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <font-awesome-icon :icon="['fas', 'user']" />
                      </span>
                    </div>
                    <input
                      class="form-control"
                      placeholder="Name"
                      type="name"
                      v-model="name"
                      @input="checkName"
                      @focus="nameTyping = true"
                      :class="{'is-valid' :validName,'is-invalid':nameTyping && !validName}"
                    />
                  </div>
                </div>
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
                <div
                  class="form-group has-icon mb-3"
                  :class="{'has-success' : validPassword, 'has-danger' : passwordTyping && !validPassword}"
                >
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
                      v-model="password"
                      @input="checkPassword"
                      @focus="reveal"
                      :class="{'is-valid':validPassword,'is-invalid' : !validPassword}"
                    />
                  </div>
                  <div class="is-icon" @click="viewPassword" v-if="passwordTyping">
                    <font-awesome-icon :icon="['fas', 'eye']" v-if=" !viewingPassword" />
                    <font-awesome-icon :icon="['fas', 'eye-slash']" v-if=" viewingPassword" />
                  </div>
                </div>

                <div class="password-checker" v-if="passwordTyping">
                  <ul :class="{'text-danger':!validPassword}">
                    <li :class="{'text-success':containsEightCharacters}">
                      <font-awesome-icon
                        :icon="['fas', 'check-circle']"
                        v-if="containsEightCharacters"
                        class="success"
                      />
                      <font-awesome-icon :icon="['fas', 'times-circle']" v-else />8 Character
                    </li>
                    <li :class="{'text-success':containsUppercase}">
                      <font-awesome-icon
                        :icon="['fas', 'check-circle']"
                        v-if="containsUppercase"
                        class="success"
                      />
                      <font-awesome-icon :icon="['fas', 'times-circle']" v-else />Contains uppercase
                    </li>
                    <li :class="{'text-success':containsSpecialCharacter}">
                      <font-awesome-icon
                        :icon="['fas', 'check-circle']"
                        v-if="containsSpecialCharacter"
                        class="success"
                      />
                      <font-awesome-icon :icon="['fas', 'times-circle']" v-else />Contains special characters
                    </li>
                  </ul>
                </div>
                <div class="text-center">
                  <button
                    type="button"
                    class="btn btn-primary my-4"
                    :class="{'disabled' : !formFilled}"
                  >Register</button>
                </div>
              </form>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-6">
              <a href="#" class="text-light">
                <small>Forgot password?</small>
              </a>
            </div>
            <div class="col-6 text-right">
              <router-link :to="{name :'login'}">
                <small>Login</small>
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
  name: "Regsiter",
  data() {
    return {
      name: null,
      email: null,
      password: null,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      nameTyping: null,
      passwordTyping: false,
      emailTyping: false,
      nameLength: 0,
      passwordLength: 0,
      containsEightCharacters: false,
      containsUppercase: false,
      containsSpecialCharacter: false,
      validEmail: null,
      validName: null,
      validPassword: false,
      formFilled: false,
      viewingPassword: false,
      passwordType: "password"
    };
  },
  methods: {
    checkName() {
      this.nameLength = this.name.length;
      if (this.nameLength > 3) {
        this.validName = true;
      } else {
        this.validName = false;
      }
    },
    checkEmail() {
      this.validEmail = this.reg.test(this.email);
    },
    reveal() {
      this.passwordTyping = true;
    },
    viewPassword() {
      this.viewingPassword = !this.viewingPassword;
      if (this.passwordType === "password") {
        this.passwordType = "text";
      } else {
        this.passwordType = "password";
      }
    },
    checkPassword() {
      this.passwordLength = this.password.length;
      const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

      if (this.passwordLength > 7) {
        this.containsEightCharacters = true;
      } else {
        this.containsEightCharacters = false;
      }

      this.containsUppercase = /[A-Z]/.test(this.password);
      this.containsSpecialCharacter = format.test(this.password);

      if (
        this.containsEightCharacters === true &&
        this.containsSpecialCharacter === true &&
        this.containsUppercase === true
      ) {
        this.validPassword = true;
      } else {
        this.validPassword = false;
      }
      if (
        this.validPassword == true &&
        this.validName == true &&
        this.validEmail == true
      ) {
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
.register {
  .card {
    background: $color-tertary;
  }
  .password-checker {
    font-size: 14px;
    .success {
      color: $color-success;
    }
    svg {
      font-size: 12px;
      margin-right: 8px;
      margin-top: -2px;
    }
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
  .disabled {
    pointer-events: none;
    cursor: disabled !important;
  }
}
</style>
