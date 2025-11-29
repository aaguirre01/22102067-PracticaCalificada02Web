<template>
  <div>
    <DigimonFilter
      @filtrarNombre="filtrarPorNombre"
      @filtrarNivel="filtrarPorNivel"
    />

    <div class="cards-container">
      <div class="card" v-for="d in digimonsFiltrados" :key="d.name">
        <img :src="d.img" />
        <h3>{{ d.name }}</h3>
        <p>Nivel: {{ d.level }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import DigimonFilter from "./DigimonFilter.vue"; 

export default {
  name: "DigimonList",

  components: { DigimonFilter },

  data() {
    return {
      digimons: [],
      digimonsFiltrados: [],
      filtroNombre: "",
      filtroNivel: "",
    };
  },

  async created() {
    const res = await fetch("https://digimon-api.vercel.app/api/digimon");
    this.digimons = await res.json();
    this.digimonsFiltrados = this.digimons;
  },

  methods: {
    filtrarPorNombre(nombre) {
      this.filtroNombre = nombre;
      this.aplicarFiltros();
    },

    filtrarPorNivel(nivel) {
      this.filtroNivel = nivel;
      this.aplicarFiltros();
    },

    aplicarFiltros() {
      this.digimonsFiltrados = this.digimons.filter((d) => {
        const coincideNombre = d.name
          .toLowerCase()
          .includes(this.filtroNombre.toLowerCase());
        const coincideNivel = this.filtroNivel
          ? d.level === this.filtroNivel
          : true;

        return coincideNombre && coincideNivel;
      });
    },
  },
};
</script>

<style>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  width: 200px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 12px;
  text-align: center;
}

.card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
</style>
