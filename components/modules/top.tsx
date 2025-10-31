'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Top = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-950 text-white p-4 justify-center items-center">
            <div className="flex items-center justify-center md:justify-start md:ml-30">
                <div className="text-lg font-medium italic text-center md:text-left">
                Dar forma al futuro, liderando la ingeniería
                </div>
            </div>
            <div className="grid grid-cols-1 items-center justify-center mt-5 md:mt-0 text-center md:hidden">
                <div className="relative cursor-pointer mb-2 flex justify-center items-center gap-2">
                    <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-white" size="lg" />
                    <span>proyectos@gruponavarro.com.pe</span>
                </div>
                <div className="relative cursor-pointer flex justify-center items-center gap-2">
                    <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-white" size="lg" />
                    <span>proyectos@gruponavarro.com.pe</span>
                </div>
                <div className="relative cursor-pointer flex justify-center items-center gap-2 mt-2">
                    <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 text-white" size="lg" />
                    <p>+51 933-653-488</p> | <p>+51 900-778-512</p>
                </div>
            </div>
        </div>
    )
}

export default Top;