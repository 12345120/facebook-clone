import Story from "./Story";

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto mt-2">
      {stories.map((story) => (
        <Story
        key={story.src}
        name={story.name}
        src={story.src}
        profile={story.profile}
      ></Story>
      ))}
    </div>
  )
}

const stories = [
  {
    name: "Mark Zuckerberg",
    src: "https://images.csmonitor.com/csm/2016/06/987024_1_0615-Zuck_standard.jpg?alias=standard_900x600",
    profile: "https://cdn.vox-cdn.com/thumbor/82lbgDp2RfnpNIRjL5ack0oRntI=/0x0:5315x3543/1200x800/filters:focal(2012x793:2862x1643)/cdn.vox-cdn.com/uploads/chorus_image/image/69153080/1178141587.jpg.0.jpg",
  },
  {
    name: "Elon Musk",
    src: "https://cdn.vox-cdn.com/thumbor/tZPekJYO32Wy24LjhXXXlESo_lE=/0x0:2040x1360/1400x933/filters:focal(857x517:1183x843):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68479980/elon_musk_tesla_3036.0.jpg",
    profile: "https://www.cnet.com/a/img/9Dd7cm2QT62v3sCkas3MOPqtoSk=/940x0/2021/08/05/2d1d399b-2945-4596-8ea8-0c6abf48380a/gettyimages-1229901940.jpg",
  },
  {
    name: "Heon Yim",
    src: "https://rachaelsgoodeats.com/wp-content/uploads/2018/10/146899065.jpg",
    profile: "https://cdn.shopify.com/s/files/1/1131/9396/products/remove_background_png_5.png?v=1568753562",
  },
  {
    name: "Bill Gates",
    src: "https://assets.weforum.org/article/image/eIfUdHtdWKZdMknticwwupD1Xm81xkKnutNNcwAZTyg.JPG",
    profile: "https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg",
  },
  {
    name: "Dwayne Johnson",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCtkPt2nPRHxR1y9KqpwdXAguTm7zfyFIwRg&usqp=CAU",
    profile: "https://www.nme.com/wp-content/uploads/2021/04/dwaynejohnson-2000x1270-1.jpg",
  },
];

export default Stories
