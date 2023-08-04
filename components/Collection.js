import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/free-mode"

// import required modules
import { Scrollbar, FreeMode, Pagination } from "swiper"
import Image from "next/image"

const Collection = () => {
  return (
    <div className='my-24 grid grid-cols-1 md:grid-cols-4 gap-4'>
      <div className='col-span-1 xl:col-span-2 '>
        <div className=''>
          <h3 className='text-xl text-cyan-400 font-semibold '>COLLECTION</h3>
          <h2 className='text-2xl font-semibold'>BORED APES</h2>
          <h2 className='text-2xl font-semibold'>NFT ITEMS</h2>
        </div>
        <p className='text-gray-400 text-[clamp(1rem_,_2vh_,_1.45rem)]  max-w-md my-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi debitis
          rerum ea tempore quidem totam minus itaque facere et.
        </p>
        <button className='text-sm border-2 border-white px-4 py-2  rounded-full hover:border-blue-400 transition-all duration-300'>
          View on Opensea
        </button>
      </div>
      <div className='col-span-3 xl:col-span-2 '>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          freeMode={true}
          scrollbar={{
            hide: false,
          }}
          modules={[FreeMode, Scrollbar]}
          className='mySwiper h-[320px] scrollbar '
        >
          <SwiperSlide>
            <img
              src='https://i.seadn.io/gae/Eu9zj3y2IrCu6QsPRUoQJiLRXt7dahdlYz414oj4LEwCYdiIOD0RS4WFsnu2Ur0QOBAZe6TRH0SeMhM_OZ2mcToScp_yTjdtSS0-dw?auto=format&w=1000'
              className='h-[300px] w-[350px] object-cover rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://i.seadn.io/gae/ixvhTepqVVPtrWcAYbXrDHLOQCF63AVXtXnyyIILKaKtTvPDJM--atkaJplTxjC0UKWsOV0Eg7721nUw0bwwNHgXGwew5TGvDTuHlw?auto=format&w=1000'
              className='h-[300px] w-[350px] object-cover rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src='https://i.seadn.io/gae/s9VzyIa6l250Ulat_BWK0DzMyXtfR39Rxrqf2XzknIKsvjtT4wM_YNXFwRJYpFDwQWn6wSSOlAnUGBbj1xe6tk7fSw8ieJoQCwbxUtY?auto=format&w=384'
              className='h-[300px] w-[350px] object-cover rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://i.seadn.io/gae/nO5hEDtY5ZsbqJYKzDQsmiqJQiVGG_GX4dkTNpgwtFoRCKu1xYmV8il5Wj9vEmgmq0ZxVCRe6Dd2EDQIouIjIWm-OqG1DzUAe--f7Q?auto=format&w=384'
              className='h-[300px] w-[350px] object-cover rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://i.seadn.io/gae/515mn4Gd4Kx29XlH9ck-OGRzbEJTT2kmKhwH4IAWHZFl41xsUyulI9Phe0hviviZ93fDP8kobt0nwGHZMcB50NxrWS3cFjQ49Fr5?auto=format&w=1000'
              className='h-[300px] w-[350px] object-cover rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://i.seadn.io/gae/Eu9zj3y2IrCu6QsPRUoQJiLRXt7dahdlYz414oj4LEwCYdiIOD0RS4WFsnu2Ur0QOBAZe6TRH0SeMhM_OZ2mcToScp_yTjdtSS0-dw?auto=format&w=1000'
              className='h-[300px] w-[350px] object-cover rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://i.seadn.io/gae/8T4g_WdqN_pRy00xxcA1nozdRTy5GigVCHdt4OdwpBUTDKJeTIuXYDXiR6P5qyesL5RlBuq10CRODw_kkGjbJ9igYwQxZDj7_-vW?auto=format&w=384'
              className='h-[300px] w-[350px] object-cover rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='https://i.seadn.io/gae/Vzjn7F04pN0Rvqn_H1B9F52pNQ59IAGlJDk8fchQI-KDDYtnr-y0bOQOzoASH7X7y-iLwjR3OxrJhtWo5CuaXfkN9909H7PyZ_kyR7A?auto=format&w=384'
              className='h-[300px] w-[350px] object-cover rounded-xl'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Collection
