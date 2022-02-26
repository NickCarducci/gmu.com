import React, { Component } from "react";
import PropTypes from "prop-types";
import ExecutionEnvironment from "exenv";

export default class QuoraEmbed extends Component {
  static propTypes = {
    /**
     * Tweet id that needs to be shown
    username: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
     */
    /**
     * Additional options to pass to twitter widget plugin
     */
    options: PropTypes.object,
    /**
     * Placeholder while tweet is loading
     */
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /**
     * Function to execute after load, return html element
     */
    onLoad: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this.quora = React.createRef();
  }

  renderWidget() {
    const { onLoad, question, username, key, id, embed } = this.props;
    //this.refs.embedContainer
    if (question && username && key && id && embed) {
      this.quora.current.innerHTML =
        /*`<span>
      <span class='quora-content-embed' data-name='${question}/answer/${username}'/>
     </span>`;*/
        `<span
          class="quora-content-embed"
          data-name="${question}/answer/${username}"
        >
          Read
          <a
            class="quora-content-link"
            data-width="559"
            data-height="250"
            href="https://www.quora.com/${question}/answer/${username}"
            data-type="answer"
            data-id="${id}"
            data-key="${key}"
            load-full-answer="False"
            data-embed="${embed}"
          >
            <a href="https://www.quora.com/${username}">${username}</a>
            's <a href="/${question}/${username}">answer</a> to
            <a href="/${question}" ref="canonical">
              <span class="rendered_qtext">${question}</span>
            </a>
          </a>
          on <a href="https://www.quora.com">Quora</a>
          <script
            type="text/javascript"
            src="https://www.quora.com/widgets/content"
          ></script>
        </span>`;

      this.setState({
        isLoading: false
      });
      if (onLoad) {
        onLoad();
      }
    } else
      console.log(
        "no " +
          ["question", "username", "key", "id"].find((x) => !this.props[x])
      );
  }

  componentDidMount() {
    const { question, username } = this.props;
    if (ExecutionEnvironment.canUseDOM && question && username) {
      console.log("canusedom");
      const script = document.createElement("script");
      script.async = true;

      script.src = `https://www.quora.com/widgets/content`; //`https://www.quora.com/${question}/answer/${username}`;
      script.onload = () => {
        console.log("ready quora");
        this.renderWidget();
      };
      document.body.appendChild(script);
    }
  }

  componentWillUnmount() {
    this.isMountCanceled = true;
  }

  render() {
    const { question, username } = this.props;
    return <div ref={this.quora} title={`${question}/answer/${username}`} />;
  }
}
