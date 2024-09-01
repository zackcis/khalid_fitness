import React from "react";







export const SixthSection = ()=>{
    return(
        <>
        <div id="about" className="bg-black p-10 flex flex-col gap-7">
            <p className="text-white text-center p-3 text-5xl font-bold  my-6">About Your Coach</p>
            <div className="w-[100%] flex items-center justify-center">
            <iframe className="rounded-3xl" width="860" height="415" src="https://www.youtube.com/embed/lumimB_aa7M?si=HCE99A6WkdBIbYDh" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        </>
    )
}