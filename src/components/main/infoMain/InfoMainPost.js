import React from 'react'
import { BsTruck } from "react-icons/bs";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { TbDiscount2 } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";

function InfoMainPost() {
    let api = [
        {
            id: 0,
            icon: <BsTruck className='text-6xl text-[#343434]' />,
            title: "حمل و نقل سریع",
            caption: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        },
        {
            id: 1,
            icon: <TbDiscount2 className='text-6xl text-[#343434]' />,
            title: "تخفیفات ویژه",
            caption: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        },
        {
            id: 2,
            icon: <LiaMoneyBillWaveAltSolid className='text-6xl text-[#343434]' />,
            title: "قیمت مناسب",
            caption: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        },
        {
            id: 3,
            icon: <MdOutlineSupportAgent className='text-6xl text-[#343434]' />,
            title: "پشتیبانی دقیق",
            caption: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        },
    ]
  return (
    <>
    {api.map((item) => (
        <div className='w-60 h-60 flex justify-evenly items-center flex-col bg-[#EEEFEF] rounded-lg shadow-lg p-5 max-sm:w-56 max-sm:h-56' key={item.id}>
            <div className='w-full flex justify-center items-center flex-col py-2'>
                {item.icon}
                <p className='text-[#6850D3] text-2xl'> {item.title} </p>
            </div>
            <p className='text-[#343434] text-justify'> {item.caption} </p>
        </div>
    ))}
    </>
  )
}

export default InfoMainPost