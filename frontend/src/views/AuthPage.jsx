import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import "./styles/AuthPage.css";

const AuthPage = () => {
    const [rightPanel, setRightPanel] = useState(false);

    return (
        <div className={`container ${rightPanel ? "right-panel-active" : ""}`}>
            <div className="container__form container--signup">
                <SignUpForm />
            </div>

            <div className="container__form container--signin">
                <SignInForm />
            </div>

            <div className="container__overlay">
                <div className="overlay">
                    <div className="overlay__panel overlay--left">
                        <button className="btn" onClick={() => setRightPanel(false)}>Sign In</button>
                    </div>
                    <div className="overlay__panel overlay--right">
                        <button className="btn" onClick={() => setRightPanel(true)}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
