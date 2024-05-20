<template>
  <button v-bind:class="buttonClasses"><slot /></button>
</template>
<script>
import CN from "classnames";

export default {
  name: "UIButton",
  props: ["variant", "disabled", "size"],

  computed: {
    buttonClasses() {
      return CN(this.variant, {
        disabled: this.disabled === true,
        large: this.size === "large",
        small: this.size === "small",
      });
    },
  },
};
</script>
<style scoped lang="scss">
button {
  border: none;
  background: none;
  cursor: pointer;
  padding: 7px 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contained {
  background: orange;
  color: #fff;
}

.outlined {
  color: orange;
  border: 1px solid orange;
}

.text {
  color: orange;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: default;
}

.large {
  padding: 12px 25px;
  font-size: 16px;
}

.small {
  padding: 4px 8px;
  font-size: 10px;
}
</style>
