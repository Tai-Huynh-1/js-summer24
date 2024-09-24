class Psu {
	constructor() {
		this.state = { isOn: false };
	}

	power() {}
}

/**
 * Interface + Composition over inheritance:
 *
 * interface Computer {
 *      power(): bool
 *      type(input: string): bool
 * }
 */
class Computer {
	constructor(cpu, ram, hd, gpu, psu) {
		this.cpu = cpu;
		this.ram = ram;
		this.hd = hd;
		this.gpu = gpu;
		this.psu = psu;
	}

	power() {
		this.psu.power();
	}
}

const mypc = new Computer(new Cpu("intel atom"), new Ram("32gb"), ...new Psu("corsair"));
