var USER_DATA = {
  name: "Trunks",
  username: "arielsmoraes",
  image: "http://vignette2.wikia.nocookie.net/anicrossbr/images/e/e3/Future_Trunks_SSJ.png/revision/latest?cb=20151026072626&path-prefix=pt-br"
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
  render: function () {
    return (
      <img src={this.props.img} />
    )
  }
});

var ProfileName = React.createClass({
  render: function () {
    return (
      <div>
        {"É, Sou o  " + this.props.name } 
      </div>
    )
  }
});

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic img={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
      </div>
    )
  }
});

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));

console.log("reding file");