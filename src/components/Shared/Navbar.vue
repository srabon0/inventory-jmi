<template>
  <div class="navbar bg-base-200">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li tabindex="0">
            <a class="justify-between">
              Parent
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </a>
            <ul class="p-2">
              <li>
                <router-link to="/about">About </router-link>
              </li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <router-link to="/"
        ><a class="btn btn-ghost normal-case text-xl"
          >VInventory</a
        ></router-link
      >
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li>
          <router-link to="/about">About </router-link>
        </li>
        <li tabindex="0">
          <a>
            Parent
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-2 bg-base-200 z-50">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li> <router-link to="/payment">Payment </router-link></li>
      </ul>
    </div>
    <div class="navbar-end">
      
        <div class="w-28 h-8 flex items-center">
          <p v-if="!darkmode" class="mx-1">????</p>
          <input
            @change="darkmode=!darkmode"
            data-toggle-theme="corporate,business"
            data-act-class="ACTIVECLASS"
            type="checkbox"
            class="toggle toggle-warning"
          />
          <p v-if="darkmode" class="mx-1">????</p>
       
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
          </div>
        </label>
        <ul
          tabindex="0"
          class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { themeChange } from "theme-change";

export default {
  setup() {
    onMounted(() => {
      themeChange(false);
    });
  },
  data(){
    return{
        darkmode:false
    }
  }
};
</script>

<style lang="scss" scoped></style>
