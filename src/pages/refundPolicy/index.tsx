import React from "react";
import "../terms-condition/terms.scss";

const RefundPolicy: React.FC = () => {
  return (
    <div className="terms">
      <div>
        <h1>Refund policy</h1>
      </div>
      <div>
        <h5>
          By making a purchase from SJ Clothing, you acknowledge and agree to
          the following refund policy:
        </h5>
        <h4>No Refunds Currently Offered</h4>
        <p>
          We, SJ clothing, currently do not offer refunds for any products.{" "}
        </p>
        <h4>Potential Future Refunds</h4>
        <p>
          While we do not provide refunds at this time, we are actively
          considering the implementation of a refund policy in the future. Any
          updates or changes to our refund policy will be communicated to our
          customers through our website, email, or other means of communication.
        </p>
        <h4>Contact Us</h4>
        <p>
          If you have any questions or concerns regarding our refund policy,
          please contact our customer support team for assistance.
        </p>
        <h4>Changes to this Policy</h4>
        <p>
          We reserve the right to modify, amend, or update this refund policy at
          any time, and the most recent version will be updated on our app.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
