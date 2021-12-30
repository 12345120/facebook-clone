import InputBox from "./InputBox"
import Posts from "./Posts"
import Stories from "./Stories"

function Feed() {
  return (
    <div className="flex ml-6 flex-col md:w-[700px]">
      <Stories/>
      <InputBox/>
      <Posts/>
    </div>
  )
}

export default Feed
