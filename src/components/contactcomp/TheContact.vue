<script>
// eslint-disable-next-line no-unused-vars
import TheAlert from '/src/components/modalcomp/TheAlert.vue'
//it is used, down below, but conditionally
import ColorBar from '/src/components/TheColorBar.vue'

const WEB3FORMS_ACCESS_KEY = '31ad27a4-5743-4ac1-975b-1581dc702cf2'

export default {
  name: 'TheHome',
  components: {
    ColorBar
  },
  data() {
    return {
      title: "Contact Me!",
      name: '',
      email: '',
      message: '',
      alert: null
    }
  },
  methods: {
    async submitForm() {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: this.name,
          email: this.email,
          message: this.message
        })
      })
      const result = await response.json()
      if (result.success) {
        console.log(result)
        //alert("you did it!")
        this.alert = alert
        this.reset()
      }
    },
    async reset() {
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>

<template>

  <ColorBar :title="title" />

  <div class="announce"><h3>Please note that this is a functional contact form (even thought this entire project is currently a mess) and I will receive an email.</h3></div>

  <div class="alerting" v-if="alert">
    <TheAlert />
    <button @click="alert = null">Close</button>
  </div>

  <main>
    <form ref="contactForm" @submit.prevent="submitForm">
      <div class="name-input">
        <label for="name">Name</label>
        <input type="text" name="name" placeholder="Name" v-model="name" required />
      </div>

      <div class="email-input">
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Email" v-model="email" required />
      </div>

      <div class="message-input">
        <label for="message">Send me a note</label>
        <br />
        <textarea
          name="message"
          v-model="message"
          placeholder="How can I help you?"
          required
          minlength="10"
        ></textarea>
      </div>

      <div class="sub-button">
        <button @click="reset">Cancel</button>
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

.alerting {
  background: var(--alert-bg);
  margin-top: 1vh;
  margin-bottom: 1vh;
  padding-top: 20px;
  border-radius: 50px;
  border: var(--border) solid 5px;
}

.alerting button {
  margin-bottom: 1vh;
  margin-left: auto;
  margin-right: auto;
  color: var(--alert-button-text);
  background: var(--alert-button);
}

.alerting button:hover {
  background: var(--alert-button-hover);
  color: var(--alert-button-text-hover);
}

.announce {
  background: var(--alert-bg);
  padding: 10px;
  border: var(--border-2) solid 5px;
  border-radius: 50px;
  margin-bottom: 5px;
}

.announce h3{
  color: var(--alert-text);
}
</style>
