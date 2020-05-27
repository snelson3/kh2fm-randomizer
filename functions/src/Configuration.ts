export enum GameMode {
	BASE_GAME,
	GOA_MOD,
}

export interface Configuration {
	seed: string;

	gameMode: {
		mode: GameMode;
		version: number;
	};

	stats: boolean;
	abilities: boolean;
	level50: boolean;
	level1: boolean;
	donaldAbilities: boolean;
	goofyAbilities: boolean;
	formAbilities: boolean;
	growthAbilities: boolean;

	simulatedTwilightTown: boolean;
	twilightTown: boolean;
	hollowBastion: boolean;
	cavernOfRemembrance: boolean;
	organizationXIII: boolean;
	beastsCastle: boolean;
	olympus: boolean;
	olympusCups: boolean;
	agrabah: boolean;
	landOfDragons: boolean;
	pooh: boolean;
	atlantica: boolean;
	prideLands: boolean;
	disneyCastle: boolean;
	timelessRiver: boolean;
	halloweenTown: boolean;
	portRoyal: boolean;
	spaceParanoids: boolean;
	twtnw: boolean;

	criticalMode: boolean;
	ultimaWeapon: boolean;
	maxGrowthAbilities: boolean;
	finalForm: boolean;
	synthItems: boolean;
}
