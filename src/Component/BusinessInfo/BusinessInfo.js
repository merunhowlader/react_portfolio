import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';


const infoData = [
    {
        title: 'GitHub',
        description: 'Merunhowlader',
        icon:  faGithubAlt,
        background:'primary'
        
    },
    {
        title: 'Location',
        description: 'Shyamoli Dhaka Bangladesh',
        icon: faMapMarker,
        background:'dark'
    },
    {
        title: 'Call Now',
        description: '01890369176',
        icon: faPhone ,
        background:'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className=" d-flex justify-content-center mt-5">
            <div className='w-75 row '>
                {
                    infoData.map(info =><InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;