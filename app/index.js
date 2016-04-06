var USER_DATA = {
  name: "Trunks",
  link: "https://pt.wikipedia.org/wiki/Trunks",
  image: "http://vignette2.wikia.nocookie.net/anicrossbr/images/e/e3/Future_Trunks_SSJ.png/revision/latest?cb=20151026072626&path-prefix=pt-br"
}

var React = require('react');
var ReactDOM = require('react-dom');

var Link = React.createClass({
  changeUrl:  function(){
    window.location.replace(this.props.href) 
  },
  render: function(){
    return (
      <span 
        style={{cursor: 'pointer', color: 'blue'}}
        onClick={this.changeUrl}>
        
        {this.props.children}
      </span>
    )
  }
});

var ProfileLink = React.createClass({
  render: function (){
    return (
      <div>
        <Link href={this.props.user.link}>
          {"quer saber mais sobre o" + this.props.user.name}
        </Link>
      </div>
    )
  }
});

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
        <ProfileLink user={this.props.user}/>
      </div>
    )
  }
});

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));