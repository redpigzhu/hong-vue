<template>
  <form class="create-twoot-panel" @submit.prevent="createNewTwoot" :class="{ '--exceeded': newTwootCharCount > 180 }">
    <label for="newTwoot"><strong>New Twoot</strong> ({{ newTwootCharCount }}/180)</label>
    <textarea id="newTwoot" rows="4" v-model="state.newTwootContent"/>

    <div class="create-twoot-panel__submit">
      <div class="create-twoot-type">
        <label for="newTwootType"><strong>Type: </strong></label>
        <select id="newTwootType" v-model="state.selectedTwootType">
          <option :value="aoption.value" v-for="(aoption, index) in state.twootTypes" :key="index">
            {{ aoption.name }}
          </option>
        </select>
      </div>

      <button :disabled="state.isDisabled">
        Twoot It!
      </button>
    </div>
  </form>
</template>

<script>
import {reactive, computed} from 'vue';
export default {
  name: "CreateTwootPanel",
  setup(props, ctx){
    const state=reactive({
      newTwootContent: '',
      selectedTwootType: 'instant', 
      twootTypes: [
        {value:'draft',name:'Draft'},
        {value:'instant', name:'Instant Twoot'}
      ]
    })

    const newTwootCharCount = computed(() => state.newTwootContent.length) //like call back
    const isDisabled = computed(()=> state.newTwootContent.length > 180 || state.selectedTwootType =='draft')
  
    function createNewTwoot() {
      if(state.newTwootContent && state.selectedTwootType !=='draft' && state.newTwootContent.length<=180)
      {
        ctx.emit("add-twoot", state.newTwootContent);
        state.newTwootContent='';
      }
    }
  
    return {
      state, newTwootCharCount, isDisabled, createNewTwoot
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