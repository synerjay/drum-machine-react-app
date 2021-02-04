const { Component } = React;
const { render } = ReactDOM;

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'Press Key' };

    this.audiofiles = [
    {
      label: "Heater 1",
      keyCode: 81,
      key: "Q",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

    {
      label: "Heater 2",
      keyCode: 87,
      key: "W",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

    {
      label: "Heater 3",
      keyCode: 69,
      key: "E",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

    {
      label: "Chord 1",
      keyCode: 65,
      key: "A",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" },

    {
      label: "Disco Oh",
      keyCode: 83,
      key: "S",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

    {
      label: "Kick N Hat",
      keyCode: 68,
      key: "D",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

    {
      label: "RP4 Kick",
      keyCode: 90,
      key: "Z",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

    {
      label: "Cev H2",
      keyCode: 67,
      key: "X",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },

    {
      label: "Chord 2",
      keyCode: 88,
      key: "C",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" }];



    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  playSound(id) {
    document.getElementById(id).currentTime = 0;
    document.getElementById(id).play();
  }

  handleClick(event) {
    this.playSound(event.target.innerText);
    this.setState({ display: event.target.id });
  }

  handleKeyPress(event) {
    const target = this.audiofiles.find(item => item.keyCode === event.keyCode);
    this.playSound(String.fromCharCode(event.keyCode));
    this.setState({ display: target.label });
  }
  render() {
    const drumPad = this.audiofiles.map(item => /*#__PURE__*/React.createElement("button", { id: item.label, className: "drum-pad", onClick: this.handleClick }, item.key, /*#__PURE__*/React.createElement("audio", { id: item.key, className: "clip", src: item.url })));
    return /*#__PURE__*/(
      React.createElement("div", { className: "drum-container rounded" }, /*#__PURE__*/
      React.createElement("div", { className: "display-container pt-3 pb-3" }, /*#__PURE__*/React.createElement("h3", { className: "display text-center", id: "display" }, this.state.display)), /*#__PURE__*/
      React.createElement("div", { className: "drum-pad-container" }, drumPad)));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(DrumMachine, null), document.getElementById("drum-machine"));