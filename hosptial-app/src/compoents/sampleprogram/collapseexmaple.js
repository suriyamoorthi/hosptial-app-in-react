import React, { useState } from 'react';
 function CollapseExample() {
    const [isOpen, setIsopen] = useState(false);

    
    const handleCilck= ({}) => {
        setIsopen(!isOpen)
    };

  return (
   
  
    <div class="accordion" id="accordionExample">
        <div class="card">


            <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                   
                   
                    <button class="btn btn-link" type="button"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        onClick={() => setIsopen(!isOpen)}
                        >
                        Collapsible Item 1
                        
                    </button>
                </h2>
            </div>
          
          

            {isOpen &&  <div id="collapseOne" class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample">
                <div class="card-body">
                    This is slot 1.
                </div>
            </div>}
        </div>
        <div class="card">
          
          
            <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                 
                 
                    <button class="btn btn-link collapsed"
                        type="button" data-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo">
                        Collapsible Item 2
                    </button>
                </h2>
            </div>
          
          
            {isOpen && <div id="collapseTwo" class="collapse show"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample">
                <div class="card-body">
                    This is slot 2.
                </div>
            </div>}
        </div>
       
        <div class="accordion" id="accordionExample1">
            <div class="card">
              
              
                <div class="card-header" id="headingThree">
                    <h2 class="mb-0">
                        <button class="btn btn-link collapsed"
                            type="button" data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree">
                            Collapsible Item 3
                        </button>
                    </h2>
                </div>
              
              
                <div id="collapseThree" class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample1">
                    <div class="card-body">
                        This is slot 3.
                    </div>
                </div>
            </div>
            <div class="card">
 
              
              
                <div class="card-header" id="headingFour">
                    <h2 class="mb-0">
                        <button class="btn btn-link collapsed"
                            type="button" data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour">
                            Collapsible Item 4
                        </button>
                    </h2>
                </div>
 
               
                <div id="collapseFour" class="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample1">
                    <div class="card-body">
                        This is slot 4.
                    </div>
                </div>
            </div>
        </div>
        
    </div>

    
  );
}

export default  CollapseExample;


// import React, { useState } from 'react';
// import Some from "../sampleprogram/some";


// function Collapseexmaple() {
//   const [isopen, setIsopen] = useState(false);
//   return (
//     <div className="row">
//       {Some.map((carduse) => {
//         return (
//           <div className="some">
//             <button className="toggle" onclick={() => setIsopen(!isopen)}>{carduse.label}
//             </button>
//             {isopen && <div className="content">{carduse.title}</div>}
//           </div>

//         );
//       })}
//     </div>

//   )


//   // const [open, setOpen] = useState(false);

//   // return (
//   //   <>
//   //     <Button
//   //       onClick={() => setOpen(!open)}
//   //       aria-controls="example-collapse-text"
//   //       aria-expanded={open}
//   //     >
//   //       click
//   //     </Button>
//   //     <Collapse in={open}>
//   //       <div id="example-collapse-text">
//   //         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
//   //         terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
//   //         labore wes anderson cred nesciunt sapiente ea proident.
//   //       </div>
//   //     </Collapse>
//   //   </>
//   // );
// }
// export default Collapseexmaple;