function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const quotes = [
{
  quote: "The most difficult thing in football is to score a goal",
  author: "Pep Guardiola" },

{
  quote: "...take the ball, pass the ball",
  author: "Pep Guardiola" },

{
  quote: "Sit down, drink some water, nobody talk...",
  author: "Pep Guardiola" },

{
  quote: "I am not a dreamer. I am a football romantic.",
  author: "Jurgen Klopp" }];




const getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

const Text = props => {
  return React.createElement("div", { id: "text" }, props.text);
};

const Author = props => {
  return React.createElement("span", { id: "author" }, props.text);
};

const Tweet = props => {
  return (
    React.createElement("a", {
      id: "tweet-quote",
      className: "button",
      href: "https://www.twitter.com/intent/tweet".concat(props.tweet),
      target: "_blank" },

    React.createElement("i", { className: "fab fa-twitter" })));


};

class Button extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",


    () => {
      console.log("Click happened in Button");
      this.props.handleClick();
    });}

  render() {
    return (
      React.createElement("button", { onClick: this.handleClick, type: "button", id: "new-quote" },
      this.props.children));


  }}


class QuoteBox extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",







    () => {
      console.log("Click handled by QuoteBox");
      let index = getRandomInt(quotes.length);
      do {
        index = getRandomInt(quotes.length);
      } while (
      this.state.quote === quotes[index].quote);

      this.setState(prevState => ({
        quote: quotes[index].quote,
        author: quotes[index].author }));

    });this.state = { quote: this.props.quote, author: this.props.author };}

  render() {
    return (
      React.createElement("div", { id: "quote-box" },
      React.createElement("blockquote", null,
      React.createElement(Text, { text: this.state.quote }),
      React.createElement("cite", null,
      React.createElement(Author, { text: this.state.author }))),



      React.createElement("div", { id: "action" },
      React.createElement(Tweet, {
        tweet: encodeURI(
        "?hashtags=quotes&related=freeCodeCamp&text=".
        concat(this.state.quote).
        concat(" ").
        concat(this.state.author)) }),


      React.createElement(Button, { handleClick: this.handleClick }, "New quote"))));



  }}


class Quote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      React.createElement(QuoteBox, {
        quote: "...take the ball, pass the ball",
        author: "Pep Guardiola" }));


  }}


ReactDOM.render(React.createElement(Quote, null), document.getElementById("app"));