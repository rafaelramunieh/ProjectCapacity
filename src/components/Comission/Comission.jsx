import React, { useState } from "react";
import "./Comission.css";

const Comission = () => {
  const [customProfile, setCustomProfile] = useState(false);
  const [customSwitch, setCustomSwitch] = useState(false);
  const [sent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    e.target.reset();
    setCustomProfile(false);
    setCustomSwitch(false);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <section className="cta-section" id="contact">
      <div className="cta-container" style={{ position: "relative" }}>
        {sent && (
          <div className="form-success-msg">
            <span className="blink-text">›</span>SYSTEM_UPDATE:
            ORDER_RECEIVED_SUCCESSFULLY
          </div>
        )}
        <span className="section-tag">
          // ACTION_REQUIRED: UPLINK_CONNECTION
        </span>
        <h2 className="cta-title">Your order starts now!</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">USER_IDENTIFICATION</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name..."
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">CONTACT_UPLINK</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email..."
              required
            />
          </div>

          <div className="form-row">
            <div className="input-group">
              <label htmlFor="profile">KEYCAP_PROFILE</label>
              {!customProfile ? (
                <select
                  id="profile"
                  className="cyber-select"
                  onChange={(e) =>
                    e.target.value === "other" && setCustomProfile(true)
                  }
                >
                  <option value="oem">OEM (Standard)</option>
                  <option value="cherry">CHERRY</option>
                  <option value="xda">XDA (Flat)</option>
                  <option value="dsa">DSA</option>
                  <option value="other">OTHER (Type down)</option>
                </select>
              ) : (
                <input
                  type="text"
                  placeholder="Specify profile..."
                  autoFocus
                  onBlur={(e) =>
                    e.target.value === "" && setCustomProfile(false)
                  }
                />
              )}
            </div>

            <div className="input-group">
              <label htmlFor="switch">SWITCH_TYPE</label>
              {!customSwitch ? (
                <select
                  id="switch"
                  className="cyber-select"
                  onChange={(e) =>
                    e.target.value === "other" && setCustomSwitch(true)
                  }
                >
                  <option value="cherry">CHERRY MX</option>
                  <option value="gateron">GATERON</option>
                  <option value="kailh">KAILH</option>
                  <option value="other">OTHER (Type down)</option>
                </select>
              ) : (
                <input
                  type="text"
                  placeholder="Specify switch..."
                  autoFocus
                  onBlur={(e) =>
                    e.target.value === "" && setCustomSwitch(false)
                  }
                />
              )}
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="theme">DESIGN_CONCEPT_LOG</label>
            <textarea
              id="theme"
              rows="5"
              placeholder="Describe your vision (colors, themes, materials)..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            SUBMIT_ORDER
          </button>
        </form>
      </div>
    </section>
  );
};

export default Comission;
