<template>
  <div class="page">
    <div class="card">
      <div class="title">Active Sessions</div>

      <div class="token" v-for="token in tokenData" v-bind:key="token.id">
        <div class="os">{{token.device.os}}</div>
        <div class="browser">{{token.device.browser}}</div>
        <div class="time">Last Accessed: {{token.lastAccessed}}</div>
        <div v-if="token.current" class="action">Current Device</div>
        <div v-else class="action btn red main" v-on:click="deleteToken(token.id)">Sign Out</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tokens: []
    }
  },

  methods: {
    deleteToken(id){
      if(!confirm('Are you sure you want to sign out of this device?')){
        return;
      }

      this.$api.delete(`/account/tokens/${encodeURIComponent(id)}`)
        .then(() => {
          // Find index of the token we just deleted
          const index = this.tokens.findIndex(token => token.id === id);

          // Remove deleted token from list
          this.tokens.splice(index, 1);
        })
        .catch(err => {
          console.error(err);
          alert('Something went wrong');
        });
    }
  },

  computed: {
    tokenData(){
      // Decode current token, get ID
      const jti = JSON.parse(atob(localStorage.authToken.split('.')[1])).jti;

      return this.tokens.map(token => {
        const data = {...token}

        // Check if the token is the one we're currently authenticated with
        data.current = token.id === jti;

        const time = new Date(token.lastAccessed);
        const month = time.getMonth();
        const day = time.getDate();
        const year = time.getFullYear();
        let hour = time.getHours();
        const ampm = hour >= 12 ? 'PM' : 'AM';
        hour = hour % 12;
        hour = hour ? hour : 12;
        let minutes = time.getMinutes();
        minutes = minutes < 10 ? '0'+minutes : minutes;

        // Check if we're in the same year
        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ]

        data.lastAccessed = `${months[month]} ${day}${new Date().getFullYear() === year ? '' : ' '+year}, ${hour}:${minutes} ${ampm}`;
        return data;
      });
    }
  },

  created(){
    // Make API call to get tokens
    this.$api.get('/account/tokens')
      .then(res => {
        this.tokens = res.data;
      })
      .catch(err => {
        alert('Something went wrong');
        console.error(err);
      });
  }
}
</script>

<style lang="scss" scoped>
  .page{
    box-sizing: border-box;
    padding: 1em;
  }

  .card{
    display: inline-block;
    border: 1px solid #dadada;
    border-radius: 8px;
    box-sizing: border-box;

    .title{
      padding: 0.5em 1em;
      font-size: 18px;
    }

    .token{
      display: grid;
      grid-template-areas: "browser time" "os action";
      grid-row-gap: 0.25em;
      grid-column-gap: 1em;
      padding: 0.5em 1em;
      border-top: 1px solid #dadada;
      font-size: 16px;

      *{
        padding: 0.25em;
      }

      .os{
        grid-area: os;
        white-space: nowrap;
      }

      .browser{
        grid-area: browser;
      }

      .time{
        grid-area: time;
        font-size: 14px;
        color: #565656;
        justify-self: end;
      }

      .action{
        grid-area: action;
        justify-self: end;

        &.btn{
          padding-left: 1em;
          padding-right: 1em;
        }

        &:not(.btn){
          font-size: 15px;
          color: #565656;
        }
      }
    }
  }
</style>

