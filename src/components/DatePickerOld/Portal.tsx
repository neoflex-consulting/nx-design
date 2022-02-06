import {Component} from 'react';
// import CSSPropertyOperations from './CSSPropertyOperations/index.js';
import ReactDOM from 'react-dom';

interface Props {
  style?: any
}
interface State {
  
}

class Portal extends Component<Props, State> {
  constructor(props:any) {
    super(props);
  }
  private node: any | null;
  // private portal: any | null;

  componentDidMount() {
    this.renderPortal(this.props);
  }

  componentWillReceiveProps(props: any) {
    this.renderPortal(props);
  }

  componentWillUnmount() {
    if (this.node) {
      ReactDOM.unmountComponentAtNode(this.node);
      document.body.removeChild(this.node);
    }

  }

  applyClassNameAndStyle = (props: any) => {
    if (props.className) {
      this.node.className = props.className;
    }
  }

  renderPortal(props: any) {
    if (!this.node) {
      this.node = document.createElement('div');
      this.applyClassNameAndStyle(props);

      document.body.appendChild(this.node);
    } else {
      this.applyClassNameAndStyle(props);
    }
    // const {children} = props;
    // this.portal = ReactDOM.unstable_renderSubtreeIntoContainer(
    //   this,
    //   children,
    //   this.node
    // );
  }

  render() {
    return null;
  }
}

export default Portal;
