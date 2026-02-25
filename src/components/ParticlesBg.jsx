
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBg() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: { color: { value: "" } },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                        resize: true,
                    },
                    modes: { repulse: { distance: 100, duration: 0.4 } },
                },
                particles: {
                    color: { value: "#00bfff" },
                    links: {
                        color: "#00bfff",
                        distance: 150,
                        enable: true,
                        opacity: 0.3,
                        width: 1,
                    },
                    move: { enable: true, speed: 1 },
                    number: { value: 80 },
                    size: { value: { min: 1, max: 3 } },
                },
            }}
        />
    );
}