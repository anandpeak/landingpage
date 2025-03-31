import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const Integrations: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const dots: { x: number; y: number; dx: number; dy: number }[] = [];
    let lines: { x: number; y: number; dx: number; dy: number }[][] = [];

    for (let i = 0; i < 120; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
      });
    }

    const calculateDistance = (
      dot1: (typeof dots)[number],
      dot2: (typeof dots)[number]
    ) => {
      const xDistance = dot1.x - dot2.x;
      const yDistance = dot1.y - dot2.y;
      return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
    };

    const update = () => {
      lines = [];
      for (let i = 0; i < dots.length; i++) {
        const dot1 = dots[i];
        for (let j = i + 1; j < dots.length; j++) {
          const dot2 = dots[j];
          if (calculateDistance(dot1, dot2) < 150) {
            lines.push([dot1, dot2]);
          }
        }
        dot1.x += dot1.dx;
        dot1.y += dot1.dy;
        if (dot1.x > width || dot1.x < 0) dot1.dx = -dot1.dx;
        if (dot1.y > height || dot1.y < 0) dot1.dy = -dot1.dy;
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "rgba(234, 134, 133, 0.3)";
      ctx.fillStyle = "#EA8685";

      for (const [dot1, dot2] of lines) {
        ctx.beginPath();
        ctx.moveTo(dot1.x, dot1.y);
        ctx.lineTo(dot2.x, dot2.y);
        ctx.stroke();
      }
      for (const dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 3, 0, 3 * Math.PI);
        ctx.fill();
      }
    };

    const animate = () => {
      update();
      render();
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full h-screen flex items-center justify-center bg-transparent"
    >
      <canvas ref={canvasRef} />
      <h1 className="text-[88px] font-bold absolute">Integrations</h1>

      {[
        {
          src: "/img/home/integ/viber.svg",
          className: "top-1/5 left-1/6 h-24",
          x: -200,
          y: -200,
        },
        {
          src: "/img/home/integ/whatsapp.svg",
          className: "top-1/8 left-1/3 ms-10 h-24",
          x: -50,
          y: -200,
        },
        {
          src: "/img/home/integ/powerapp.svg",
          className: "top-1/8 right-1/3 me-10 h-24",
          x: 50,
          y: -200,
        },
        {
          src: "/img/home/integ/outlook.svg",
          className: "top-1/5 right-1/5 h-20 mt-10",
          x: 200,
          y: -200,
        },
        {
          src: "/img/home/integ/odoo.svg",
          className: "right-1/12",
          x: 400,
          y: 0,
        },
        {
          src: "/img/home/integ/teams.svg",
          className: "bottom-1/4 right-1/5 h-20",
          x: 200,
          y: 200,
        },
        {
          src: "/img/home/integ/calendly.svg",
          className: "bottom-1/10 right-1/3 ps-20",
          x: 50,
          y: 200,
        },
        {
          src: "/img/home/integ/gsuite.svg",
          className: "bottom-1/10 left-1/3 w-60 pe-20",
          x: -50,
          y: 200,
        },
        // {
        //   src: "/img/home/integ/vertex.svg",
        //   className: "top-32 left-60",
        //   x: -200,
        //   y: -200,
        // },
        {
          src: "/img/home/integ/green.svg",
          className: "bottom-1/4 left-1/8",
          x: -200,
          y: 200,
        },
        {
          src: "/img/home/integ/oauth.svg",
          className: "left-1/12 h-26",
          x: -400,
          y: 0,
        },
      ].map((item, index) => (
        <motion.img
          key={index}
          src={item.src}
          alt="Integration Logo"
          className={`absolute ${item.className} h-16`}
          initial={{ opacity: 0, x: item.x, y: item.y }}
          animate={
            isInView
              ? { opacity: 1, x: 0, y: 0 }
              : { opacity: 0, x: item.x, y: item.y }
          }
          transition={{ duration: 0.8 }}
        />
      ))}
    </div>
  );
};

export default Integrations;
