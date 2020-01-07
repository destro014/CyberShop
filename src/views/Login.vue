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
                <div class="form-group mb-3">
                  <div class="input-group input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <font-awesome-icon :icon="['fas', 'envelope']" />
                      </span>
                    </div>
                    <input class="form-control" placeholder="Email" type="email" />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <font-awesome-icon :icon="['fas', 'lock']" />
                      </span>
                    </div>
                    <input class="form-control" placeholder="Password" type="password" />
                  </div>
                </div>
                <div class="text-center">
                  <button type="button" class="btn btn-primary my-4">Sign in</button>
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
              <a href="#" class="text-light">
                <small>Create new account</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style lang="scss" scoped>
.login {
  .card {
    background: $color-tertary;
  }
}
</style>
