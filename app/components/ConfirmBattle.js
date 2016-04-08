var React = require("react");

function ConfirmBattle(props){
  return props.isLoading === true
    ? <p>LOADING</p>
  : <p>Battle!</p>
}

module.exports = ConfirmBattle;
