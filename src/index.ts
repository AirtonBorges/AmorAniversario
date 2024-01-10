// Write TypeScript code!
import { Application } from '@splinetool/runtime';

// Import stylesheets
import './style.css';

const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
const app = new Application(canvas);
app.load('https://prod.spline.design/4FE5Qr2KeMOPI67c/scene.splinecode');
app.addEventListener('start', async (p) => {
    await (new Audio("https://www.myinstants.com/media/sounds/barbie_girl_lyrics.mp3")).play();
});
console.log(app);

app.load('Loading...');

