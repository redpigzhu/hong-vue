<template>
  <form class="create-twoot-panel" @submit.prevent="createNewTwoot" :class="{ '--exceeded': newTwootCharCount > 180 }">
    <label for="newTwoot"><strong>New Twoot</strong> ({{ newTwootCharCount }}/180)</label>
    <textarea id="newTwoot" rows="4" v-model="newTwootContent"/>

    <div class="create-twoot-panel__submit">
      <div class="create-twoot-type">
        <label for="newTwootType"><strong>Type: </strong></label>
        <select id="newTwootType" v-model="selectedTwootType">
          <option :value="aoption.value" v-for="(aoption, index) in twootTypes" :key="index">
            {{ aoption.name }}
          </option>
        </select>
      </div>

      <button :disabled="isDisabled">
        Twoot It!
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "CreateTwootPanel",
  data() {
    return {
      newTwootContent: '',
      selectedTwootType: 'instant', //default
      twootTypes: [
        {value:'draft',name:'Draft'},
        {value:'instant', name:'Instant Twoot'}
      ]
    }
  },
  computed:{
    newTwootCharCount(){
      return this.newTwootContent.length;
    },
  
    isDisabled() {
       return this.newTwootContent.length > 180
    }
  },
  methods:{
    createNewTwoot(){
      if(this.newTwootContent && this.selectedTwootType !=='draft' && this.newTwootContent.length<=180)
      {
        this.$emit("add-twoot", this.newTwootContent);
        this.newTwootContent='';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.create-twoot-panel {
  margin-top: 20px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;

  textarea {
    border: 1px solid #DFE3E8;
    border-radius: 5px;
  }

  .create-twoot-panel__submit {
    display: flex;
    justify-content: space-between;

    .create-twoot-type {
      padding: 10px 0;
    }

    button {
      padding: 5px 20px;
      margin: auto 0;
      border-radius: 5px;
      border: none;
      background-color: navy;
      color: white;
      font-weight: bold;

    }
  }

  &.--exceeded {
    color: red;
    border-color: red;

    .create-twoot-panel__submit {
      button {
        background-color: red;
        color: white;
      }
    }
  }
}
</style>