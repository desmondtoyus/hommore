import React from 'react';
const Watermark = ()=>{

    return(
        <header style={{width: '100%', margin: '20px'}}>



            <div style={{position: 'relative', top: '300px', left:'20px', zIndex: '0'}}>
                <img src="img/hommore-reversed-text.svg" alt="hommore reversed text"/>
            </div>
        </header>
    )
}

export default Watermark;