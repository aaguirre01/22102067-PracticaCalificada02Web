<template>
  <div class="filters">
    <input
      type="text"
      placeholder="Filtrar por nombre"
      v-model="nombre"
      @input="$emit('filtrarNombre', nombre)"
    />

    <select v-model="nivel" @change="$emit('filtrarNivel', nivel)">
      <option value="">Todos los niveles</option>
      <option value="Fresh">Fresh</option>
      <option value="In Training">In Training</option>
      <option value="Rookie">Rookie</option>
      <option value="Champion">Champion</option>
      <option value="Ultimate">Ultimate</option>
      <option value="Mega">Mega</option> //hfhfhhdhddjd
    </select>
  </div>
</template>

<script>
export default {
  name: "DigimonFilter",
  data() {
    return {
      nombre: "",
      nivel: "",
    };
  },
};
</script>

<style>
.filters {
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
}

input,
select {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
</style>
