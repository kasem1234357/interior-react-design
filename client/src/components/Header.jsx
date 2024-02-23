import React from 'react'

function Header() {
  return (
    <header id="home">
    <div  className="text-box">
        <h1>Dark interior <br/>
        For Your Room</h1>
        <p>Get your dream interior with us!</p>
        <div className="btns">
            <button className="active"> Get started</button>
            <button>learn more
                <svg fill="#d58f5c" height="15px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 330 330" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"></path> </g></svg> </button>
        </div>
        <div className="controlls">
            <div className="number-box">01</div>
            <div className="arrows">
                <svg fill="#3e3e4d" height="18px" width="18px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 330 330"  transform="matrix(-1, 0, 0, 1, 0, 0)" stroke="#3e3e4d"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"></path> </g></svg>
                <svg fill="#706f83" height="18px" width="18px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 330 330" transform="matrix(1, 0, 0, 1, 0, 0)" stroke="#706f83"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"></path> </g></svg>
            </div>
            <div className="dots">
                <div className="active"></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
    <div className="img-box">
        <div className="img-main img-1">
            <img src="../images/1.jpg" alt=""/>
        </div>
        <div className="img-other">
            <div className=" img-2"> 
                <img src="../images/2.jpg" alt=""/>
            </div>
            <div className="img-3">
                <img src="../images/3.jpg" alt=""/>
            </div>
        </div>
        
    </div>
</header>
  )
}

export default Header
