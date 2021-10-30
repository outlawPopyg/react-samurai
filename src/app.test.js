import MainApp from "./app";
import ReactDOM from "react-dom";
import React from "react";
import { create } from "react-test-renderer";
import ProfileStatusWithHooks from "./components/content/proifle-info/profileStatus";

describe("Profile status component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatusWithHooks status="hello world" /> );
        const instance = component.getInstance();
        console.log(instance);
        expect(instance.stateStatus).toBe("hello world");
    });
});


it('should render without crashing', function () {
    const div = document.createElement('div');
    ReactDOM.render(<MainApp />, div);
    ReactDOM.unmountComponentAtNode(div);
}); 