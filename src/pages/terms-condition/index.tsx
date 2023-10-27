import React from "react";
import "./terms.scss";

const TermsConditions: React.FC = () => {
  return (
    <div className="terms">
      <div>
        <h1>Terms conditions</h1>
      </div>
      <div className="content">
        <h5>Welcome to SJ clothing.</h5>

        <h5>
          PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING THE CLOTHING
          APP.
        </h5>
        <h4>Acceptance of Terms</h4>

        <p>
          By downloading, installing, or using SJ clothing , you agree to be
          bound by these Terms and Conditions. If you do not agree with any part
          of these terms, you should not use the app.
        </p>

        <h4>Account Registration</h4>
        <ul>
          <li>
            <p>
              You must provide accurate and complete information when
              registering for an account on the Clothing App.
            </p>
          </li>
          <li>
            <p>
              You are responsible for maintaining the confidentiality of your
              account information, including your username and password.
            </p>
          </li>
          <li>
            <p>
              You are responsible for all activities that occur under your
              account.
            </p>
          </li>
          <li>
            <p>
              You must notify us immediately of any unauthorized use of your
              account.
            </p>
          </li>
        </ul>
        <h4>Payment</h4>
        <ul>
          <li>
            <p>
              When you place an order through the app, you agree to pay for the
              products or services ordered at the prices specified, including
              any applicable taxes and shipping fees.
            </p>
          </li>
          <li>
            <p>
              Payment information is securely processed, and we do not store
              your payment details.
            </p>
          </li>
        </ul>
        <h4>Profile</h4>
        <ul>
          <li>
            <p>
              You can create and manage your profile on the Clothing App,
              including personal information, preferences, and order history.
            </p>
          </li>
          <li>
            <p>
              {" "}
              Any information you provide in your profile must be accurate and
              up-to-date.
            </p>
          </li>
        </ul>
        <h4>Intellectual Property</h4>
        <ul>
          <li>
            <p>
              All content and materials on the Clothing App, including but not
              limited to text, graphics, logos, and images, are the intellectual
              property of the company. You may not use, reproduce, or distribute
              these materials without our express written consent.
            </p>
          </li>
        </ul>
        <h4>User Conduct</h4>
        <ul>
          <li>
            <p>
              {" "}
              You agree not to engage in any unlawful, offensive, or harmful
              activities on the Clothing App.
            </p>
          </li>
        </ul>
        <h4>Privacy</h4>
        <ul>
          <li>
            <p>
              We collect and use your personal information in accordance with
              our Privacy Statement.
            </p>
          </li>
        </ul>
        <h4>Termination</h4>
        <ul>
          <li>
            <p>
              We may terminate or suspend your account and access to the app,
              with or without notice, for any reason, including violation of
              these Terms and Conditions.
            </p>
          </li>
        </ul>
        <h4>Changes to Terms and Conditions</h4>
        <ul>
          <li>
            <p>
              We reserve the right to modify these Terms and Conditions at any
              time. It is your responsibility to review these terms
              regularly.Your continued use of the app after any changes indicate
              your acceptance of the modified terms.
            </p>
          </li>
        </ul>
        <h4>Contact Information</h4>
        <p>
          a. For questions or concerns regarding these Terms and Conditions,
          please contact us using the contact information provided on the
          Clothing App.
        </p>
        <p>
          By using the Clothing App, you acknowledge that you have read,
          understood, and agreed to these Terms and Conditions. If you do not
          agree to these terms, please do not use the app. Your continued use of
          the app indicates your acceptance of these terms and any updates or
          revisions.
        </p>
        <h4>Information Collection</h4>
        <p>We may collect the following sensitive information:</p>
        <ul>
          <li>
            <p>
              Images: We may collect and store images that you choose to upload
              or share within the app.
            </p>
          </li>
          <li>
            <p>
              Email Addresses: We may collect your email address to facilitate
              communication and account management.
            </p>
          </li>
          <li>
            <p>
              Phone Numbers: We may collect your phone number for account
              verification and communication purposes.
            </p>
          </li>
          <li>
            <p>
              Addresses: We may collect your physical address to provide
              location-based services or for shipping purposes.
            </p>
          </li>
          <li>
            <p>
              Location Data: We may collect and use your device's location data
              to enhance your experience within the Service, such as
              location-based features.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsConditions;
