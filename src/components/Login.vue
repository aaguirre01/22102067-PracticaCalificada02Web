<template>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>

    <form @submit.prevent="loginUser">
      <div class="form-group">
        <label>Email:</label>
        <input type="email" v-model="email" required />
      </div>

      <div class="form-group">
        <label>Contraseña:</label>
        <input type="password" v-model="password" required />
      </div>

      <button type="submit">Ingresar</button>

      <p class="error" v-if="errorMsg">{{ errorMsg }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",   // 👈 multi-word para evitar warning

  data() {
    return {
      email: "",
      password: "",
      errorMsg: "",
    };
  },

  methods: {
    async loginUser() {
      this.errorMsg = "";

      try {
        const res = await fetch(
          "https://storedb-api.onrender.com/node-api/users/signin",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: this.email,
              password: this.password,
            }),
          }
        );

        const data = await res.json();

        if (!res.ok) {
          this.errorMsg = data.message || "Credenciales incorrectas";
          return;
        }

        // Guardar token
        localStorage.setItem("token", data.token);

        // Ir a Digimons
        this.$router.push("/digimons");

      } catch {
        // 👈 catch corregido sin (err)
        this.errorMsg = "Error de conexión.";
      }
    },
  },
};
</script>

<style>
.login-container {
  max-width: 350px;
  margin: 50px auto;
  padding: 25px;
  border: 1px solid #ccc;
  border-radius: 12px;
}

.form-group {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 12px;
  background: #4b7bec;
  border: none;
  border-radius: 6px;
  color: white;
}

.error {
  margin-top: 10px;
  color: red;
}
</style>
