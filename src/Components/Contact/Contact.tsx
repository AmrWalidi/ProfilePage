import Header from "../Header";
import SideInfoList from "./SideInfoList";
import Form from "./Form";

function Contact() {
  return (
    <div id="contact">
      <div className="divider"></div>
      <Header title="contact" />
      <div className="contact-section-content">
        <SideInfoList />
        <Form />
      </div>
    </div>
  );
}
export default Contact;
