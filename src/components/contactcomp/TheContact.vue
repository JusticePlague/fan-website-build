<script>
const WEB3FORMS_ACCESS_KEY = "31ad27a4-5743-4ac1-975b-1581dc702cf2";

export default {
  data() {
    return {
      name: "Enter Name Here",
      email: "Enter Email Here",
      message: "How can I help you?",
    };
  },
  methods: {
    async submitForm() {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: this.name,
          email: this.email,
          message: this.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        console.log(result)
        alert("you did it!");
      }
    },
  },
};
</script>

<template>
  <div class="banners">
    <h1 class="colorBar">SO LONG AND GOODNIGHTTTTT</h1>
  </div>

  <main>
    <form @submit.prevent="submitForm">
      <div class="name-input">
        <label for="name">Name</label>
        <input type="text" name="name" v-model="name" />
      </div>

      <div class="email-input">
        <label for="email">Email</label>
        <input type="email" name="email" v-model="email" />
      </div>

      <div class="message-input">
        <label for="message">Send me a note</label>
        <br />
        <textarea name="message" v-model="message"></textarea>
      </div>

      <div class="sub-button">
        <button type="submit">Send Message</button>
      </div>
    </form>
  </main>
</template>
  
<style scoped>
form {
  background: var(--bg-2);
  padding: 5vh;
  min-width: fit-content;
  border: var(--border) solid 5px;
  border-radius: 50px;
}

input {
  padding: 10px;
  width: 50%;
  min-width: 200px;
  max-width: 500px;
}

textarea {
  padding: 10px;
  width: 50%;
  min-width: 200px;
  max-width: 500px;
  height: 15vh;
}

button {
  padding: 10px;
  margin: 1vh;
}

label {
  color: var(--text-3);
  display: block;
  font-weight: bold;
  margin-bottom: -2vh;
}
</style>