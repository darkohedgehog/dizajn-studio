import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";




const TopHeader = () => {
    return (
      <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] top-2">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6">
            {/* logo */}
            <Link href={'/'} prefetch={true}>
            <Image 
              src={'/logo_firme-removebg-preview.png'}
              width={85}
              height={40}
              alt="@Dizajn"
              priority= {true}
              className="animate-pulse duration-75 z-10 mix-blend-color-dodge"
              />
            </Link>
            {/* socials */}
            <Socials />
          </div>
        </div>
      </header>
    )
  };
  
  export default TopHeader;