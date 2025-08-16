const Nav2 = ({props}) => {

  return (
    <div className='flex justify-around py-2 backdrop-blur-xl border-gray-300 border-1'>
      <p className={`hover:cursor-pointer hover:text-gray-100 text-gray-500 focus:text-gray-100 ${props.active ===1 ? "border-b-2 border-gray-800" : "border-none"}`} onClick={() => props.setActive(1)}>Home</p>
      <p className={`hover:cursor-pointer hover:text-gray-100 text-gray-500 focus:text-gray-100 ${props.active === 2 ? "border-b-2 border-gray-800" : "border-none"}`} onClick={() => props.setActive(2)}>Category</p>
      <p className={`hover:cursor-pointer hover:text-gray-100 text-gray-500 focus:text-gray-100 ${props.active === 3 ? "border-b-2 border-gray-800" : "border-none"}`} onClick={() => props.setActive(3)}>Chatbot</p>
      <p className={`hover:cursor-pointer hover:text-gray-100 text-gray-500 focus:text-gray-100 ${props.active === 4 ? "border-b-2 border-gray-800" : "border-none"}`} onClick={() => props.setActive(4)}>About us</p>
    </div>
  )
}

export default Nav2

