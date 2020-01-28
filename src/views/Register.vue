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
              <form @submit="registerUser">
                <div
                  class="form-group mb-3"
                  :class="{'has-success' : validName, 'has-danger':nameTyping && !validName, 'focused' : nameFocus}"
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
                      @focus="onNameFocus"
                      @blur="onNameBlur"
                      :class="{'is-valid' :validName,'is-invalid':nameTyping && !validName}"
                    />
                  </div>
                </div>
                <div
                  class="form-group mb-3"
                  :class="{'has-success' : validEmail, 'has-danger':emailTyping && !validEmail,'focused' : emailFocus}"
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
                      @focus="onEmailFocus"
                      @blur="onEmailBlur"
                      :class="{'is-valid' :validEmail,'is-invalid':emailTyping && !validEmail}"
                    />
                  </div>
                </div>
                <div
                  class="form-group mb-3"
                  :class="{'has-success' : validNumber, 'has-danger':numberTyping && !validNumber, 'focused' : numberFocus}"
                >
                  <div class="input-group input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <font-awesome-icon :icon="['fas', 'phone-alt']" />
                      </span>
                    </div>
                    <input
                      class="form-control"
                      placeholder="Phone Number"
                      type="number"
                      v-model="number"
                      @input="checkNumber"
                      @focus="onNumberFocus"
                      @blur="onNumberBlur"
                      :class="{'is-valid' :validNumber,'is-invalid':numberTyping && !validNumber}"
                    />
                  </div>
                </div>
                <div
                  class="form-group has-icon mb-3"
                  :class="{'has-success' : validPassword, 'has-danger' : passwordTyping && !validPassword,'focused' : passwordFocus}"
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
                      @focus="onPasswordFocus"
                      @blur="onPasswordBlur"
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
                    type="submit"
                    class="btn btn-primary my-4"
                    :class="{'disabled' : !formFilled || registering}"
                  >
                    <span v-if="registering">
                      <font-awesome-icon :icon="['fas', 'spinner']" pulse />
                    </span>
                    <span v-else>Register</span>
                  </button>
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
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "Regsiter",
  data() {
    return {
      name: null,
      email: null,
      number: null,
      password: null,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      nameTyping: false,
      emailTyping: false,
      numberTyping: false,
      passwordTyping: false,
      nameFocus: false,
      emailFocus: false,
      numberFocus: false,
      passwordFocus: false,
      nameLength: 0,
      passwordLength: 0,
      numberLength: 0,
      containsEightCharacters: false,
      containsUppercase: false,
      containsSpecialCharacter: false,
      validEmail: null,
      validName: null,
      validNumber: null,
      validPassword: false,
      formFilled: false,
      viewingPassword: false,
      passwordType: "password",
      formData: null,
      registering: false
    };
  },
  methods: {
    ...mapActions(["register"]),

    onNameFocus() {
      this.nameTyping = true;
      this.nameFocus = true;
    },
    onEmailFocus() {
      this.emailTyping = true;
      this.emailFocus = true;
    },
    onNumberFocus() {
      this.numberTyping = true;
      this.numberFocus = true;
    },
    onPasswordFocus() {
      this.passwordTyping = true;
      this.passwordFocus = true;
    },
    onNameBlur() {
      this.nameTyping = false;
      this.nameFocus = false;
    },
    onEmailBlur() {
      this.emailTyping = false;
      this.emailFocus = false;
    },
    onNumberBlur() {
      this.numberTyping = false;
      this.numberFocus = false;
    },
    onPasswordBlur() {
      // this.passwordTyping = false;
      this.passwordFocus = false;
    },
    checkName() {
      this.nameLength = this.name.length;
      if (this.nameLength > 3) {
        this.validName = true;
      } else {
        this.validName = false;
      }
      this.validForm();
    },
    checkEmail() {
      this.validEmail = this.reg.test(this.email);
      this.validForm();
    },
    checkNumber() {
      this.numberLength = this.number.length;
      if (this.numberLength > 9) {
        this.validNumber = true;
        this.validForm();
      }
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
      this.validForm();
    },
    validForm() {
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
    },
    //this method is called when registration form is submitted.
    registerUser(e) {
      e.preventDefault();
      // this.registering = true;
      var userData = new FormData();
      userData.append("name", this.name);
      userData.append("email", this.email);
      userData.append("phone", this.number);
      userData.append("password", this.password);
      // this is the action from store which take neformData wUser details as parameters
      // this.userData = [this.name, this.email, this.phone, this.password];
      this.register(userData);
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
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
}
</style>
