// Using the Image component `<Image src= ...etc>` </Image> in next.js we have to tell next.js what domains the images are coming from! 
import Image from "next/image";

import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,  
    } from "@heroicons/react/solid";
    
    import {
        FlagIcon,
        PlayIcon,
        SearchIcon,
        ShoppingCartIcon,
    } from "@heroicons/react/outline";

    import HeaderIcon from "./HeaderIcon";


function Header() {
    return (
        <div className="sticky top-0 z-50 bg-white flex 
        items-center p-2 lg:px-5 shadow-md">
            {/* Left */}
            <div className="flex-items-center">
                <Image 
                src="https://cdn-icons-png.flaticon.com/512/3719/3719350.png" 
                width={40} 
                height={40} 
                layout="fixed" 
                alt="icon"
                />
                <div className="flex ml-2 items-center 
                rounded-full bg-grey-100 p-2">
                    <SearchIcon className="h-6 text-gray-500" />
                    <input
                    className=" hidden md:inline-flex ml-2 items-center bg-transparent outline-none 
                    placeholder-grey-500 flex-shrink"
                    type="text" 
                    placeholder="search Mysocial" />
                </div>
            </div>

            {/* Center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            {/* Right */}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/* Profile pic */}

                <p className="whitespace-nowrap font-semibold pr-3">Darren Davy</p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>
        </div>
    );
}

export default Header;
