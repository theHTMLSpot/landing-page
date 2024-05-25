import { React } from 'react'
import { ReactComponent as  Meeting } from '../meeting_room_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import { ReactComponent as  Design } from '../architecture_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import { ReactComponent as  Check } from '../fact_check_24dp_FILL0_wght400_GRAD0_opsz24.svg';


function Proccess()
{
    return(
        <>
            <div id='process-body'>
                <div className="process-element">
                    <Meeting className='svg'/>

                    <div className='line' >
                        <div className='big-circle'>
                            <div className='small-circle' />
                        </div>
                    </div>
                    
                    <h3> consulation </h3>
                </div>
                <div className="process-element">
                    <Design className='svg'/>
                    <div className='line' >
                        <div className='big-circle'>
                            <div className='small-circle' />
                        </div>
                    </div>
                    <h3> Design </h3>
                </div>
                <div className="process-element">
                    <Check className='svg'/>
                    <div className='line' >
                        <div className='big-circle'>
                            <div className='small-circle' />
                        </div>
                    </div>
                    <h3> exacution </h3>
                </div>

            </div>
        </>
    );
}

export default Proccess;