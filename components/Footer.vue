<template>
  <footer>
    <div class="container">
      <div class="copyright">
        <p class="copy">&copy; Copyright Movie App - 2022</p>
      </div>
      <div class="card">
        <a href="https://github.com/Azincourt-tech" icon>
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
footer {
  background: linear-gradient(0deg, rgba(121,6,20,1) 17%, rgba(33,31,31,1) 100%);
  display: flex;
  @media (max-width: 320px) {
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    flex-direction: row;
  }

  .container {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0.5rem 0 1rem 22rem;
    @media (max-width: 320px) {
      display: flex;
      width: 100%;
      padding: 0;
    }

    @media (max-width: 500px) {
      display: flex;
      width: 100%;
      padding: 0;
    }
    @media (max-width: 750px) {
      display: flex;
      width: 80%;
      margin: 0 0 0.5rem 2rem;
      padding: 0;
    }
    @media (max-width: 1100px) {
      display: flex;
      width: 100%;
      margin: 0 0 0.5rem 2rem;
      padding: 0;
    }
    .card {
      width: 110%;
      justify-content: end;
      margin: 0.5rem 0 1rem 4em;
      @media (max-width: 320px) {
        margin: 0 0 0.5rem 2rem;
        padding: 0;
      }
      @media (max-width: 1100px) {
        margin: 0;
      }

      a {
        display: inline-block;
        align-content: space-around;
        margin: 0 0 0 2rem;
        @media (max-width: 320px) {
          margin: 0;
          display: inline-block;
          align-content: space-around;
        }
        @media (max-width: 750px) {
          margin: 0;
          display: inline-block;
          align-content: space-around;
        }
        @media (max-width: 1100px) {
          display: inline-block;
          align-content: space-around;
        }

        .telegram {
          margin: 1rem 0 0 2rem;
        }

        .github {
          margin: 1rem 0 0 2rem;
        }
      }
    }
    .copyright {
      width: 500%;
      color: rgb(196, 191, 191);
      display: inline-block;
      text-align: center;

      @media (max-width: 320px) {
        width: 50%;
        display: inline-block;
        text-align: center;
      }
      @media (max-width: 750px) {
        width: 70%;
        display: inline-block;
        text-align: center;
      }
      @media (max-width: 1100px) {
        width: 160%;
        display: inline-block;
        text-align: center;
      }
      @media (max-width: 1657px) {
        width: 160%;
        display: inline-block;
        text-align: center;
      }

      .copy {
        margin: 1rem;
        padding: 0.5rem 0 0 0;
        font-size: 24px;
        font-weight: bold;
      }
      @media (max-width: 320px) {
        font-size: 14px;
      }
      @media (max-width: 750px) {
        font-size: 14px;
      }
    }
  }
}
</style>
