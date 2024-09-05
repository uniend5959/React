


const Header = () => {
  return(
    <>
      <div className="fixed w-full min-w-96	h-14  border-b-4 bg-zinc-600">
        <div className="text-white  container flex  justify-between  items-center py-3 cursor-pointer">
          <h1 >
              <a href="#">로고</a>
          </h1>
          <div>
            <button>로그인</button>
            <button className="ml-4">회원가입</button>
          </div>
        </div>
      </div>
    </>
  )
  
}

export default Header