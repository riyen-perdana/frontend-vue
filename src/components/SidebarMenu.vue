<script setup>
//import useRouter from vue router
import { useRouter } from 'vue-router';

//inisialisasi vue router on Composition API
const router = useRouter();

//import js-cookies
import Cookie from 'js-cookie';

//logout
const logout = () => {
    //remove token and user on cookies
    Cookie.remove('token')
    Cookie.remove('user')

    //redirect to login
    router.push({ name: 'login' })
}

</script>

<template>
    <div class="card border-0 rounded shadow-sm">
        <div class="card-header">
            MAIN MENU
        </div>
        <div class="card-body">
            <div class="list-group">
                <router-link :to="{ name: 'dashboard' }" class="list-group-item list-group-item-action">Dashboard</router-link>
                <router-link :to="{ name: 'users' }" class="list-group-item list-group-item-action">Users</router-link>
                <a href="#" @click="logout()" class="list-group-item list-group-item-action">Logout</a>
            </div>
        </div>
    </div>
</template>