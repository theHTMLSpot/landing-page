import React from 'react';
import { ReactComponent as  Design } from '../design_services_24dp_FILL0_wght400_GRAD0_opsz24 2.svg';
import { ReactComponent as  Team } from '../groups_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import { ReactComponent as  Recyle } from '../recycling_24dp_FILL0_wght400_GRAD0_opsz24.svg';


//recycling_24dp_FILL0_wght400_GRAD0_opsz24.svg
function Promises() {
    return (
        <>
            <div id='promise-body'>
                <div className='promise-element'>
                    <Design className='svg' />
                    <h3>Inavaitive designs</h3>
                </div>
                <div className='promise-element'>
                    <Recyle className='svg' />
                    <h3>Sustainable practices</h3>
                </div>
                <div className='promise-element'>
                    <Team className='svg' />
                    <h3>Expert team</h3>
                </div>
            
            </div>
        </>
    );
}

export default Promises;
