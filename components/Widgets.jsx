import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

function Widgets() {
  return (
    <div className="hidden xl:flex xl:flex-col">
      <div className="flex justify-between w-52">
        <p className="text-lg font-semibold text-gray-500">Contacts</p>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name}/>
      ))}
    </div>
  );
}

export default Widgets;

const contacts = [
  {
    src: "https://cdn.vox-cdn.com/thumbor/82lbgDp2RfnpNIRjL5ack0oRntI=/0x0:5315x3543/1200x800/filters:focal(2012x793:2862x1643)/cdn.vox-cdn.com/uploads/chorus_image/image/69153080/1178141587.jpg.0.jpg",
    name: "Mark Zuckerberg",
  },
  {
    name: "Elon Musk",
    src: "https://www.cnet.com/a/img/9Dd7cm2QT62v3sCkas3MOPqtoSk=/940x0/2021/08/05/2d1d399b-2945-4596-8ea8-0c6abf48380a/gettyimages-1229901940.jpg",
  },
  {
    name: "Heon Yim",
    src: "https://cdn.shopify.com/s/files/1/1131/9396/products/remove_background_png_5.png?v=1568753562",
  },
  {
    name: "Bill Gates",
    src: "https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg",
  },
  {
    name: "Dwayne Johnson",
    src: "https://www.nme.com/wp-content/uploads/2021/04/dwaynejohnson-2000x1270-1.jpg",
  },
];
