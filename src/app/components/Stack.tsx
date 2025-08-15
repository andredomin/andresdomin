import Image from "next/image";

const Stack = () => {
  return (
    <div className='stack'>
      <h1>Stack principal</h1>
      <div className="circles">
        <div className="circle">
          <Image
          src='/img/react-icon_svg_.webp'
          width='50'
          height='50'
          alt="react-icon">
          </Image>
        </div>
        <div className="circle2">
          <Image
          src='/img/spring-boot.png'
          width='40'
          height='50'
          alt="react-icon">
          </Image>
        </div>
        <div className="circle3">
          <Image
          src='/img/python.png'
          width='40'
          height='50'
          alt="react-icon">
          </Image>
        </div>
        <div className="circle4"><Image
          src='/img/nextjs.png'
          width='50'
          height='50'
          alt="react-icon">
          </Image></div>
        <div className="circle5"><Image
          src='/img/29594.png'
          width='50'
          height='50'
          alt="react-icon">
          </Image></div>
        <div className="circle6"><Image
          src='/img/pytorch.png'
          width='50'
          height='50'
          alt="react-icon">
          </Image></div>
      </div>
    </div>
  )
}

export default Stack