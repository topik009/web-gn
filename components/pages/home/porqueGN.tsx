import { BoxReveal } from "@/components/magicui/box-reveal";
import styles from "@/components/styles/imagesFlota.module.css";

import Image from "next/image";
import img1 from "@/public/img/servicios1.jpg";
import img2 from "@/public/img/servicios2.jpg";
import img3 from "@/public/img/servicios3.jpg";
import img4 from "@/public/img/servicios4.jpg";

export function BoxRevealNosotros() {
    return (
        <div className="w-full flex items-center justify-center overflow-hidden">
            <BoxReveal boxColor={"#f59521"} duration={0.5}>
                <h1 className="text-3xl md:text-6xl text-gray-100 font-semibold mb-5 mt-5 md:mb-0 md:mt-0">
                    ¿Por qué Grupo Navarro?
                </h1>
            </BoxReveal>
        </div>
    );
}

export function PorqueGN() {
    return (
        <>
        <div>
            <BoxRevealNosotros />
            <div className="text-lg text-gray-100 text-justify md:mt-8 md:ml-20 md:mb-10">
                Somos un grupo de empresas con más de 13 años comprometidas en el desarrollo, ejecución, optimización de proyectos y contratos.
                <br />
                Nuestra marca representa un concepto de servicio diseñado para facilitar la sostenibilidad económica, funcional, ambiental y social de 
                los sectores público y privado; combinando solidos conocimientos con una amplia experiencia, lo que permite brindar un respaldo integral en 
                la gestión estratégica de contratos y la dirección de proyectos, potenciando a los profesionales en todas las áreas involucradas.
            </div>
        </div>

        <div className="mb-65 md:mb-0">
            <section className={styles.floatingContainer}>
                <div className={styles.relativeWrapper}>
                    <div className={`${styles.floatItem} ${styles.position1}`}>
                        <Image
                            src={img1}
                            alt=""
                            width={200}
                            height={600}
                            className="rounded-xl w-32 md:w-52 h-auto"
                        />
                    </div>
                    <div className={`${styles.floatItem} ${styles.position2}`}>
                    <Image
                        src={img4}
                        alt=""
                        width={200}
                        height={600}
                        className="rounded-xl w-32 md:w-52 h-auto"
                    />
                    </div>
                    <div className={`${styles.floatItem} ${styles.position3}`}>
                    <Image
                        src={img2}
                        alt=""
                        width={200}
                        height={600}
                        className="rounded-xl w-32 md:w-52 h-auto"
                    />
                    </div>
                    <div className={`${styles.floatItem} ${styles.position4}`}>
                    <Image
                        src={img3}
                        alt=""
                        width={200}
                        height={600}
                        className="rounded-xl w-32 md:w-52 h-auto"
                    />
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}
