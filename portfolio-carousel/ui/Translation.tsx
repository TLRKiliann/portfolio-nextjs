"use client";

export default function Translation() {

    const handleClick = () => {
        console.log("clicked");
    }

    return (
        <div className='fixed flex flex-row items-center justify-end top-0 left-0 right-0 bg-transparent text-white z-50 pt-4 pr-10'>
          <button onClick={handleClick}>Fr</button>
          <button onClick={handleClick}>En</button>
        </div>
    )
}