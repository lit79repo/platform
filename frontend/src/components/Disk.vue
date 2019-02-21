<template>
<div>
    <md-empty-state
      md-icon="save"
      md-label="">
    </md-empty-state>
          <br>
    <iframe class="fullpage" src="/platform/fm" frameborder="0"></iframe>
</div>    
</template>
<style scoped>
iframe.fullpage{
  width: 85%;
  height: 50%;
  overflow: auto;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  border: solid black 1px;
  border-radius: 4px;
}
</style>
