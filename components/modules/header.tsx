import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Image from 'next/image';
import Logo from '@/public/img/logo-gn.png';
import Link from "next/link"

const Header = () => {
    return (
        <header className="bg-white text-black flex justify-between items-center p-4">

            <div className="hidden sm:flex items-center space-x-5 md:ml-30 sm:none">
                <FontAwesomeIcon icon={faEnvelope} size='xl' className="text-blue-950" />
                <div className='text-gray-600'>
                    <p>jnavarro@gruponavarro.com.pe</p>
                    <p>proyectos@gruponavarro.com.pe</p>
                </div>
            </div>

            <div className="mx-auto sm:mx-0">
                <Link href="/">
                    <Image src={Logo} alt="Grupo Navarro" className="w-44 h-auto" priority />
                </Link>
            </div>

            <div className="hidden sm:flex items-center space-x-5 md:mr-70">
                <div className='text-gray-600'>
                    <p>+51 933-653-488</p>
                    <p>+51 936-218-330</p>
                    <p>+51 900-778-512</p>
                </div>
                <FontAwesomeIcon icon={faWhatsapp} size='xl' className="text-blue-950" />
            </div>
        </header>
    );
};

export default Header;