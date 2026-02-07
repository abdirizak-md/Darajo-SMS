
const CardComponent = ({schoolData}) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 mb-8">
            {schoolData.map((data, index) => (
              <div key={index} className={`bg-white rounded-2xl  border-l-4 border-[${data.colors}] p-6 shadow-[0_5px_15px_rgba(0,0,0,0.2)] cursor-pointer transition-all duration-300 hover:-translate-y-2`}>
                <div className="flex justify-between items-center mb-4">
                  <h1 className='text-[#666]'>{data.title}</h1>
                  <div className={`bg-[${data.colorr}] p-3 rounded-lg`}>
                    {data.icon}
                  </div>
                </div>
                <div className="text-[2rem] font-bold mb-2">{data.inNumber}</div>
                <div className="flex items-center gap-1 text-sm">
                  {data.upRiseIcon}
                  <span className={`text-sm text-[${data.colors}]`}>{data.upRise}</span>
                </div>
              </div>
            ))}
          </div>
  )
}

export default CardComponent