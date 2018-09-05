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

    <div class="card">
      <div class="title">Two-Factor Authentication</div>

      <div class="totp">
        <span>Not configured</span>
        <div class="btn main">Setup</div>
      </div>
    </div>

    <div class="card">
      <div class="title">Two-Factor Authentication</div>

      <div class="totp">
        <div class="spinner"/>
      </div>
    </div>

    <div class="card">
      <div class="title">Two-Factor Authentication</div>

      <div class="totp">
        <div class="svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" shape-rendering="crispEdges"><path fill="#ffffff" d="M0 0h41v41H0z"/><path stroke="#000000" d="M0 0.5h7m1 0h1m1 0h1m2 0h1m3 0h1m1 0h1m1 0h1m2 0h2m1 0h2m1 0h2m2 0h7M0 1.5h1m5 0h1m1 0h2m2 0h1m1 0h1m3 0h2m5 0h1m2 0h2m1 0h1m2 0h1m5 0h1M0 2.5h1m1 0h3m1 0h1m3 0h2m4 0h2m1 0h1m3 0h2m3 0h1m5 0h1m1 0h3m1 0h1M0 3.5h1m1 0h3m1 0h1m1 0h2m1 0h1m2 0h1m1 0h1m2 0h1m1 0h1m1 0h1m2 0h2m2 0h1m3 0h1m1 0h3m1 0h1M0 4.5h1m1 0h3m1 0h1m2 0h1m1 0h1m1 0h3m1 0h1m2 0h3m1 0h1m1 0h3m2 0h1m2 0h1m1 0h3m1 0h1M0 5.5h1m5 0h1m2 0h2m4 0h1m1 0h1m1 0h2m3 0h2m3 0h4m1 0h1m5 0h1M0 6.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M8 7.5h1m2 0h2m1 0h2m1 0h1m2 0h1m5 0h5m1 0h1M0 8.5h1m1 0h2m1 0h3m1 0h1m1 0h1m2 0h8m5 0h1m1 0h1m1 0h1m2 0h1m2 0h1m1 0h2M0 9.5h5m2 0h1m1 0h1m1 0h1m3 0h1m2 0h4m1 0h1m1 0h1m2 0h4m3 0h4M0 10.5h1m5 0h1m2 0h1m4 0h2m4 0h2m1 0h2m4 0h1m2 0h1m4 0h1M1 11.5h1m1 0h2m2 0h3m2 0h2m1 0h1m1 0h4m1 0h1m1 0h3m3 0h1m8 0h2M0 12.5h1m2 0h1m1 0h2m6 0h1m2 0h2m2 0h1m1 0h1m1 0h2m1 0h3m1 0h1m1 0h2m1 0h5M0 13.5h2m1 0h2m2 0h1m1 0h4m1 0h1m3 0h1m1 0h1m2 0h2m4 0h1m2 0h3m2 0h1M0 14.5h1m2 0h4m1 0h2m1 0h1m1 0h1m5 0h5m1 0h1m3 0h1m1 0h4m4 0h1M2 15.5h4m3 0h1m1 0h1m1 0h1m2 0h2m3 0h1m1 0h1m3 0h1m2 0h1m4 0h3m2 0h1M0 16.5h1m3 0h3m2 0h2m3 0h2m8 0h1m1 0h1m1 0h2m1 0h3m2 0h1m3 0h1M0 17.5h1m1 0h1m1 0h2m2 0h3m2 0h1m1 0h1m2 0h1m2 0h2m1 0h3m2 0h1m2 0h2m1 0h1m1 0h2M0 18.5h2m1 0h1m1 0h2m3 0h2m1 0h3m2 0h2m2 0h2m3 0h1m1 0h1m1 0h3m1 0h2M2 19.5h1m1 0h1m2 0h1m1 0h1m3 0h6m2 0h1m1 0h2m7 0h1m2 0h1m1 0h3M2 20.5h1m2 0h2m1 0h3m3 0h1m1 0h1m2 0h1m3 0h1m1 0h1m2 0h1m1 0h1m2 0h4m2 0h1M2 21.5h2m1 0h1m2 0h1m2 0h1m1 0h1m1 0h1m3 0h1m3 0h1m1 0h2m1 0h7m2 0h4M1 22.5h6m2 0h1m1 0h3m3 0h2m4 0h3m2 0h1m1 0h1m4 0h2m2 0h1M0 23.5h2m3 0h1m1 0h1m4 0h2m2 0h1m1 0h3m3 0h5m1 0h3m1 0h2m1 0h4M3 24.5h6m2 0h1m1 0h1m1 0h3m1 0h2m1 0h1m1 0h1m1 0h4m1 0h2m1 0h3m1 0h2M1 25.5h1m2 0h1m4 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1m1 0h5m1 0h4m2 0h5M0 26.5h4m1 0h6m1 0h2m5 0h1m4 0h1m1 0h1m3 0h2m1 0h2m2 0h1M4 27.5h1m3 0h1m1 0h4m1 0h1m1 0h1m1 0h1m1 0h2m3 0h1m1 0h1m1 0h1m2 0h5m1 0h2M0 28.5h4m2 0h1m1 0h4m2 0h1m1 0h1m2 0h4m1 0h2m1 0h1m3 0h1m4 0h2M1 29.5h1m1 0h3m1 0h1m1 0h5m1 0h3m1 0h2m4 0h2m2 0h1m3 0h1m1 0h1M0 30.5h1m3 0h3m5 0h3m2 0h3m2 0h1m2 0h2m2 0h1m1 0h1m4 0h2m2 0h1M2 31.5h1m2 0h1m2 0h1m1 0h3m6 0h1m2 0h2m3 0h4m6 0h2m1 0h1M1 32.5h2m2 0h2m7 0h2m1 0h1m2 0h1m1 0h1m2 0h3m1 0h8m1 0h3M8 33.5h1m2 0h1m2 0h1m2 0h1m1 0h1m1 0h5m4 0h1m1 0h1m3 0h1m2 0h2M0 34.5h7m1 0h3m2 0h1m1 0h1m2 0h1m4 0h1m1 0h1m1 0h3m1 0h2m1 0h1m1 0h1m2 0h1M0 35.5h1m5 0h1m1 0h1m1 0h1m1 0h3m1 0h2m6 0h1m2 0h2m1 0h3m3 0h5M0 36.5h1m1 0h3m1 0h1m3 0h1m1 0h1m3 0h1m3 0h2m2 0h1m1 0h1m3 0h9M0 37.5h1m1 0h3m1 0h1m1 0h1m1 0h1m2 0h1m5 0h2m1 0h1m1 0h1m1 0h8m1 0h2m1 0h3M0 38.5h1m1 0h3m1 0h1m1 0h1m3 0h1m1 0h1m2 0h3m1 0h2m1 0h2m2 0h1m1 0h2m3 0h1m1 0h1m2 0h1M0 39.5h1m5 0h1m4 0h3m1 0h2m3 0h2m1 0h2m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h2M0 40.5h7m1 0h2m2 0h3m6 0h1m1 0h1m1 0h1m1 0h1m2 0h6m1 0h1m1 0h1"/></svg>
        </div>
        <div class="text">
          <div>1. Download an authenticator app from <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2" target="_blank" rel="noopener noreferrer">Google Play</a> or the <a href="https://itunes.apple.com/us/app/google-authenticator/id388497605" target="_blank" rel="noopener noreferrer">App Store</a>.</div>
          <div>2. Scan the QR code, or enter this secret.</div>
          <pre>PAYX QOKO F44T A5KK MRJX ETCE LA3F QNSZ</pre>
          <div>3. Verify the 6-digit code you see in the app.</div>
          <form>
            <input class="input" maxlength="6" size="6"/>
            <input type="submit" class="btn main green" value="Verify"/>
          </form>
        </div>
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
    padding-top: 0;
  }

  .card{
    display: block;
    border: 1px solid #dadada;
    border-radius: 8px;
    max-width: 35rem;
    box-sizing: border-box;
    margin-top: 1em;

    .title{
      padding: 0.5em 1em;
      border-bottom: 1px solid #dadada;
      font-size: 18px;
    }
  }

  .token{
    display: grid;
    grid-template-areas: 'browser time' 'os action';
    grid-row-gap: 0.25em;
    grid-column-gap: 1em;
    padding: 0.5em 1em;
    border-bottom: 1px solid #dadada;
    font-size: 16px;

    &:last-child{
      border-bottom: 0;
    }

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

  .totp{
    display: flex;
    flex-wrap: wrap;
    padding: 1em;

    .btn{
      padding-top: 0.5em;
      padding-bottom: 0.5em;
      margin-left: auto;
    }

    pre{
      margin: 0;
      display: inline-block;
      padding: 2px 5px;
      border-radius: 3px;
      border: 1px solid rgba(#000, 0.5);
      white-space: pre-wrap;
      font-size: 14px;
      user-select: all;
    }

    .text{
      flex: 1 0 300px;

      > div:not(:first-child){
        margin-top: 0.75em;
      }
      
      pre{
        margin-top: 0.5em;
      }
    }

    .svg{
      margin: 0 auto 1em auto;
    }

    svg{
      position: relative;
      height: 10em;
      min-width: 10em;
      margin-right: 1em;
      box-sizing: border-box;
    }

    form{
      flex-basis: 100%;
      padding: 0;
      width: auto;
      display: flex;
      align-items: center;
      margin: 0.5em 0 0 0;

      .input{
        padding-top: 0.5em;
        padding-bottom: 0.5em;
        font-size: 14px;
        height: 34px;
        margin: 0;
      }

      .btn{
        margin-left: 1em;
      }
    }
  }
</style>

