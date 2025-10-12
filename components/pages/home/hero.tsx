"use client";

import React, { useEffect, useState } from "react";
import styles from "@/components/styles/Hero.module.css";

const Hero: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        const mql = window.matchMedia("(max-width: 767px)");
        const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        setIsMobile(mql.matches);
        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }, []);

    if (isMobile === null) {
        return <div className={styles.hero}><div className={styles.placeholder} /></div>;
    }

    const src = isMobile ? "/img/intro_gn_movil.mp4" : "/img/intro_gn.mp4";

    return (
        <div className={styles.hero}>
        <video
            key={src}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className={styles.video}
            poster=""
        >
            <source src={src} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
        </video>
        </div>
    );
};

export default Hero;
