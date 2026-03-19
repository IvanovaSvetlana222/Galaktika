import { useEffect, useRef } from 'react';

export function SpaceBackground() {
  const starsCanvasRef = useRef<HTMLCanvasElement>(null);
  const rocketCanvasRef = useRef<HTMLCanvasElement>(null);
  const meteorCanvasRef = useRef<HTMLCanvasElement>(null);
  const starCanvasRef = useRef<HTMLCanvasElement>(null);
  const cometCanvasRef = useRef<HTMLCanvasElement>(null);
  const cursorCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Stars Animation
    const starsCanvas = starsCanvasRef.current;
    if (!starsCanvas) return;
    const starsCtx = starsCanvas.getContext('2d');
    if (!starsCtx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let stars: Array<{
      x: number;
      y: number;
      radius: number;
      baseAlpha: number;
      speed: number;
      phase: number;
      hue: number;
    }> = [];

    function initStars(starCount = 250) {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random(),
          y: Math.random(),
          radius: Math.random() * 2.5 + 0.8,
          baseAlpha: Math.random() * 0.7 + 0.2,
          speed: 0.0005 + Math.random() * 0.01,
          phase: Math.random() * 2 * Math.PI,
          hue: Math.random() > 0.6 ? 280 : (Math.random() > 0.5 ? 180 : 60),
        });
      }
    }

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      starsCanvas.width = width;
      starsCanvas.height = height;
    }

    function drawStars(timestamp: number) {
      if (!starsCtx) return;
      starsCtx.clearRect(0, 0, width, height);
      const time = timestamp * 0.001;
      stars.forEach(s => {
        const alpha = s.baseAlpha + 0.3 * Math.sin(time * 2 * s.speed + s.phase);
        starsCtx.beginPath();
        starsCtx.arc(s.x * width, s.y * height, s.radius, 0, 2 * Math.PI);
        starsCtx.fillStyle = `hsla(${s.hue}, 80%, 75%, ${Math.max(0.15, alpha)})`;
        starsCtx.shadowColor = s.hue === 280 ? '#b87cf7' : (s.hue === 180 ? '#40e0d0' : '#ffd700');
        starsCtx.shadowBlur = 10;
        starsCtx.fill();
      });
      requestAnimationFrame(drawStars);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    initStars(250);
    requestAnimationFrame(drawStars);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Rocket Animation
  useEffect(() => {
    const rocketCanvas = rocketCanvasRef.current;
    if (!rocketCanvas) return;
    const rocketCtx = rocketCanvas.getContext('2d');
    if (!rocketCtx) return;

    let rocketY = window.innerHeight + 50;

    function resizeRocketCanvas() {
      rocketCanvas.width = 180;
      rocketCanvas.height = window.innerHeight;
      rocketY = rocketCanvas.height + 50;
    }

    function drawRocket() {
      rocketCtx.clearRect(0, 0, rocketCanvas.width, rocketCanvas.height);
      const x = rocketCanvas.width / 2;
      const y = rocketY;
      const flamePulse = Math.sin(Date.now() * 0.01) * 5;

      // FLAME
      const flameGradient = rocketCtx.createLinearGradient(x - 16, y + 70, x + 16, y + 120 + flamePulse);
      flameGradient.addColorStop(0, '#FFD700');
      flameGradient.addColorStop(0.4, '#FF4500');
      flameGradient.addColorStop(1, '#8B0000');

      for (let i = 0; i < 3; i++) {
        const offset = i * 9 - 9;
        rocketCtx.beginPath();
        rocketCtx.moveTo(x - 11 + offset, y + 70);
        rocketCtx.lineTo(x + offset, y + 110 + Math.sin(Date.now() * 0.01 + i) * 12 + flamePulse * 0.5);
        rocketCtx.lineTo(x + 11 + offset, y + 70);
        rocketCtx.closePath();
        rocketCtx.fillStyle = flameGradient;
        rocketCtx.shadowColor = '#FF4500';
        rocketCtx.shadowBlur = 28;
        rocketCtx.fill();
      }

      // BODY
      const metalGradient = rocketCtx.createLinearGradient(x - 28, y, x + 28, y + 100);
      metalGradient.addColorStop(0, '#E8E8E8');
      metalGradient.addColorStop(0.3, '#C0C0C0');
      metalGradient.addColorStop(0.7, '#A0A0A0');
      metalGradient.addColorStop(1, '#D0D0D0');

      rocketCtx.shadowColor = '#40e0d0';
      rocketCtx.shadowBlur = 22;

      rocketCtx.beginPath();
      rocketCtx.moveTo(x - 25, y + 70);
      rocketCtx.lineTo(x - 25, y + 22);
      rocketCtx.lineTo(x - 16, y + 12);
      rocketCtx.lineTo(x - 16, y);
      rocketCtx.lineTo(x, y - 16);
      rocketCtx.lineTo(x + 16, y);
      rocketCtx.lineTo(x + 16, y + 12);
      rocketCtx.lineTo(x + 25, y + 22);
      rocketCtx.lineTo(x + 25, y + 70);
      rocketCtx.closePath();

      rocketCtx.fillStyle = metalGradient;
      rocketCtx.fill();

      // RED STAR
      rocketCtx.shadowColor = '#ff0000';
      rocketCtx.shadowBlur = 16;
      const spikes = 5;
      const outerRadius = 11;
      const innerRadius = 4.5;
      const rot = Math.PI / 2 * 3;
      const step = Math.PI / spikes;
      const starX = x;
      const starY = y + 16;

      rocketCtx.beginPath();
      for (let i = 0; i < spikes; i++) {
        let angle = i * step * 2 + rot;
        rocketCtx.lineTo(starX + Math.cos(angle) * outerRadius, starY + Math.sin(angle) * outerRadius);
        angle += step;
        rocketCtx.lineTo(starX + Math.cos(angle) * innerRadius, starY + Math.sin(angle) * innerRadius);
      }
      rocketCtx.closePath();
      rocketCtx.fillStyle = '#FF0000';
      rocketCtx.fill();

      // WINDOW
      rocketCtx.shadowColor = '#b87cf7';
      rocketCtx.shadowBlur = 16;
      rocketCtx.beginPath();
      rocketCtx.arc(x, y + 40, 9, 0, 2 * Math.PI);
      rocketCtx.fillStyle = '#87CEEB';
      rocketCtx.fill();

      rocketCtx.shadowBlur = 10;
      rocketCtx.beginPath();
      rocketCtx.arc(x - 2, y + 38, 3.5, 0, 2 * Math.PI);
      rocketCtx.fillStyle = '#FFFFFF';
      rocketCtx.fill();

      // STABILIZERS
      rocketCtx.shadowColor = '#40e0d0';
      rocketCtx.shadowBlur = 16;

      rocketCtx.beginPath();
      rocketCtx.moveTo(x - 25, y + 55);
      rocketCtx.lineTo(x - 36, y + 55);
      rocketCtx.lineTo(x - 25, y + 38);
      rocketCtx.closePath();
      rocketCtx.fillStyle = '#B0B0B0';
      rocketCtx.fill();

      rocketCtx.beginPath();
      rocketCtx.moveTo(x + 25, y + 55);
      rocketCtx.lineTo(x + 36, y + 55);
      rocketCtx.lineTo(x + 25, y + 38);
      rocketCtx.closePath();
      rocketCtx.fillStyle = '#B0B0B0';
      rocketCtx.fill();

      // NOSE CONE
      rocketCtx.shadowColor = '#FFA500';
      rocketCtx.shadowBlur = 16;
      rocketCtx.beginPath();
      rocketCtx.moveTo(x - 9, y - 6);
      rocketCtx.lineTo(x, y - 19);
      rocketCtx.lineTo(x + 9, y - 6);
      rocketCtx.closePath();
      rocketCtx.fillStyle = '#FF8C00';
      rocketCtx.fill();
    }

    function animateRocket() {
      rocketY -= 0.2;
      if (rocketY < -200) {
        rocketY = rocketCanvas.height + 50;
      }
      drawRocket();
      requestAnimationFrame(animateRocket);
    }

    window.addEventListener('resize', resizeRocketCanvas);
    resizeRocketCanvas();
    animateRocket();

    return () => {
      window.removeEventListener('resize', resizeRocketCanvas);
    };
  }, []);

  // Meteor Animation
  useEffect(() => {
    const meteorCanvas = meteorCanvasRef.current;
    if (!meteorCanvas) return;
    const meteorCtx = meteorCanvas.getContext('2d');
    if (!meteorCtx) return;

    const PATH_RIGHT_TOP_TO_LEFT_BOTTOM = 0;
    const PATH_LEFT_TOP_TO_RIGHT_BOTTOM = 1;
    let meteorPath = PATH_RIGHT_TOP_TO_LEFT_BOTTOM;
    let meteorX = window.innerWidth + 50;
    let meteorY = -50;
    let meteorSpeed = 2.5;
    let meteorSize = 12;
    let switchTimer = 0;
    const SWITCH_INTERVAL = 15000;

    function resizeMeteorCanvas() {
      meteorCanvas.width = window.innerWidth;
      meteorCanvas.height = window.innerHeight;
    }

    function switchMeteorPath() {
      meteorPath = meteorPath === PATH_RIGHT_TOP_TO_LEFT_BOTTOM ? PATH_LEFT_TOP_TO_RIGHT_BOTTOM : PATH_RIGHT_TOP_TO_LEFT_BOTTOM;
      if (meteorPath === PATH_RIGHT_TOP_TO_LEFT_BOTTOM) {
        meteorX = window.innerWidth + 50;
        meteorY = -50;
      } else {
        meteorX = -50;
        meteorY = -50;
      }
      meteorSize = 8 + Math.random() * 10;
    }

    function updateMeteorPosition() {
      if (meteorPath === PATH_RIGHT_TOP_TO_LEFT_BOTTOM) {
        meteorX -= meteorSpeed * Math.cos(Math.PI / 3.5);
        meteorY += meteorSpeed * Math.sin(Math.PI / 3.5);
        if (meteorX < -100 || meteorY > meteorCanvas.height + 100) {
          meteorX = meteorCanvas.width + 50;
          meteorY = -50;
          meteorSize = 8 + Math.random() * 10;
        }
      } else {
        meteorX += meteorSpeed * Math.cos(Math.PI / 3.5);
        meteorY += meteorSpeed * Math.sin(Math.PI / 3.5);
        if (meteorX > meteorCanvas.width + 100 || meteorY > meteorCanvas.height + 100) {
          meteorX = -50;
          meteorY = -50;
          meteorSize = 8 + Math.random() * 10;
        }
      }
    }

    function drawMeteor() {
      meteorCtx.clearRect(0, 0, meteorCanvas.width, meteorCanvas.height);
      
      // TAIL
      for (let i = 0; i < 12; i++) {
        let tailX, tailY;
        if (meteorPath === PATH_RIGHT_TOP_TO_LEFT_BOTTOM) {
          tailX = meteorX + i * 8 * Math.cos(Math.PI / 3.5 + 0.2);
          tailY = meteorY - i * 8 * Math.sin(Math.PI / 3.5 + 0.2);
        } else {
          tailX = meteorX - i * 8 * Math.cos(Math.PI / 3.5 + 0.2);
          tailY = meteorY - i * 8 * Math.sin(Math.PI / 3.5 + 0.2);
        }
        const tailSize = meteorSize * (1 - i / 15);
        const opacity = 0.5 * (1 - i / 15);
        meteorCtx.beginPath();
        meteorCtx.arc(tailX, tailY, tailSize * 0.8, 0, Math.PI * 2);
        const tailGradient = meteorCtx.createRadialGradient(tailX, tailY, 0, tailX, tailY, tailSize);
        tailGradient.addColorStop(0, `rgba(255, 100, 0, ${opacity})`);
        tailGradient.addColorStop(0.5, `rgba(255, 50, 0, ${opacity * 0.5})`);
        tailGradient.addColorStop(1, `rgba(255, 0, 0, 0)`);
        meteorCtx.fillStyle = tailGradient;
        meteorCtx.shadowColor = '#FF6600';
        meteorCtx.shadowBlur = 20;
        meteorCtx.fill();
      }
      
      // CORE
      meteorCtx.shadowColor = '#FF3300';
      meteorCtx.shadowBlur = 30;
      meteorCtx.beginPath();
      meteorCtx.arc(meteorX, meteorY, meteorSize, 0, Math.PI * 2);
      const meteorGradient = meteorCtx.createRadialGradient(
        meteorX - 2, meteorY - 2, 0,
        meteorX, meteorY, meteorSize
      );
      meteorGradient.addColorStop(0, '#FFFF00');
      meteorGradient.addColorStop(0.4, '#FF6600');
      meteorGradient.addColorStop(0.8, '#CC3300');
      meteorGradient.addColorStop(1, '#882200');
      meteorCtx.fillStyle = meteorGradient;
      meteorCtx.fill();
      
      // SPARKS
      for (let i = 0; i < 5; i++) {
        const sparkX = meteorX + (Math.random() - 0.5) * meteorSize * 3;
        const sparkY = meteorY + (Math.random() - 0.5) * meteorSize * 3;
        meteorCtx.beginPath();
        meteorCtx.arc(sparkX, sparkY, 2 + Math.random() * 3, 0, Math.PI * 2);
        meteorCtx.fillStyle = `rgba(255, ${100 + Math.random() * 100}, 0, ${0.3 + Math.random() * 0.5})`;
        meteorCtx.fill();
      }
    }

    function animateMeteor() {
      switchTimer += 16;
      if (switchTimer >= SWITCH_INTERVAL) {
        switchMeteorPath();
        switchTimer = 0;
      }
      updateMeteorPosition();
      drawMeteor();
      requestAnimationFrame(animateMeteor);
    }

    window.addEventListener('resize', resizeMeteorCanvas);
    resizeMeteorCanvas();
    animateMeteor();

    return () => {
      window.removeEventListener('resize', resizeMeteorCanvas);
    };
  }, []);

  // Falling Star Animation
  useEffect(() => {
    const starCanvas = starCanvasRef.current;
    if (!starCanvas) return;
    const starCtx = starCanvas.getContext('2d');
    if (!starCtx) return;

    const PATH_RIGHT_TOP_TO_LEFT_BOTTOM = 0;
    const PATH_LEFT_TOP_TO_RIGHT_BOTTOM = 1;
    let starPath = PATH_LEFT_TOP_TO_RIGHT_BOTTOM;
    let starX = -50;
    let starY = -50;
    let starSpeed = 3;
    let starSize = 10;
    let starSwitchTimer = 0;
    const SWITCH_INTERVAL = 15000;

    function resizeStarCanvas() {
      starCanvas.width = window.innerWidth;
      starCanvas.height = window.innerHeight;
    }

    function switchStarPath() {
      starPath = starPath === PATH_LEFT_TOP_TO_RIGHT_BOTTOM ? PATH_RIGHT_TOP_TO_LEFT_BOTTOM : PATH_LEFT_TOP_TO_RIGHT_BOTTOM;
      if (starPath === PATH_LEFT_TOP_TO_RIGHT_BOTTOM) {
        starX = -50;
        starY = -50;
      } else {
        starX = window.innerWidth + 50;
        starY = -50;
      }
      starSize = 8 + Math.random() * 8;
      starSpeed = 2 + Math.random() * 3;
    }

    function updateStarPosition() {
      if (starPath === PATH_LEFT_TOP_TO_RIGHT_BOTTOM) {
        starX += starSpeed * Math.cos(Math.PI / 3.5);
        starY += starSpeed * Math.sin(Math.PI / 3.5);
        if (starX > starCanvas.width + 100 || starY > starCanvas.height + 100) {
          starX = -50;
          starY = -50;
          starSize = 8 + Math.random() * 8;
          starSpeed = 2 + Math.random() * 3;
        }
      } else {
        starX -= starSpeed * Math.cos(Math.PI / 3.5);
        starY += starSpeed * Math.sin(Math.PI / 3.5);
        if (starX < -100 || starY > starCanvas.height + 100) {
          starX = starCanvas.width + 50;
          starY = -50;
          starSize = 8 + Math.random() * 8;
          starSpeed = 2 + Math.random() * 3;
        }
      }
    }

    function drawStar() {
      starCtx.clearRect(0, 0, starCanvas.width, starCanvas.height);

      const colors = [
        { main: '#40e0d0', tail: '#40e0d0' },
        { main: '#b87cf7', tail: '#b87cf7' },
        { main: '#ffd966', tail: '#ffaa00' }
      ];
      const colorIndex = Math.floor(Date.now() / 3000) % colors.length;
      const starColor = colors[colorIndex];

      const tailLength = 80 + Math.sin(Date.now() * 0.003) * 35;

      // TAIL
      for (let i = 0; i < 12; i++) {
        let tailX, tailY;
        if (starPath === PATH_LEFT_TOP_TO_RIGHT_BOTTOM) {
          tailX = starX - i * (tailLength / 15) * Math.cos(Math.PI / 3.5 - 0.1);
          tailY = starY - i * (tailLength / 15) * Math.sin(Math.PI / 3.5 - 0.1);
        } else {
          tailX = starX + i * (tailLength / 15) * Math.cos(Math.PI / 3.5 - 0.1);
          tailY = starY - i * (tailLength / 15) * Math.sin(Math.PI / 3.5 - 0.1);
        }
        const tailSize = starSize * (1 - i / 18) * 1.2;
        const opacity = 0.6 * (1 - i / 15);

        starCtx.beginPath();
        starCtx.arc(tailX, tailY, tailSize * 0.4, 0, Math.PI * 2);

        const tailGradient = starCtx.createRadialGradient(tailX, tailY, 0, tailX, tailY, tailSize);
        tailGradient.addColorStop(0, starColor.tail + 'ff');
        tailGradient.addColorStop(0.5, starColor.tail + '80');
        tailGradient.addColorStop(1, starColor.tail + '00');

        starCtx.fillStyle = tailGradient;
        starCtx.shadowColor = starColor.tail;
        starCtx.shadowBlur = 15;
        starCtx.fill();
      }

      // STAR CORE
      starCtx.shadowColor = starColor.main;
      starCtx.shadowBlur = 25;

      const spikes = 5;
      const outerRadius = starSize * 1.2;
      const innerRadius = starSize * 0.5;
      const rotation = Date.now() * 0.002;

      starCtx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (Math.PI / spikes) * i + rotation;
        const x = starX + Math.cos(angle) * radius;
        const y = starY + Math.sin(angle) * radius;
        if (i === 0) starCtx.moveTo(x, y);
        else starCtx.lineTo(x, y);
      }
      starCtx.closePath();

      const starGradient = starCtx.createRadialGradient(
        starX - 3, starY - 3, 0,
        starX, starY, starSize * 1.5
      );
      starGradient.addColorStop(0, '#FFFFFF');
      starGradient.addColorStop(0.3, starColor.main);
      starGradient.addColorStop(0.8, starColor.main);
      starGradient.addColorStop(1, starColor.tail);

      starCtx.fillStyle = starGradient;
      starCtx.fill();

      starCtx.beginPath();
      starCtx.arc(starX, starY, starSize * 0.3, 0, Math.PI * 2);
      starCtx.fillStyle = '#FFFFFF';
      starCtx.shadowBlur = 20;
      starCtx.fill();
    }

    function animateStar() {
      starSwitchTimer += 16;
      if (starSwitchTimer >= SWITCH_INTERVAL) {
        switchStarPath();
        starSwitchTimer = 0;
      }
      updateStarPosition();
      drawStar();
      requestAnimationFrame(animateStar);
    }

    window.addEventListener('resize', resizeStarCanvas);
    resizeStarCanvas();
    animateStar();

    return () => {
      window.removeEventListener('resize', resizeStarCanvas);
    };
  }, []);

  // Comets Animation
  useEffect(() => {
    const cometCanvas = cometCanvasRef.current;
    if (!cometCanvas) return;
    const cometCtx = cometCanvas.getContext('2d');
    if (!cometCtx) return;

    interface Comet {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      color: string;
      size: number;
      life: number;
    }

    let comets: Comet[] = [];

    function resizeCometCanvas() {
      cometCanvas.width = window.innerWidth;
      cometCanvas.height = window.innerHeight;
    }

    function createComet(): Comet {
      return {
        x: Math.random() * cometCanvas.width,
        y: Math.random() * cometCanvas.height * 0.2 - 50,
        length: 50 + Math.random() * 100,
        speed: 5 + Math.random() * 10,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
        color: `hsl(${Math.random() * 60 + 180}, 80%, 70%)`,
        size: 1 + Math.random() * 2,
        life: 1.0
      };
    }

    function updateComets() {
      if (Math.random() < 0.02 && comets.length < 8) {
        comets.push(createComet());
      }

      for (let i = comets.length - 1; i >= 0; i--) {
        const c = comets[i];
        c.x += Math.cos(c.angle) * c.speed;
        c.y += Math.sin(c.angle) * c.speed;
        c.life -= 0.002;

        if (c.y > cometCanvas.height + 100 || c.x > cometCanvas.width + 100 || c.x < -100 || c.life <= 0) {
          comets.splice(i, 1);
        }
      }
    }

    function drawComets() {
      cometCtx.clearRect(0, 0, cometCanvas.width, cometCanvas.height);

      const colors = [
        { main: '#40e0d0', tail: '#40e0d0' },
        { main: '#b87cf7', tail: '#b87cf7' },
        { main: '#ffd966', tail: '#ffaa00' }
      ];

      comets.forEach((c, index) => {
        const colorIndex = index % colors.length;
        const starColor = colors[colorIndex];

        const tailLength = c.length * (0.8 + Math.sin(Date.now() * 0.005 + index) * 0.2);

        // Tail
        for (let i = 0; i < 10; i++) {
          const tailX = c.x - Math.cos(c.angle) * (tailLength * i / 8);
          const tailY = c.y - Math.sin(c.angle) * (tailLength * i / 8);
          const tailSize = c.size * (1.5 - i / 10) * 1.2;
          const opacity = 0.6 * (1 - i / 12) * c.life;

          cometCtx.beginPath();
          cometCtx.arc(tailX, tailY, tailSize, 0, Math.PI * 2);

          const tailGradient = cometCtx.createRadialGradient(tailX, tailY, 0, tailX, tailY, tailSize * 2);
          tailGradient.addColorStop(0, starColor.tail);
          tailGradient.addColorStop(0.5, starColor.tail);
          tailGradient.addColorStop(1, 'transparent');

          cometCtx.fillStyle = tailGradient;
          cometCtx.globalAlpha = opacity;
          cometCtx.shadowColor = starColor.tail;
          cometCtx.shadowBlur = 15;
          cometCtx.fill();
        }

        // Star Core
        cometCtx.globalAlpha = c.life;
        cometCtx.shadowColor = starColor.main;
        cometCtx.shadowBlur = 25;

        const spikes = 5;
        const outerRadius = c.size * 2.2;
        const innerRadius = c.size * 1.1;
        const rotation = Date.now() * 0.003 + index;

        cometCtx.beginPath();
        for (let i = 0; i < spikes * 2; i++) {
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          const angle = (Math.PI / spikes) * i + rotation;
          const x = c.x + Math.cos(angle) * radius;
          const y = c.y + Math.sin(angle) * radius;
          if (i === 0) cometCtx.moveTo(x, y);
          else cometCtx.lineTo(x, y);
        }
        cometCtx.closePath();

        const starGradient = cometCtx.createRadialGradient(
          c.x - 3, c.y - 3, 0,
          c.x, c.y, c.size * 3
        );
        starGradient.addColorStop(0, '#FFFFFF');
        starGradient.addColorStop(0.4, starColor.main);
        starGradient.addColorStop(1, starColor.tail);

        cometCtx.fillStyle = starGradient;
        cometCtx.fill();

        cometCtx.beginPath();
        cometCtx.arc(c.x, c.y, c.size * 0.8, 0, Math.PI * 2);
        cometCtx.fillStyle = '#FFFFFF';
        cometCtx.shadowBlur = 20;
        cometCtx.fill();

        cometCtx.globalAlpha = 1.0;
      });
    }

    function animateComets() {
      updateComets();
      drawComets();
      requestAnimationFrame(animateComets);
    }

    window.addEventListener('resize', resizeCometCanvas);
    resizeCometCanvas();
    animateComets();

    return () => {
      window.removeEventListener('resize', resizeCometCanvas);
    };
  }, []);

  // Cursor Trail Animation
  useEffect(() => {
    const cursorCanvas = cursorCanvasRef.current;
    if (!cursorCanvas) return;
    const cursorCtx = cursorCanvas.getContext('2d');
    if (!cursorCtx) return;

    const starColors = ['#E6E0FF', '#D8C9FF', '#C9B6FF', '#40E0D0', '#7FF0E0', '#B0F0E8'];

    class StarParticle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      life: number;
      rotation: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 4;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = starColors[Math.floor(Math.random() * starColors.length)];
        this.life = 100;
        this.rotation = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.2;
        this.life -= 2;
        this.rotation += 0.05;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        const spikes = 5;
        const outerRadius = this.size;
        const innerRadius = this.size / 2;
        for (let i = 0; i < spikes * 2; i++) {
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          const angle = (Math.PI / spikes) * i + this.rotation;
          const x = this.x + Math.cos(angle) * radius;
          const y = this.y + Math.sin(angle) * radius;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
      }
    }

    let particles: StarParticle[] = [];

    function resizeCursorCanvas() {
      cursorCanvas.width = window.innerWidth;
      cursorCanvas.height = window.innerHeight;
    }

    const handleMouseMove = (e: MouseEvent) => {
      for (let i = 0; i < 3; i++) {
        particles.push(new StarParticle(e.clientX, e.clientY));
      }
    };

    function animateCursor() {
      cursorCtx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(cursorCtx);
        if (particles[i].life <= 0 || particles[i].size <= 0.3) {
          particles.splice(i, 1);
          i--;
        }
      }
      requestAnimationFrame(animateCursor);
    }

    window.addEventListener('resize', resizeCursorCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCursorCanvas();
    animateCursor();

    return () => {
      window.removeEventListener('resize', resizeCursorCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Nebula layers */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 animate-[nebulaPulse_12s_ease-in-out_infinite_alternate]" 
           style={{
             background: `radial-gradient(ellipse at 20% 30%, rgba(184, 124, 247, 0.6) 0%, transparent 55%),
                          radial-gradient(ellipse at 80% 70%, rgba(64, 224, 208, 0.5) 0%, transparent 55%),
                          radial-gradient(ellipse at 50% 50%, rgba(100, 80, 180, 0.4) 0%, transparent 65%)`
           }}>
      </div>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 animate-[nebulaGlow_10s_ease-in-out_infinite_alternate]"
           style={{
             background: `radial-gradient(circle at 30% 40%, rgba(184, 124, 247, 0.25) 0%, transparent 45%),
                          radial-gradient(circle at 70% 60%, rgba(64, 224, 208, 0.2) 0%, transparent 50%),
                          radial-gradient(circle at 90% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 40%)`
           }}>
      </div>

      {/* Canvas layers */}
      <canvas ref={starsCanvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1]" />
      <canvas ref={meteorCanvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[2]" />
      <canvas ref={starCanvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[2]" />
      <canvas ref={cometCanvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[2]" />
      <canvas ref={rocketCanvasRef} className="fixed left-5 top-0 w-[190px] h-screen pointer-events-none z-[3]" />
      <canvas ref={cursorCanvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]" />

      <style>{`
        @keyframes nebulaPulse {
          0% { opacity: 0.5; transform: scale(1) translate(0, 0); filter: brightness(0.9); }
          50% { opacity: 0.8; transform: scale(1.03) translate(-1%, 1%); filter: brightness(1.1); }
          100% { opacity: 0.6; transform: scale(1.01) translate(1%, -1%); filter: brightness(1); }
        }
        @keyframes nebulaGlow {
          0% { opacity: 0.4; filter: blur(2px); }
          100% { opacity: 0.8; filter: blur(4px); }
        }
      `}</style>
    </>
  );
}
