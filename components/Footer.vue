<template>
  <footer>
    <div class="container flex">
      <div class="card">
          <a
            href="https://github.com/Azincourt-tech/moviesapp" icon>
            <img
              class="github"
              height="46px"
              src="~/assets/img/github.svg"
              alt=""
            />
          </a>
          <a href="https://t.me/waddles" class="icon-telegram" icon>
            <img
              class="telegram"
              height="46px"
              src="../assets/img/telegram.svg"
              alt=""
            />
            
          </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComp',
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: end;
  padding: 0.5rem;
  background-color: aqua;
  
  .card{
    width: 20%;
    align-items: flex-end;
    
    a{
        display: inline-block;
        padding: 1rem;
    }
  }
}
</style>
