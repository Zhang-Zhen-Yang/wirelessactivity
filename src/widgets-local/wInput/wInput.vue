/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:44:26 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-03 10:06:18
 */
// input
<template>
    
    <input
      :type="type"
      class="content-item-input"
      :value="value"
      @input="input"
      @focus="focus"
      v-if="type == 'number'"
      :min="min"
      :step="step"
      :placeholder="placeholder">
    <div v-else>
      <input 
        :type="type"
        class="content-item-input"
        :value="value"
        @input="input"
        @focus="focus"
        :placeholder="placeholder">
    </div>
</template>

<script>
export default {
  name: 'w-input',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    step: {
      type: [Number, String],
      default: 1,
    },
    min: {
      type: [Number, String],
      default: 0,
    },
    placeholder: {
      type: String,
      default: '',
    }
  },
  data () {
    return {
    }
  },
  computed: {

  },
  methods: {
    input(e) {
      this.$emit('input', e.target.value);
    },
    focus() {
      this.$store.dispatch('addStep');
    }
  },
  created() {
  }
}
</script>

<style lang="scss">
</style>
