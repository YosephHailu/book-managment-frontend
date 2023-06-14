<template>
  <main class="login-box">
    <form @submit.prevent="registerBook">
      <div style="text-align:center; margin-bottom: 20px">
        <h3>Book Registration Form</h3>
        <p>Please enter all fields below!</p>
      </div>

      <hr style="margin: 20px; border: 1px solid hsla(160, 100%, 37%, 0.1);">

      <div class="user-box">
        <input type="text" name="" v-model="book.title" />
        <label style="margin-bottom: 0px;">Title</label>
        <small class="text-red" v-if="errors?.title">{{ errors?.title[0] }}</small>
      </div>
      <div class="user-box">
        <input type="text" v-model="book.author" />
        <label>Author</label>
        <small class="text-red" v-if="errors?.author">{{ errors?.author[0] }}</small>
      </div>
      <div class="user-box">
        <input type="text" v-model="book.genre" />
        <label>Genre</label>
        <small class="text-red" v-if="errors?.genre">{{ errors?.genre[0] }}</small>
      </div>
      <div class="user-box">
        <input
          type="file"
          v-on:change="onCoverImageChange"
          placeholder="cover_image"
          accept="image/*"
        />
        <label>Cover Image</label>
        <small class="text-red" v-if="errors?.cover_image">{{ errors?.cover_image[0] }}</small>
      </div>
      <div class="user-box">
        <input type="number" v-model="book.publication_year" step="any" />
        <label>Publication Year</label>
        <small class="text-red" v-if="errors?.publication_year">{{ errors?.publication_year[0] }}</small>
      </div>
      <div class="user-box">
        <textarea type="text" placeholder="Summery" v-model="book.summery"></textarea>
        <small class="text-red" v-if="errors?.summery">{{ errors?.summery[0] }}</small>
      </div>
      <button>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </button>
    </form>
  </main>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router';

export default {
  name: 'BookSContainer',
  setup() {
    let book = ref({})
    let errors = ref({})
    const router = useRouter();

    const registerBook = () => {
      axios
        .post('/books', book.value, {
          headers: { 'Content-Type': `multipart/form-data;` }
        })
        .then(() => {
          router.push('/');
        }).catch(error => {
          console.log(error.response.data)
          errors.value = error.response.data.data
        }) 
    }

    const onCoverImageChange = ($event) => {
      const target = $event.target
      if (target && target.files) {
        book.value.cover_image = target.files[0]
      }
    }

    return { book, errors, registerBook, onCoverImageChange }
  }
}
</script>

<style>
.login-box {
  margin: auto;
  padding: 40px;
  /* box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6); */
  border: 1px solid hsla(160, 100%, 37%, 0.5);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  text-align: center;
}

.login-box .user-box {
  position: relative;
  margin-bottom: 30px;
}

.login-box .user-box input, .login-box .user-box textarea {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #000;
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  background: #fff;
}
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #000;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #000;
  font-size: 12px;
}

.login-box form button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #000;
  background: #fff;
  border: none;
  float: right;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 10px;
  letter-spacing: 4px;
}

.login-box button:hover {
  background: #000;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}

.login-box button span {
  position: absolute;
  display: block;
}

.login-box button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #000);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.login-box button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #000);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.login-box button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #000);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.login-box button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #000);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>
