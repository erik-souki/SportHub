<template>
  <div class="p-4">
    <nav class="flex gap-4 mb-4">
      <router-link to="/">Home</router-link>
      <router-link to="/bets">Mercado</router-link>
      <router-link to="/my-bets">Minhas Apostas</router-link>
      <router-link to="/profile">Perfil</router-link>
    </nav>
    <router-view />
  </div>
</template>
