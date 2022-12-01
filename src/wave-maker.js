
const WaveFile = wavefile.WaveFile;
wav = new WaveFile();
const hz = 256;
const samples_per_wave = 32;
const number_of_waves = hz;
const length = samples_per_wave * number_of_waves;
const samples = new Array(length);
for (let i = 0; i < length; ++i){
		
		samples[i] = Math.floor(Math.sin(i / samples_per_wave * 2 * Math.PI) * 127.5 + 127.5);
}
wav.fromScratch(1, samples_per_wave * hz, '8', samples, {method: "point", LPF: false});

download(wav.toDataURI(), "middle_C_sine_1-second_32.wav");

function download(d, name){
		const a = document.createElement("a");
		a.textContent = `download ${name}`;
		a.setAttribute("href", d);
		a.setAttribute("download", name);
		document.body.appendChild(a);
}

