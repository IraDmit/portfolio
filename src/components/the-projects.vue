<template>
  <div class="container projects" id="projects">
    <div class="project-wrp" ref="main">
      <div class="frames" ref="innerWrp">
        <a
          class="frame"
          v-for="(frame, i) in framesList"
          :key="'frame' + i"
          :class="frame.position"
          :href="frame.link"
        >
          <component
            :is="frame.type !== 'text' ? frame.type : ''"
            :src="frame.src"
            autoplay
          ></component>
          <template v-if="frame.type === 'text'">
            <h2>
              {{ frame.title }}
            </h2>
            <br />
            <p>{{ frame.text }}</p>
          </template>
        </a>
      </div>
    </div>
  </div>
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
          type: "text",
          title: "HomeState",
          link: "https://iradmit.github.io/bprunsk56/",
          text: "",
        },
        {
          type: "img",
          link: "https://iradmit.github.io/bprunsk56/",
          src: "https://budgetrf.ru/wp-content/uploads/2023/05/agenstvo-nedvizhimosti.jpeg",
          position: "left",
        },
        {},
        {
          type: "text",
          title: "CreateX",
          link: "https://iradmit.github.io/createX/",
          text: "",
        },
        {
          link: "https://iradmit.github.io/createX/",
          type: "img",
          src: "https://f.partnerkin.com/uploads/storage/files/file_1622032176.jpg",
          position: "left",
        },
        {},
        {
          type: "text",
          title: "ToDo List",
          link: "https://iradmit.github.io/todoList/",
          text: "",
        },
        {
          link: "https://iradmit.github.io/todoList/",
          type: "img",
          src: "https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg",
          position: "left",
        },
        {},
        {
          type: "text",
          title: "Comics",
          link: "https://iradmit.github.io/comicsApp/",
          text: "",
        },
        {
          link: "https://iradmit.github.io/comicsApp/",
          type: "img",
          src: "https://www.biysk-liceum.ru/odarennie-deti/proekty/bertova_komix/images/history6.jpg",
          position: "left",
        },
        {},
        {
          type: "text",
          title: "3D Parallax",
          link: "https://iradmit.github.io/3D-paralax/",
          text: "",
        },
        {
          link: "https://iradmit.github.io/3D-paralax/",
          type: "img",
          src: "https://орфографика.рф/800/600/https/s3.amazonaws.com/pbblogassets/uploads/2017/06/10130141/Parallax.jpg",
          position: "left",
        },
      ],
      frames: null,
      zSpacing: -1000,
      zVals: [],
    };
  },
  computed: {
    depth() {
      return {
        "--depth":
          (Math.abs(this.zSpacing) / 2.8) * this.framesList.length + "px",
      };
    },
  },
  mounted() {
    const frames = document.querySelectorAll(".frame");
    this.zVals = Array.from({ length: frames.length }).map(
      (_, i) => i * this.zSpacing + this.zSpacing
    );

    const mainWrp = this.$refs.main,
      innerWrp = this.$refs.innerWrp;

    const scrollZ = Math.abs(this.zVals[this.zVals.length - 1]);
    gsap.to(innerWrp, {
      translateZ: scrollZ,
      scrollTrigger: {
        start: "top center",
        scrub: 2,
        pin: ".projects",
        end: `${scrollZ}`,
        trigger: mainWrp,
      },
    });

    frames.forEach((_, idx) => {
      let frame = frames[idx],
        transformZ = `translateZ(${this.zVals[idx]}px)`,
        opacity = this.zVals[idx] < this.zSpacing / -1.7 ? 1 : 0;
      frame.setAttribute(
        "style",
        `transform: ${transformZ}; opacity: ${opacity}`
      );
    });
  },
};
</script>

<style lang="scss" scoped>
:root {
  --index: calc(1vw + 1vh);
  --side-x: 26;
  --side-y: 36;
  --gutter: 30px;
}
img {
  width: calc(var(--index) * var(--side-x));
  height: calc(var(--index) * var(--side-y));
}
.wrp {
  height: var(--depth);
  font-size: calc(var(--index) * 0.8);
}
.project-wrp {
  perspective: 1000px;
  width: 100%;
  min-height: 100%;
}
.container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  .frames {
    height: 100%;
    transform-style: preserve-3d;
    .frame {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      will-change: transform;
      transition: 0.75s cubic-bezier(0.075, 0.5, 0, 1);
      transform-style: preserve-3d;

      &.left {
        &:has(video) {
          left: calc(var(--side-y) / 2 * var(--index) + var(--gutter));
        }
        left: calc(var(--side-x) / 2 * var(--index) + var(--gutter));
      }
      &.right {
        &:has(video) {
          left: calc(var(--side-y) / 2 * var(--index) + var(--gutter));
        }
        right: calc(var(--side-x) / 2 * var(--index) + var(--gutter));
      }
    }
  }
}
</style>
