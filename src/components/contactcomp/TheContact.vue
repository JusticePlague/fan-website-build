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
        console.log(result);
      }
    },
  },
};
</script>

<template>
    <form @submit.prevent="submitForm">
        <div class="name-input">
            <input type="text" name="name" v-model="name"/>
        </div>

        <div class="email-input">
            <input type="email" name="email"  v-model="email"/> 
        </div>

        <div class="message-input">
            <textarea name="message" v-model="message"></textarea>
        </div>
      
      
      <button type="submit">Send Message</button>
    </form>
</template>
  
<style scoped>
</style>