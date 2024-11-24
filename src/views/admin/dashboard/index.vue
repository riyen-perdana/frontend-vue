<script setup>

//import ref dan onMounted from vue
import { ref, onMounted } from 'vue'

//import js-cookie
import Cookies from 'js-cookie'

//init user
const user = ref();

onMounted(() => {

    //get user from cookies
    user.value = JSON.parse(Cookies.get('user'))

})


//import sidebar component
import SidebarMenu from '../../../components/SidebarMenu.vue'

</script>

<template>
    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-md-3">
                <SidebarMenu />
            </div>
            <div class="col-md-9">
                <div class="card border-0 rounded shadow-sm">
                    <div class="card-header">
                        DASHBOARD
                    </div>
                    <div class="card-body">
                        Selamat Datang, <strong>{{ user?.name }}</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>