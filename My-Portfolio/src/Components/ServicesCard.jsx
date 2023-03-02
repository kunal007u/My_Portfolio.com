import React, { useEffect } from 'react'
import { useGloablContext } from '../Context'

const ServicesCard = () => {
    const { ServicesData, ServeData } = useGloablContext()
    useEffect(() => {
        ServeData()

    }, [])

    return (
        <>

            {
                ServicesData.map((item, index) => {
                    return (
                        
                            <div className="icon-1-detail w-100 d-flex gap-3" key={index}>
                                <div className="icon">
                                    <span><i className={item.icon}></i></span>
                                </div>
                                <div className="detail ms-5">
                                    <h3>{item.title}</h3>
                                    <p className='w-75'>{item.description}</p>

                                </div>
                            </div>
                    
                    )
                })
            }

        </>
    )
}

export default ServicesCard