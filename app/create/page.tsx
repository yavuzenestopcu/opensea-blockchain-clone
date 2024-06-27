'use client'

export default function Create() {


    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <button id='create' type='submit' className="bg-gray-500" onClick={returnHi}>Create NFT Collection</button>
        </div>
    )

    function returnHi() {
        const button = document.getElementById("create")
        if(button != null) {
            button.innerHTML = 'Created'
            button.setAttribute("disabled", "")
        }
        console.log("hi");
    }


} 