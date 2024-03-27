<template>
  <section class="box-section container" ref="main" id="projects">
    <div class="box-wrp" ref="wrp" :style="{ '--gap': gap + 'px' }">
      <div
        class="box hover-text-one"
        :style="{ '--boxWidth': boxWidth + 'px' }"
        v-for="(frame, idx) in framesList"
        :key="'frame' + idx"
      >
        <figure class="effect-text-four">
          <img :src="frame.image" alt="" />
          <figcaption>
            <h3 class="title">{{ frame.title }}</h3>
            <a :href="frame.link">{{ $t("studyCase") }} &#8594;</a>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default {
  data() {
    return {
      framesList: [
        {
          title: "HomeState",
          link: "https://iradmit.github.io/bprunsk56/",
          text: "",
          image:
            "https://budgetrf.ru/wp-content/uploads/2023/05/agenstvo-nedvizhimosti.jpeg",
        },
        {
          title: "CreateX",
          link: "https://iradmit.github.io/createX/",
          text: "",
          image:
            "https://f.partnerkin.com/uploads/storage/files/file_1622032176.jpg",
        },
        {
          title: "ToDo List",
          link: "https://iradmit.github.io/todoList/",
          text: "",
          image:
            "https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg",
        },

        {
          title: "Comics",
          link: "https://iradmit.github.io/comicsApp/",
          text: "",
          image:
            "https://www.biysk-liceum.ru/odarennie-deti/proekty/bertova_komix/images/history6.jpg",
        },

        {
          title: "3D Parallax",
          link: "https://iradmit.github.io/3D-paralax/",
          text: "",
          image:
            "https://орфографика.рф/800/600/https/s3.amazonaws.com/pbblogassets/uploads/2017/06/10130141/Parallax.jpg",
        },

        {
          title: "Hogwarts",
          link: "https://iradmit.github.io/hogwarts/",
          text: "",
          image: "https://v1.popcornnews.ru/k2/news/1200/upload/AbQWau.jpg",
        },
        {
          title: "Gallery",
          link: "https://iradmit.github.io/gallery/",
          text: "",
          image: "https://s.44.ua/section/newsIcon/upload/images/news/icon/000/052/842/darya-tryfanava-ucnagwn4efu-unsplash_5fca32b7c47da.jpg",
        },
      ],
      boxesLength: null,
      boxWidth: 800,
      gap: 100,
    };
  },
  computed: {
    width() {
      return this.boxesLength * this.boxWidth;
    },
  },
  mounted() {
    if (window.innerWidth < 880) this.boxWidth = 500;
    if (window.innerWidth < 550) this.boxWidth = 350;

    if (window.innerWidth < 650) this.gap = 60;

    const main = this.$refs.main,
      wrp = this.$refs.wrp;
    this.boxesLength = wrp.querySelectorAll(".box").length;
    const elWidth = this.width + this.gap * (this.boxesLength - 1);

    const totalWidth = elWidth - window.innerWidth + 120;

    gsap.to(wrp, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        start: "top top",
        scrub: true,
        pin: true,
        trigger: main,
        end: this.width,
      },
    });
  },
};
</script>

<style lang="scss" scoped>
figure {
  margin: 0;
  max-width: 800px;
  width: 100%;
}
section {
  height: 100vh;
  background-color: #fff;
  overflow: hidden;
  width: 100vw;

  &.box-section {
    background-color: #0c0c0c;
    position: relative;
    display: flex;
    align-items: center;
    .box-wrp {
      display: flex;
      gap: var(--gap);
      // @media (max-width: 768px) {
      //   display: grid;
      //   grid-template-rows: repeat(2, 1fr);
      // }
      .box {
        width: var(--boxWidth);

        &.hover-text-one {
          overflow: hidden;
          list-style: none;
          text-align: center;
        }

        &.hover-text-one figure {
          position: relative;
          z-index: 1;
          display: inline-block;
          overflow: hidden;

          text-align: center;
        }
        &.hover-text-one figure img {
          position: relative;
          display: block;
          min-height: 100%;
        }
        &.hover-text-one figure figcaption {
          padding: 2em;
          color: #fff;
          text-transform: uppercase;
          font-size: 1.25em;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        &.hover-text-one figure figcaption::before,
        &.hover-text-one figure figcaption::after {
          pointer-events: none;
        }
        &.hover-text-one figure figcaption {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        &.hover-text-one figure h3 {
          word-spacing: -0.15em;
          font-weight: 300;
        }
        &.hover-text-one figure h3 span {
          font-weight: 800;
        }
        &.hover-text-one figure h3,
        &.hover-text-one figure a {
          margin: 0;
        }
        &.hover-text-one figure a {
          letter-spacing: 1px;
          font-size: 68.5%;
        }

        /* Эффект при наведении */
      }

      figure.effect-text-four::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 5px;
        transition: all 0.5s ease;
        width: 100%;
      }

      figure.effect-text-four figcaption {
        text-align: right;
        background-color: rgba(0, 0, 0, 0.3);
        position: relative;
        &::before {
          position: absolute;
          bottom: 0;
          left: 0;
          content: "";
          width: 100%;
          height: 0;
          background-color: rgba(0, 0, 0, 0.6);
          transition: all 0.3s;
        }
      }

      figure.effect-text-four figcaption:hover::before {
        height: 100%;
      }

      figure.effect-text-four h3,
      figure.effect-text-four a {
        position: absolute;
        right: 30px;
        left: 30px;
        padding: 10px 0;
      }
      figure.effect-text-four a {
        bottom: 30px;
        line-height: 1.5;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
      }
      figure.effect-text-four h3 {
        top: 30px;
        -webkit-transition: -webkit-transform 0.35s;
        transition: transform 0.35s;
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0);
      }
      figure.effect-text-four:hover h3 {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
      figure.effect-text-four h3::after {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 4px;
        background: #fff;
        content: "";
        -webkit-transform: translate3d(0, 40px, 0);
        transform: translate3d(0, 40px, 0);
      }
      figure.effect-text-four h3::after,
      figure.effect-text-four a {
        opacity: 0;
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.35s, transform 0.35s;
      }
      figure.effect-text-four:hover h3::after,
      figure.effect-text-four:hover a {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      img {
        width: 100%;
        height: 500px;
        object-fit: cover;
        @media (max-width: 880px) {
          height: 300px;
        }
        @media (max-width: 550px) {
          height: 500px;
        }
      }
    }
  }
}
</style>
