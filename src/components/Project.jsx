import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"

function Project () {
    const project = [
        {
            img:"",
            projectName:"hi",
            overView:""
        },
        {
            img:"",
            projectName:"hi",
            overView:""
        }
    ]
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                {project.map((item) => (
                    <p className="text-gray-50">{item.projectName}</p>
                ))}
                
            </div>
       </div>
    )
}

export default Project