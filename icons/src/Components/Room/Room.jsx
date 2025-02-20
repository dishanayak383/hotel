import React  from "react";
import { FiBookmark } from "react-icons/fi";
import { TiMinus } from "react-icons/ti";

export const Room=()=>{
    return(
        <div style={{border:'1px solid black',width:'450px',height:'800px',display:'flex',flexDirection:'column',}}>
            <div style={{display:'flex',border:'1px solid black',flex:3,flexDirection:'column',}}>
                <div style={{display:'flex',border:'1px solid black',flex:0.5,flexDirection:'row',}}>
                    <div style={{display:'flex',border:'1px solid black',flex:'1',flexDirection:'column',}}></div>
                    <div style={{border:'1px solid yellow',flex:'1',flexDirection:'column',borderRadius:'40px',margin:'5px',textAlign:'center'}}>
                        <img src="https://media.licdn.com/dms/image/v2/D4E03AQHdHHV9bfJ2JA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1687267664513?e=2147483647&v=beta&t=Znl3Btuj2e2N6jKDm9m6hpN55HrzUPH2n4QeOfkv_0Y" width={'30px'} height={'30px'} />
                    </div>
                    <div style={{display:'flex',border:'1px solid black',flex:'6',flexDirection:'column',}}>
                        <a>Joana Barrors</a>
                        <a>Hotel Guest</a>
                    </div>
                    <div style={{border:'1px solid yellow',flex:'1',flexDirection:'column',borderRadius:'40px',margin:'5px',textAlign:'center',fontSize:'30px',}}>
                        <FiBookmark />
                    </div> 
                    <div style={{display:'flex',border:'1px solid black',flex:'1',flexDirection:'column',}}></div>
                </div>
                <div style={{display:'flex',border:'1px solid black',flex:0.5,flexDirection:'row',}}>
                    <p>Recommended for you</p>
                </div>
                <div style={{display:'flex',border:'1px solid black',flex:1.5,flexDirection:'row',}}>
                    <div style={{display:'flex',border:'1px soild black',flex:'3',flexDirection:'column',}}>
                        <img src="https://i.pinimg.com/736x/c3/25/68/c325681bfed2903f26ee98262256dc75.jpg" width={'200px'} height={'100px'}/>
                    </div>
                    <div style={{display:'flex',border:'1px solid black',flex:'4',flexDirection:'column',}}>
                        <a>Enjoy some me time</a>
                        <a>Relax with our messages and treatments.</a>
                        <a>Spa facilities will close in 4 hours</a>
                    </div>
                </div>
                <div style={{display:'flex',border:'1px solid black',flex:0.5,flexDirection:'row',textAlign:'center',}}>
                 <TiMinus/>
                </div>

            </div>
            <div style={{display:'flex',border:'1px solid black',flex:6,flexDirection:'column',}}>
                <div style={{display:'flex',border:'1px solid black',flex:'1',flexDirection:'row',}}>
                    <a>Popular experiences</a>
                </div>
                <div style={{display:'flex',border:'1px solid black',flex:'3',flexDirection:'row',}}>
                    <div style={{display:'flex',border:'1px solid black',flex:'1',flexDirection:'row',}}>
                        <div style={{display:'flex',border:'1px solid black',flex:'2',flexDirection:'column',}}></div>
                        <div style={{display:'flex',border:'1px solid black',flex:'5',flexDirection:'column',}}>
                            <p>Bike Riding</p>
                            <a>Varied tour options</a>
                        </div>
                    </div>
                    <div style={{display:'flex',border:'1px solid black',flex:'1',flexDirection:'row',}}>
                        <div style={{display:'flex',border:'1px solid black',flex:'2',flexDirection:'column',}}></div>
                        <div style={{display:'flex',border:'1px solid black',flex:'5',flexDirection:'column',}}>
                            <p>Dinner at the Table</p>
                            <a>From $30/person</a>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex',border:'1px solid black',flex:'1',flexDirection:'row',}}></div>
                <div style={{display:'flex',border:'1px solid black',flex:'1',flexDirection:'row',}}>
                    <p>All services</p>
                </div>
                <div style={{display:'flex',border:'1px solid black',flex:'1.5',flexDirection:'row',}}>
                    <div style={{display:'flex',border:'1px solid black',flex:'1',flexDirection:'column',}}></div>
                    <div style={{display:'flex',border:'1px solid black',flex:'4',flexDirection:'column',}}>
                        <p>Facilities</p>
                    </div>
                    <div style={{display:'flex',border:'1px solid black',flex:'1',flexDirection:'column',borderRadius:'40px',margin:'5px',}}></div>
                </div>
                <div style={{display:'flex',border:'1px solid black',flex:'1.5',flexDirection:'row',}}>
                    <div style={{display:'flex',border:'1px solid black',flex:'1',flexDirection:'column',}}></div>
                    <div style={{display:'flex',border:'1px solid black',flex:'4',flexDirection:'column',}}>
                        <p>Virtual Key</p>
                    </div>
                    <div style={{display:'flex',border:'1px solid black',flex:'1',flexDirection:'column',borderRadius:'40px',margin:'5px',}}></div>
                </div>
                <div style={{display:'flex',border:'1px solid black',flex:'1.5',flexDirection:'row',}}>
                    <div style={{display:'flex',border:'1px solid black',flex:'1',flexDirection:'column',}}></div>
                    <div style={{display:'flex',border:'1px solid black',flex:'4',flexDirection:'column',}}>
                        <p>My Room</p>
                    </div>
                    <div style={{display:'flex',border:'1px solid black',flex:'1',flexDirection:'column',borderRadius:'40px',margin:'5px',}}></div>
                </div>
                <div style={{display:'flex',border:'1px solid black',flex:'1.5',flexDirection:'row',}}>
                    <div style={{display:'flex',border:'1px solid black',flex:'1',flexDirection:'column',}}></div>
                    <div style={{display:'flex',border:'1px solid black',flex:'4',flexDirection:'column',}}>
                        <p>Order Room Service</p>
                    </div>
                    <div style={{display:'flex',border:'1px solid black',flex:'1',flexDirection:'column',borderRadius:'40px',margin:'5px',}}></div>
                </div>
                <div style={{display:'flex',border:'1px solid black',flex:'2',flexDirection:'row',}}>
                    <div style={{display:'flex',border:'1px solid black',flex:'2',flexDirection:'column',}}>
                        <p>06</p>
                    </div>
                    <div style={{display:'flex',border:'1px solid black',flex:'6',flexDirection:'column',}}>
                        <p>Acumalate points with your stay.</p>
                    </div>
                </div>
            </div>
            <div style={{display:'flex',border:'1px solid black',flex:2,flexDirection:'column',}}>
                <div style={{display:'flex',border:'1px solid black',flex:'1.8',flexDirection:'row',}}>
                    <div style={{display:'flex',border:'1px solid black',flex:'2',flexDirection:'column',}}>
                        <p>points</p>
                    </div>
                    <div style={{display:'flex',border:'1px solid black',flex:'6',flexDirection:'column',}}>
                        <p>They will turn into special offers for you.</p>
                    </div>

                </div>
                <div style={{display:'flex',border:'1px solid black',flex:'3',flexDirection:'row',}}>
                    <div style={{display:'flex',border:'1px solid black',flex:'1',flexDirection:'column',borderRadius:'40px',margin:'5px',}}></div>
                    <div style={{display:'flex',border:'1px solid black',flex:'1',flexDirection:'column',borderRadius:'40px',margin:'3px',}}></div>
                    <div style={{display:'flex',border:'1px solid black',flex:'1',flexDirection:'column',borderRadius:'40px',margin:'3px',}}></div>
                    <div style={{display:'flex',border:'1px solid black',flex:'1',flexDirection:'column',borderRadius:'40px',margin:'3px',}}></div>
                    <div style={{display:'flex',border:'1px solid black',flex:'1',flexDirection:'column',borderRadius:'40px',margin:'3px',}}></div>
      
                </div>
            </div>
        </div>

    )
}