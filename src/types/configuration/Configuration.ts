import { GameMode } from "../enums";
import { defaultExperimental, Experimental } from "./Experimental";
import { defaultGoAModSettings, GoAModSettings } from "./GoAModSettings";
import { defaultInclude, Include } from "./Include";
import { defaultSettings, Settings } from "./Settings";
import { defaultWorlds, Worlds } from "./Worlds";

export interface Configuration {
	name: string;
	settings: Settings;
	worlds: Worlds;
	include: Include;
	experimental: Experimental;
	gameMode: {
		mode: GameMode;
		goa: GoAModSettings;
	};
}

export const defaultConfiguration: Omit<Configuration, "name"> = {
	settings: defaultSettings,
	worlds: defaultWorlds,
	include: defaultInclude,
	experimental: defaultExperimental,
	gameMode: {
		mode: GameMode.GOA_MOD,
		goa: defaultGoAModSettings,
	},
};
