function Notification(props) {
  // Write your code here.
  const { style, image, content } = props;
  return (
    <div className={style}>
      <img src={image} className="img-size" />
      <p className="heading-style">{content}</p>
    </div>
  );
}

const element = (
  // Write your code here.
  <div className="bg-container">
    <div className="notifications-container">
      <h1 className="heading-1">Notifications</h1>
      <div className="inner-container">
        <Notification
          style="n1"
          image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          content="Information Message"
        />
        <Notification
          style="n2"
          image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          content="Success Message"
        />
        <Notification
          style="n3"
          image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          content="Warning Message"
        />
        <Notification
          style="n4"
          image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          content="Error Message"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
