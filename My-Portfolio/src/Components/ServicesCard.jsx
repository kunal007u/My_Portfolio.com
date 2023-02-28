import React, { useEffect } from 'react'
import { useGloablContext } from '../Context'

const ServicesCard = () => {
    const { ServicesData, ServeData } = useGloablContext()
    console.log(ServicesData);
    useEffect(() => {
        ServeData()

    }, [])

    return (
        <>

            {
                ServicesData.map((item, index) => {
                    console.log(item);
                    return (
                        <>

                            <div className="icon-1-detail w-100 d-flex gap-3">
                                <div className="icon">
                                    <span><i class={item.icon}></i></span>
                                </div>
                                <div className="detail ms-5">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>

                                </div>
                            </div>
                        </>
                    )
                })
            }

        </>
    )
}

export default ServicesCard