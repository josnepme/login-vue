<template>
  <div class="input-wrap" :class="classNames">
    <label class="input-label">{{ label }}</label>
    <div class="input-box">
      <input v-model="val" :type="type">

      <div v-if="icon && icon.length > 0" class="input-icon">
        <ion-icon :name="icon"></ion-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueInput",

  props: ["label", "classes", "type", "icon"],

  data() {
    return {
      val: ""
    };
  },

  computed: {
    isEmpty() {
      return this.val.trim().length == 0 ? true : false;
    },
    classNames() {
      return (
        this.classes +
        (this.isEmpty ? " empty" : "") +
        (this.icon ? " icon" : "")
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.input-wrap {
  position: relative;
  width: 100%;
  max-width: 300px;
  height: 50px;
  overflow: hidden;

  .input-label {
    position: absolute;
    left: 0;
    top: 0px;
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: left;
    font-size: 14px;
    color: $color-primary-label;
    transition: all 400ms linear;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .input-box {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #000;

    input {
      position: absolute;
      left: 0;
      top: 20px;
      width: 100%;
      height: 25px;
      line-height: 25px;
      text-align: left;
      font-size: 20px;
      outline: none;
      border: none;
      background: transparent;
    }

    .input-icon {
      position: absolute;
      left: 0;
      top: 17px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 25px;
      color: #000;

      ion-icon {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  &.light {
    .input-box {
      border-bottom: 1px solid #fff;
    }

    .input-label {
      color: rgba(255, 255, 255, 0.5);
    }

    input {
      color: rgba(255, 255, 255, 1);
    }

    .input-icon {
      color: #fff;
    }
  }

  &.empty {
    .input-label {
      top: 20px;
      height: 25px;
      line-height: 25px;
      font-size: 20px;
    }
  }

  &.icon {
    input {
      left: 40px;
      width: calc(100% - 70px);
    }
    label {
      left: 40px;
      width: calc(100% - 70px);
    }
  }

  &.center {
    .input-label {
      text-align: center;
    }

    input {
      text-align: center;
    }
  }

  &.box {
    .input-box {
      border: 1px solid #000;

      input {
        padding-left: 5px;
        padding-right: 5px;
      }
    }

    .input-label {
      padding-left: 5px;
      padding-right: 5px;
    }
  }
}
</style>
