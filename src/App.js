import React, { useState } from "react";

function App() {
    return (
        <div>
            <Folder name="Applications">
                <Folder name="file-explorer-app">
                    <Folder name="public">
                        <File name="favicon.ico" />
                        <File name="index.html" />
                        <File name="logo.png" />
                    </Folder>
                    <Folder name="src">
                        <File name="index.js" />
                        <File name="App.js" />
                    </Folder>
                    <File name="package.json" />
                    <File name="README.md" />
                </Folder>
            </Folder>
            <Folder name="Desktop">
                <Folder name="Applications">
                    <Folder name="file-explorer-app">
                        <Folder name="public">
                            <File name="favicon.ico" />
                            <File name="index.html" />
                            <File name="logo.png" />
                        </Folder>
                        <Folder name="src">
                            <File name="index.js" />
                            <File name="App.js" />
                        </Folder>
                        <File name="package.json" />
                        <File name="README.md" />
                    </Folder>
                </Folder>
            </Folder>
        </div>
    );
}

const Folder = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { name, children } = props;
    const handleClick = () => setIsOpen(!isOpen);
    return (
        <div>
            <span onClick={handleClick}>
                <i className={`blue folder ${isOpen ? "open" : null} icon`}></i>
                <i className={`caret ${isOpen ? "down" : "right"} icon`}></i>
                {name}
            </span>
            <div style={{ marginLeft: "20px" }}>{isOpen ? children : null}</div>
        </div>
    );
};

const File = (props) => {
    const { name } = props;
    const fileExtension = name.split(".")[1];
    const fileIcons = {
        mp4: "file video",
        jpeg: "file image",
        png: "file image",
        jpg: "file image",
        js: "js square",
        html: "html5",
        ico: "star",
        json: "file alternate",
        md: "file alternate",
    };
    return (
        <div>
            <i className={`blue ${fileIcons[fileExtension]} icon`}></i>
            {name}
        </div>
    );
};
export default App;
