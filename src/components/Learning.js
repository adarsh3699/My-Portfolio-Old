import React from 'react';
import Select from 'react-select';
import Bhemu from "./Bhemu";

// import {MNgoTextEditor} from 'mngo-text-editor';

function Learning() {
    return (
        <>
            <div id="asd">hello bhemus</div>
            <div id="selectCont">
                <Select
                    option={[
                        { value: '1', label: 'Aditya Suman' },
                        { value: '2', label: 'Adarsh' },
                        { value: '3', label: 'Aditi' }
                    ]}
                />
            </div>

            <Bhemu
                name={"Adarsh"}
                type={"biy"}
            />


            {/* <MNgoTextEditor
                title={"adarsh suman"}
                typeWriterText1={"Hello <b>Bhemu</b>"}
                typeWriterText2={"<a>This a biro</a>"}
                files={ [
                    {
                        "type": "folder", "srcKey": "adityasuman", "defaultOpen": true,
                        "files": [
                            { "type": "file", "srcKey": "about_me.html" },
                            { "type": "file", "srcKey": "contact_me.html" },
                            {
                                "type": "folder", "srcKey": "work_experience",
                                "files": [ ]
                            }
                        ]
                    },
                    { "type": "file", "srcKey": "follow_me.html" },
                ]}
                filesContent={{
                    "about_me.html": {
                        title: "<Adarsh Suman>",
                        content: "kauaa is a bird"
                    }
                }}
            /> */}
        </>
    )
}

export default Learning;