<template>
  <div class="page">
    <div class="grid">
      <router-link :to="{name: 'account_personalize'}" class="item">
        <div class="icon">
          <UserIcon/>
        </div>
        <span>Personalize</span>
      </router-link>

      <router-link :to="{name: 'account_security'}" class="item">
        <div class="icon">
          <LockIcon/>
        </div>
        <span>Login & Security</span>
      </router-link>

      <router-link :to="{name: 'account_data'}" class="item">
        <div class="icon">
          <HardDriveIcon/>
        </div>
        <span>My Data</span>
      </router-link>

      <router-link :to="{name: 'account_billing'}" class="item">
        <div class="icon">
          <CreditCardIcon/>
        </div>
        <span>Billing & Payments</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { CreditCardIcon, HardDriveIcon, LockIcon, UserIcon } from 'vue-feather-icons';

export default {
  components: {
    CreditCardIcon,
    HardDriveIcon,
    LockIcon,
    UserIcon
  }
}
</script>

<style lang="scss" scoped>
  @import 'components/settings.scss';

  .grid{
    max-width: 65rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1em;
    padding: 1em;
  }

  .item{
    height: 200px;
    border: 1px solid #dadada;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: box-shadow 0.1s ease-in-out;

    .icon{
      height: 50px;
      width: 50px;
    }

    svg{
      width: 100%;
      height: 100%;
      stroke: #ccc;
      stroke-width: 1.5;
      transition: stroke 0.1s ease-in-out;
    }

    span{
      color: #555;
      margin-top: 1em;
    }

    &:hover{
      box-shadow: 0 4px 5px rgba(#000, 0.1);

      svg, span{
        stroke: $blue;
      }
    }
  }
</style>
