import ServiceCard from '../ServiceCard/ServiceCard';
import useServices from '../../../Hooks/useServices';

const Services = () => {
    const services = useServices();
    return (
        <div className='my-5 '>
            <div className='text-center space-y-3'>
                <p className='text-[#FF3811]'>Service</p>
                <h2 className='text-2xl lg:text-4xl text-white'>Our Service Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 my-8'>
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;