<template>
  <router-view/>
</template>

<script>
export default {
  sidebar: {
    links: [
      {
        to: 'account_personalize',
        label: 'Personalize'
      },
      {
        to: 'account_security',
        label: 'Security'
      },
      {
        to: 'account_data',
        label: 'Data'
      },
      {
        to: 'account_billing',
        label: 'Billing'
      }
    ]
  }
}
</script>
