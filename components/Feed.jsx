import InputBox from "./InputBox"
import Stories from "./Stories"

function Feed() {
  return (
    <div className="flex ml-6 flex-col w-[550px]">
      <Stories/>
      <InputBox/>
      {/* Posts */}
    </div>
  )
}

export default Feed
